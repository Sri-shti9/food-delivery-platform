import { useState } from "react";
import api from "../AxioSetup/axios";

const Auth = () => {

  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // validation
  const handleValidation = () => {

    let tempErrors = {};
    let isValid = true;

    if (!isLogin && !formData.name) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // submit form
  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!handleValidation()) return;

    try {

      const endpoint = isLogin ? "/auth/login" : "/auth/signup";

      const payload = isLogin
        ? {
            email: formData.email,
            password: formData.password
          }
        : {
            name: formData.name,
            email: formData.email,
            password: formData.password
          };

      const response = await api.post(endpoint, payload);

      if (response.status === 200) {

        // if (isLogin) {
        //   localStorage.setItem("token", response.data.token);
        //   localStorage.setItem("user", JSON.stringify(response.data.user));
        // }

        alert(response.data.message || "Success");
      }

      setFormData({
        name: "",
        email: "",
        password: ""
      });

    } catch (error) {

      console.error("Auth error:", error);

      const msg =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Something went wrong";

      alert(msg);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">

      <div className="card p-4 shadow" style={{ width: "400px" }}>

        <h3 className="text-center mb-4">
          {isLogin ? "Login" : "Signup"} - Food Website
        </h3>

        <form onSubmit={handleSubmit}>

          {/* Name Field (Signup only) */}
          {!isLogin && (
            <div className="mb-3">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <small className="text-danger">{errors.name}</small>
              )}
            </div>
          )}

          {/* Email */}
          <div className="mb-3">
            <label>Email</label>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}
          </div>

          {/* Password */}
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <small className="text-danger">{errors.password}</small>
            )}
          </div>

          <div className="d-grid">
            <button className="btn btn-primary">
              {isLogin ? "Login" : "Signup"}
            </button>
          </div>

        </form>

        {/* Toggle */}
        <div className="text-center mt-3">

          {isLogin ? (
            <p>
              Don't have an account?{" "}
              <span
                style={{ cursor: "pointer", color: "blue" }}
                onClick={() => setIsLogin(false)}
              >
                Signup
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span
                style={{ cursor: "pointer", color: "blue" }}
                onClick={() => setIsLogin(true)}
              >
                Login
              </span>
            </p>
          )}

        </div>

      </div>

    </div>
  );
};

export default Auth;