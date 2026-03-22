import { useState } from "react";
import api from "../axiosSetup/axios";
import { useNavigate } from "react-router-dom";

const Auth = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("user");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const endpoint = isLogin ? "/auth/login" : "/auth/signup";

      const payload = isLogin
        ? {
            email: formData.email,
            password: formData.password,
            role, // ✅ only login
          }
        : {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          };

      const response = await api.post(endpoint, payload);

      if (isLogin) {
        // ✅ Save token + user
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        setIsAuth(true);

        // ✅ Role-based redirect
        const userRole = response.data.user.role;

        if (userRole === "admin") {
          navigate("/admin");
        } else if (userRole === "supplier") {
          navigate("/supplier");
        } else {
          navigate("/home");
        }
      } else {
        alert("Signup successful! Please login.");
        setIsLogin(true);
      }
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong ❌");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">

        {/* LEFT */}
        <div className="auth-left">

          <h2>{isLogin ? "Welcome Back 👋" : "Create Account 🚀"}</h2>
          <p>
            {isLogin
              ? "Login to continue"
              : "Signup as a normal user"}
          </p>

          {/* ROLE SELECT (only for login) */}
          {isLogin && (
            <div className="role-tabs">
              {["user", "admin", "supplier"].map((r) => (
                <button
                  key={r}
                  type="button"
                  className={role === r ? "active" : ""}
                  onClick={() => setRole(r)}
                >
                  {r}
                </button>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            {!isLogin && (
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                required
              />
            )}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />

            <button className="auth-btn">
              {isLogin ? "Login" : "Signup"}
            </button>

          </form>

          {/* TOGGLE */}
          <div className="toggle">
            {isLogin ? (
              <p>
                Don't have an account?{" "}
                <span onClick={() => setIsLogin(false)}>Signup</span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span onClick={() => setIsLogin(true)}>Login</span>
              </p>
            )}
          </div>

        </div>

        {/* RIGHT */}
        <div className="auth-right">
          <div className="overlay">
            <h1>Food App 🍔</h1>
            <p>Order fast. Eat fresh.</p>
          </div>
        </div>

      </div>

      {/* CSS */}
      <style>{`
        .auth-wrapper {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea, #764ba2);
        }

        .auth-card {
          display: flex;
          width: 900px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(15px);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        }

        .auth-left {
          flex: 1;
          padding: 40px;
          background: white;
        }

        h2 {
          margin-bottom: 10px;
        }

        p {
          color: gray;
          margin-bottom: 20px;
        }

        .role-tabs {
          display: flex;
          background: #f1f1f1;
          border-radius: 10px;
          margin-bottom: 20px;
        }

        .role-tabs button {
          flex: 1;
          padding: 10px;
          border: none;
          background: transparent;
          cursor: pointer;
          border-radius: 10px;
        }

        .role-tabs .active {
          background: #667eea;
          color: white;
          font-weight: bold;
        }

        input {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          border-radius: 10px;
          border: 1px solid #ddd;
          outline: none;
        }

        input:focus {
          border-color: #667eea;
        }

        .auth-btn {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          background: #667eea;
          color: white;
          border: none;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        .auth-btn:hover {
          background: #5a67d8;
        }

        .toggle span {
          color: #667eea;
          cursor: pointer;
          font-weight: bold;
        }

        .auth-right {
          flex: 1;
          background: url("https://images.unsplash.com/photo-1504674900247-0877df9cc836") center/cover;
          position: relative;
        }

        .overlay {
          height: 100%;
          width: 100%;
          background: rgba(0,0,0,0.5);
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .overlay h1 {
          font-size: 40px;
        }

        @media(max-width:768px){
          .auth-card{
            flex-direction: column;
            width: 90%;
          }
          .auth-right{
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default Auth;