import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import * as actions from "../_redux/usersActions";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useFormik } from "formik";
import DatePicker from "../../Components/DatePicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Form, Field } from "formik";
import { useHistory } from "react-router-dom";

const initialValues = {
  title: "",
  firstname: "",
  lastname: "",
  gender: "",
  email: "",
  username: "",
  password: "",
  dob: "",
  phone: "",
};

const LoginSchema = Yup.object().shape({
  // title: Yup.string()
  //     .min(3, "Minimum 2 symbols")
  //     .max(3, "Maximum 3 symbols")
  //     .required('Title is Required'),
  // firstname: Yup.string()
  //     .min(3, "Minimum 3 symbols")
  //     .max(50, "Maximum 50 symbols")
  //     .required('Username is Required'),
  // gender: Yup.string()
  //     .min(3, "Minimum 3 symbols")
  //     .max(50, "Maximum 50 symbols")
  //     .required('Username is Required'),
  // username: Yup.string()
  //     .min(3, "Minimum 3 symbols")
  //     .max(50, "Maximum 50 symbols")
  //     .required('Username is Required'),
  // password: Yup.string()
  //     .min(3, "Minimum 3 symbols")
  //     .max(50, "Maximum 50 symbols")
  //     .required('Password is Required'
  //     ),
  // dob: Yup.string()
  //     .min(3, "Minimum 3 symbols")
  //     .max(50, "Maximum 50 symbols")
  //     .required('Username is Required'),
  // phone: Yup.string()
  //     .min(3, "Minimum 10 symbols")
  //     .max(50, "Maximum 10 symbols")
  //     .required('Username is Required'),
});

export const Register = (props: any) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        actions
          .createUser(values)()
          .then((resp: any) => {
            history.push("home");
          })
          .catch(() => {
            throw new Error("something wne wrong");
          });
      }}
    >
      {({
        handleSubmit,
        setFieldValue,
        values,
        errors,
        handleBlur,
        touched,
      }) => (
        <>
          <div className="registration-container">
            <Form>
              <h3>User Registration</h3>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-2">
                    <div className="form-group">
                      <label>Title</label>
                      <Field
                        as="select"
                        className="form-control input--style-4"
                        name="title"
                      >
                        <option value="Mr">Mr.</option>
                        <option value="Ms">Ms.</option>
                      </Field>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="form-group">
                      <label>First Name</label>
                      <Field
                        type="text"
                        className="form-control input--style-4"
                        placeholder="Enter First Name"
                        name="firstname"
                      />
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="form-group">
                      <label>Last Name</label>
                      <Field
                        type="text"
                        className="form-control input--style-4"
                        placeholder="Enter Last Name"
                        name="lastname"
                      />
                    </div>
                  </div>
                </div>

                <div className="row row-space">
                  <div className="col-6">
                    <div className="form-group">
                      <label>Date Of Birth</label>
                      <div className="input-group-icon">
                        <DatePicker
                          name="dob"
                          className="form-control input--style-4"
                          placeholder="Enter User Name"
                        />
                        {/* <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label>Gender</label>

                      <div className="p-t-10">
                        <label className="radio-container m-r-45">
                          Male
                          <Field
                            className="form-control input--style-4"
                            type="radio"
                            name="gender"
                            value="male"
                          />
                          <span className="checkmark"></span>
                        </label>
                        <label className="radio-container">
                          Female
                          <Field
                            className="form-control input--style-4"
                            type="radio"
                            name="gender"
                            value="female"
                          />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label>User Name</label>
                      <Field
                        type="text"
                        className="form-control input--style-4"
                        placeholder="Enter User Name"
                        name="username"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label>Password</label>
                      <Field
                        type="password"
                        className="form-control input--style-4"
                        placeholder="Enter password"
                        name="password"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <Field
                        type="text"
                        className="form-control input--style-4"
                        placeholder="Enter Phone"
                        name="phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3"></div>

                  <div className="col-6">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block"
                      onSubmit={() => handleSubmit()}
                    >
                      Register
                    </button>
                  </div>
                  <div className="col-3"></div>
                </div>
              </div>
            </Form>
          </div>
        </>
      )}
    </Formik>
  );
};
