import ContactSection from "../components/ContactSection";
import "./Desktop11.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Desktop11 = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const login = async () => {
    try {
      const body = { username: username, password: password };
      const response = await fetch("http://localhost:8080/api/auth/login", {
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",

        withCredentials: true,
      });
      if (!response.ok) {
        setError("Te dhenat nuk jane te sakta");
      }

      const token = response.headers.get("Authorization");

      if (token) {
        localStorage.setItem("token1", token);
        navigate("/njoftimetadmin/1");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="desktop-11">
      <img className="image-298-icon" alt="" src="/image-298@2x.png" />
      <img
        onClick={() => navigate("/")}
        className="image-298-icon1"
        alt=""
        src="/image-2981@2x.png"
      />
      <div className="kryefaqja-group">
        <div onClick={() => navigate("/")} className="kryefaqja1">
          Kryefaqja
        </div>
        <div className="kryefaqja1">Rreth Nesh</div>
        <div onClick={() => navigate("/njoftimet/1")} className="kryefaqja1">
          Njoftimet
        </div>
        <div onClick={() => navigate("/blog/1")} className="kryefaqja1">
          Blog
        </div>
      </div>
      <div className="log-in-frame">
        <div className="log-in2">Log in</div>
      </div>
      <ContactSection />
      <div className="frame-parent37">
        <div className="login-group">
          <div className="login1">Login</div>
          <div className="rectangle-container">
            <div className="frame-child35" />
            <div className="frame-child36" />
            <div className="frame15">
              <input
                placeholder="password"
                type="password"
                style={{ top: "-0.8rem" }}
                className="password1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <p className="errormessage">{error}</p>
            <div className="frame16">
              <input
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                className="password1"
              ></input>
            </div>
          </div>
        </div>
        <div className="frame17">
          <div onClick={() => login()} className="log-in-wrapper1">
            <div className="log-in3">{`Log In `}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop11;
