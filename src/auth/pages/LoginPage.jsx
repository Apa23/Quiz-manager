import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Card } from "antd";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import React, { useRef } from "react";
import "../../styles/loginPage.css";
import { useDispatch, useSelector } from "react-redux";
import { Backdrop, CircularProgress } from "@mui/material";
import { checkinAutentication } from "../../store/auth/thunks";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const LoginPage = () => {
  const navigate = useNavigate()
  const form = useRef();
  const dispatch = useDispatch();
  const info = useSelector((state) => state.auth);

  const handleSubmit = async () => {
    dispatch(checkinAutentication(form.current.values));
  };

  const formValues = {
    email: "",
    password: "",
  };

  let userSchema = object({
    email: string()
      .email("Must be a valid email")
      .required("Please Enter your Email"),
    password: string()
      .min(6, "Must be at least 6 characters long")
      .required("Please Enter your Password"),
  });

  if(info.status === "logged in"){
    Swal.fire({
      title: "Login Success!",
      text: "Clic the bottom to continue",
      icon: "success",
      confirmButtonText: "Continue",
      willClose: () => {
        navigate("/");
      },
    })
  }else if(info.status === "login error"){
    Swal.fire({
      title: 'Error!',
      text: 'Email or password was wrong',
      icon: 'error',
      confirmButtonText: 'Try Again'
    });
  }

  return (
    <div className="login-form">
      {info.status === "checkin" ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : null}
      <Card
        actions={[
          <button
            type="submit"
            onClick={() => {
              form.current.submitForm();
            }}
          >
            Login
          </button>,
        ]}
      >
        <div className="login-form-header">
          <span>Please enter your login info</span>
          <h1>Quiz manager</h1>
        </div>

        <Formik
          innerRef={form}
          initialValues={formValues}
          onSubmit={handleSubmit}
          validationSchema={userSchema}
        >
          <Form>
            <div className="form-group" id="email-field">
              <Field name="email" type="email" placeholder="Email" />
              <FontAwesomeIcon icon={faEnvelope} />
              <ErrorMessage
                name="email"
                className="error-message"
                component="span"
              />
            </div>
            <div className="form-group" id="password-field">
              <Field name="password" type="password" placeholder="Password" />
              <FontAwesomeIcon icon={faKey} />
              <ErrorMessage
                name="password"
                className="error-message"
                component="span"
              />
            </div>
          </Form>
        </Formik>
      </Card>
    </div>
  );
};
