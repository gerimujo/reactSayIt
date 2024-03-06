import Component10 from "../components/Component10";
import "./IPhone1415ProMax21.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const IPhone1415ProMax21 = () => {
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
    <div className="iphone-14-15-pro-max-21">
      <Component10
        image23="/image-232@2x.png"
        email="/email2@2x.png"
        component10Height="43.25rem"
        component10Position="absolute"
        component10AlignSelf="unset"
        component10Width="101.16%"
        component10Top="56.63rem"
        component10Right="-1.16%"
        component10Left="0%"
        component10Bottom="unset"
        phoneAltWidth="3.49%"
        phoneAltTop="43.77%"
        phoneAltBottom="53.96%"
        phoneAltLeft="4.87%"
        phoneAltRight="91.63%"
        frameDivRight="67.45%"
        frameDivLeft="4.64%"
        frameDivHeight="14.54%"
        frameDivWidth="27.91%"
        frameDivBottom="18.02%"
        circleWidth="0.81rem"
        circleHeight="0.81rem"
        circleWidth1="0.63rem"
        circleHeight1="0.63rem"
        circleWidth2="0.63rem"
        circleHeight2="0.63rem"
        frameDivTop="64.7%"
        frameDivRight1="58.18%"
        frameDivBottom1="5.94%"
        frameDivLeft1="13.91%"
        frameDivHeight1="29.36%"
        frameDivWidth1="27.91%"
        ellipseDivWidth="0.56rem"
        ellipseDivHeight="0.56rem"
        ellipseDivWidth1="0.56rem"
        ellipseDivHeight1="0.56rem"
        ellipseDivWidth2="0.56rem"
        ellipseDivHeight2="0.56rem"
        frameDivHeight2="15.9%"
        frameDivWidth2="35.43%"
        frameDivRight2="50.9%"
        frameDivLeft2="13.68%"
        frameDivBottom2="76.17%"
        image23IconWidth="9.99rem"
        image23IconHeight="2.68rem"
        ellipseDivWidth3="2.5rem"
        ellipseDivHeight3="2.48rem"
        instagramIconTop="0.63rem"
        instagramIconLeft="0.63rem"
        instagramIconWidth="1.25rem"
        instagramIconHeight="1.25rem"
        ellipseDivWidth4="2.5rem"
        ellipseDivHeight4="2.48rem"
        whatsappIconTop="0.5rem"
        whatsappIconLeft="0.56rem"
        whatsappIconWidth="1.44rem"
        whatsappIconHeight="1.44rem"
        ellipseDivWidth5="2.5rem"
        ellipseDivHeight5="2.48rem"
        facebookFIconTop="0.5rem"
        facebookFIconLeft="0.44rem"
        facebookFIconWidth="1.56rem"
        facebookFIconHeight="1.56rem"
        frameDivWidth3="57.68%"
        frameDivTop1="33.96%"
        frameDivRight3="28.6%"
        frameDivBottom3="45.35%"
        frameDivLeft3="13.72%"
        frameDivHeight3="20.69%"
        phoneAltIconWidth="1.13rem"
        phoneAltIconHeight="1.13rem"
        emailIconWidth="1.38rem"
        emailIconHeight="1.38rem"
      />
      <img className="image-299-icon1" alt="" src="/image-2991@2x.png" />
      <img className="image-296-icon" alt="" src="/image-296@2x.png" />
      <img className="menu-icon" alt="" src="/menu.svg" />
      <div className="iphone-14-15-pro-max-21-child" />
      <div className="frame-parent15">
        <div className="login-parent">
          <div className="login">Login</div>
          <div className="rectangle-group">
            <div className="frame-child9" />
            <div className="frame-child10" />
            <div className="frame">
              <input
                placeholder="password"
                type="password"
                className="password"
                value={password}
                style={{ top: "-1rem" }}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="frame1">
              <input
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                className="password"
              ></input>
            </div>
          </div>
        </div>
        <div className="frame2">
          <div onClick={() => login()} className="log-in-container">
            <div className="log-in1">{`Log In `}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPhone1415ProMax21;
