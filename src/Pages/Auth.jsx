import { useState } from "react";
import api from "../axiosSetup/axios";
import { useNavigate } from "react-router-dom";

const Auth = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!handleValidation()) return;

    try {
      const endpoint = isLogin ? "/auth/login" : "/auth/signup";

      const payload = isLogin
        ? { email: formData.email, password: formData.password }
        : { name: formData.name, email: formData.email, password: formData.password };

      const response = await api.post(endpoint, payload);

      if (response.status === 200) {
        if (isLogin) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));

          setIsAuth(true);
          navigate("/home");
        }

        alert(response.data.message || "Success");
      }

      setFormData({ name: "", email: "", password: "" });

    } catch (error) {
      const msg =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Something went wrong";

      alert(msg);
    }
  };

  return (
    <div className="auth-container d-flex justify-content-center align-items-center">

      <div className="auth-card">

        <h3 className="text-center mb-4 text-white">
          {isLogin ? "Welcome Back 👋" : "Create Account 🚀"}
        </h3>

        <form onSubmit={handleSubmit}>

          {!isLogin && (
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control custom-input"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <small className="text-danger">{errors.name}</small>}
            </div>
          )}

          <div className="mb-3">
            <input
              type="text"
              name="email"
              className="form-control custom-input"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="password"
              className="form-control custom-input"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <small className="text-danger">{errors.password}</small>}
          </div>

          <div className="d-grid">
            <button className="btn auth-btn">
              {isLogin ? "Login" : "Signup"}
            </button>
          </div>

        </form>

        {/* Toggle */}
        <div className="text-center mt-3">
          {isLogin ? (
            <p className="text-light">
              Don’t have an account?{" "}
              <span className="toggle" onClick={() => setIsLogin(false)}>
                Signup
              </span>
            </p>
          ) : (
            <p className="text-light">
              Already have an account?{" "}
              <span className="toggle" onClick={() => setIsLogin(true)}>
                Login
              </span>
            </p>
          )}
        </div>

      </div>

      {/* CSS */}
      <style>{`
        .auth-container {
          height: 100vh;
          background: linear-gradient(135deg, #1f2937, #111827);
        }

        .auth-card {
          width: 380px;
          padding: 30px;
          border-radius: 20px;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        }

        .custom-input {
          background: rgba(255,255,255,0.1);
          border: none;
          color: white;
          padding: 10px;
        }

        .custom-input::placeholder {
          color: #d1d5db;
        }

        .custom-input:focus {
          background: rgba(255,255,255,0.15);
          color: white;
          box-shadow: 0 0 0 2px #ff6b6b;
        }

        .auth-btn {
          background: linear-gradient(135deg, #ff6b6b, #ff3b3b);
          color: white;
          border: none;
          padding: 10px;
          border-radius: 10px;
          transition: 0.3s;
        }

        .auth-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(255,107,107,0.4);
        }

        .toggle {
          color: #ff6b6b;
          cursor: pointer;
          font-weight: 600;
        }

        .toggle:hover {
          text-decoration: underline;
        }
      `}</style>

    </div>
  );
};

export default Auth;