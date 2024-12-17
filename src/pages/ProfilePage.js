import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faKey, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import "./ProfilePage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProfilePage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [user, setUser] = useState({ username: "", email: "", password: "", remember: false });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Handle form input change
  const handleForm = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isRegistering ? '/signup' : '/login';
    const response = await fetch(`http://localhost:4010${endpoint}`, {
      method: 'POST',
      body: JSON.stringify({
        username: user.username,
        email: user.email,
        password: user.password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      alert(isRegistering ? "Registered successfully!" : "Logged in successfully!");
      navigate("/ "); // Redirect to home page after login/registration
    } else {
      alert("Error: " + data.message || "An error occurred.");
    }
  };

  return (
    <div className="profile-page">
      <Header />
      <div className="profile-page-container">
        <div className="form-container">
          <h2 className="heading">{isRegistering ? "Sign Up" : "Log In"}</h2>
          <form onSubmit={handleSubmit}>
            {isRegistering && (
              <div className="input-group">
                <FontAwesomeIcon icon={faUser} className="icon" />
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  className="input"
                  value={user.username}
                  onChange={handleForm}
                />
              </div>
            )}
            <div className="input-group">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input"
                value={user.email}
                onChange={handleForm}
              />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faKey} className="icon" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input"
                value={user.password}
                onChange={handleForm}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="password-toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            <div className="remember-container">
              <label className="remember-label">
                <input
                  type="checkbox"
                  checked={user.remember}
                  onChange={(e) => setUser({ ...user, remember: e.target.checked })}
                />
                Remember Me
              </label>
            </div>
            <p className="terms-text">
              By continuing, you agree to VirtFit's <span>Terms of Use</span> and <span>Privacy Policy</span>.
            </p>
            <button type="submit" className="button">
              {isRegistering ? "Sign Up" : "Log In"}
            </button>
          </form>
          <p className="toggle-text">
            {isRegistering
              ? "Already have an account? "
              : "Don't have an account? "}
            <span
              onClick={() => setIsRegistering(!isRegistering)}
              className="toggle-link"
            >
              {isRegistering ? "Log In" : "Sign Up"}
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
