import React, { use, useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../Redux/auth";
import type { AppDispatch } from "../Redux/store";

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors: any = {};
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
  };
  const submitForm = (e: any) => {
    e.preventDefault();
    console.log(errors);
    validateForm();
    if (Object.keys(errors).length === 0) {
      dispatch(registerUser(formData));
    }
  };

  return (
    <>
      <div>
        <h1>Register</h1>

        <form onSubmit={submitForm} noValidate>
          <div>
            <label> User name</label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={formData.username}
            />
            {errors.username && (
              <span style={{ color: "red" }}>{errors.username}</span>
            )}
          </div>
          <div>
            <label> email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email}</span>
            )}
          </div>
          <div>
            <label> Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
            />
            {errors.password && (
              <span style={{ color: "red" }}>{errors.password}</span>
            )}
          </div>
          <div>
            <label> Role</label>
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="">SelectRole</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            <p style={{ color: "red" }}>{errors.role}</p>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
