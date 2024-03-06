import "./NavigationContainer.css";
import { useNavigate } from "react-router-dom";

const NavigationContainer = () => {
  const navigate = useNavigate();
  return (
    <div className="frame-parent114">
      <div className="na-kontaktoni-parent1">
        <div className="na-kontaktoni3">Na kontaktoni</div>
        <div className="phone-alt-parent1">
          <img className="phone-alt-icon3" alt="" src="/phonealt.svg" />
          <a className="a3" href="tel:0685087006" target="_blank">
            +355 68 50 87 006
          </a>
        </div>
        <div className="email-parent1">
          <img className="email-icon3" alt="" src="/email@2x.png" />
          <div className="infoillyrianhomeal3">info@illyrianhome.al</div>
        </div>
      </div>
      <div className="menu-parent1">
        <div className="na-kontaktoni3">Menu</div>
        <div className="ellipse-parent33">
          <div className="frame-child59" />
          <div className="infoillyrianhomeal3">Rreth Nesh</div>
        </div>
        <div
          onClick={() => navigate("/njoftimet/1")}
          className="ellipse-parent33"
        >
          <div className="frame-child59" />
          <div className="infoillyrianhomeal3">Njoftimet</div>
        </div>
        <div onClick={() => navigate("/blog/1")} className="ellipse-parent33">
          <div className="frame-child59" />
          <div className="infoillyrianhomeal3">Blog</div>
        </div>
      </div>
    </div>
  );
};

export default NavigationContainer;
