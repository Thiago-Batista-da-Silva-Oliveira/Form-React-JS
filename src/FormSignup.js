import React from "react";
import useForm from "./useForm"
import validate from './validateInfo'
import './Form.css'
const FormSignup = ({submitForm}) => {

    const{handleChange,values, handleSubmit,errors} = useForm(submitForm,validate)

  return (
    <>
      <div className="form-content-right">
        <form className="form" onSubmit={handleSubmit}>
          <h1>
            Get started with us today! Create your account by filling out the
            information below
          </h1>
          <div className="form-inputs">
            <label className="form-label" htmlFor="username">
              Username
            </label>
            <input
              className="form-input"
              type="text"
              id="username"
              placeholder="Enter your username"
              name="username"
              value = {values.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-input"
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
              value = {values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-input"
              type="password"
              id="password"
              placeholder="Enter your password"
              name="password"
              value = {values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label" htmlFor="password2">
              Confirm Password
            </label>
            <input
              className="form-input"
              type="password"
              id="password2"
              placeholder="Enter your password"
              name="password2"
              value = {values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p>{errors.password2}</p>}
          </div>

          <button className="form-input-btn" type="submit">
            Sign Up
          </button>
          <span className="form-input-login">
            Already have an account? Login <a href="#">Here</a>
          </span>
        </form>
      </div>
    </>
  );
};

export default FormSignup;
