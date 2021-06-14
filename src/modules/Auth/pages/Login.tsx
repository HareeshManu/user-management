import React, { useState, useEffect } from "react";
import * as actions from "../_redux/authActions";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

const initialValues = {
  username: "manu",
  password: "",
};

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required('Username is Required'),
  password: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required('Password is Required'
    ),
});

function Login(props: any) {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(actions.getAllUsers());
  }, []);
  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: LoginSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      setTimeout(() => {
        actions.login(values.username, values.password)()
          .then((resp:any) => {
            console.log('resp', resp);
            if(resp.data === "success"){
              history.push("/home");
            }
           
          })
          .catch(() => {
            setSubmitting(false);
          });
      }, 500);
    },
  });

  return (
    <div className="auth-inner">
        <form
        onSubmit={formik.handleSubmit}
        >
           {formik.status ? (
          <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
            <div className="alert-text font-weight-bold">{formik.status}</div>
          </div>
        ) : (
          <></>
        )}

                <h3>Sign In</h3>

                <div className="form-group">
                    <label>User Name</label>
                    <input type="text" className="form-control" placeholder="Enter email"
                    {...formik.getFieldProps("username")}
                    />
                      {formik.touched.username && formik.errors.username ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.username}</div>
            </div>
          ) : null}
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"   {...formik.getFieldProps("password")}/>
                    {formik.touched.password && formik.errors.password ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.password}</div>
            </div>
          ) : null}
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">LOGIN</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            </div>
  );
}

export default Login;
