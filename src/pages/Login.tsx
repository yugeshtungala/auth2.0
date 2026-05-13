import React from "react";

export const Login = () => {
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle login logic here
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <label> email</label>
          <input
            value={loginData.email}
            type="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label> password</label>
          <input
            value={loginData.password}
            type="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
