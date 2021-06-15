import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import * as actions from "../_redux/usersActions";
import styles from "../users.module.css";
import { RootState } from "../../../app/store";
import { useHistory } from "react-router-dom";
import {
  CardColumns,
  Container,
  Row,
  Col,
  Card,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserPlus } from "@fortawesome/free-solid-svg-icons";

function Users() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getAllUsers());
  }, []);
  const { users } = useSelector(
    (state: RootState) => ({
      users: state.user.users,
    }),
    shallowEqual
  );
  const capitalizeFirstLetter = (string: any) => {
    if (string) return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const handleSearchChange = (event: any) => {
    dispatch(actions.searchUser(event.target.value));
  };

  const addNewuser = () => {
    history.push("/register");
  };

  const renderCard = (card: any, index: any) => {
    const { user } = card;
    return (
      <Col md={4} xs={6}>
        <CardColumns>
          <Card style={{ width: "18rem" }} key={index} className="box">
            <Card.Img variant="top" src={user.picture?.large} />
            <Card.Body className="latest-books">
              <Card.Title>{`${capitalizeFirstLetter(
                user.name?.title || user?.title
              )} ${user.name?.first}  ${user.name?.last}`}</Card.Title>
              <Card.Text>
                <div className="latest-date"> {user.phone}</div>
                <div className="latest-date"> {user.email}</div>
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                Location
              </Card.Subtitle>
              <div className="latest-desc">{`${user.location?.street} ${user.location?.city}`}</div>
              <Button className="know-more" variant="primary">
                know more
              </Button>
            </Card.Body>
          </Card>
        </CardColumns>
      </Col>
    );
  };

  return (
    <>
      <div className="search-header">
        <Container>
          <Row className="justify-content-md-center">
            <Col md={8}>
              <Form>
                <FormControl
                  type="text"
                  placeholder="Search..."
                  className="search-box mr-sm-2"
                  onChange={handleSearchChange}
                />
                <Button variant="outline-success" className="search-button">
                  <FontAwesomeIcon
                    icon={faSearch}
                    fixedWidth
                    className="mr-2 align-middle"
                  />
                </Button>
              </Form>
            </Col>
            <Col md={4} className="user-create-container">
              <Button className="create-btn" active onClick={addNewuser}>
              <FontAwesomeIcon
                    icon={faUserPlus}
                    fixedWidth
                    className="mr-2 align-middle"
                  />
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="middle-section">
        <Container fluid className="book-list">
          <Row>{users.map(renderCard)}</Row>
        </Container>
      </Container>
    </>
  );
}

export default Users;
