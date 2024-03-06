import "./MenuContainer.css";
import { useNavigate } from "react-router-dom";
const MenuContainer = () => {
  const navigate = useNavigate();
  return (
    <div className="frame-parent173">
      <div className="na-kontaktoni-parent3">
        <div className="na-kontaktoni5">Na kontaktoni</div>
        <div className="phone-alt-parent3">
          <img className="phone-alt-icon5" alt="" src="/phonealt.svg" />
          <a className="a5" href="tel:0685087006" target="_blank">
            +355 68 50 87 006
          </a>
        </div>
        <div className="email-parent3">
          <img className="email-icon5" alt="" src="/email8@2x.png" />
          <div className="infoillyrianhomeal5">info@illyrianhome.al</div>
        </div>
      </div>
      <div className="menu-parent3">
        <div className="na-kontaktoni5">Menu</div>
        <div className="ellipse-parent43">
          <div className="frame-child92" />
          <div className="infoillyrianhomeal5">Rreth Nesh</div>
        </div>
        <div
          onClick={() => navigate("/njoftimet/1")}
          className="ellipse-parent43"
        >
          <div className="frame-child92" />
          <div className="infoillyrianhomeal5">Njoftimet</div>
        </div>
        <div onClick={() => navigate("/blog/1")} className="ellipse-parent43">
          <div className="frame-child92" />
          <div className="infoillyrianhomeal5">Blog</div>
        </div>
      </div>
    </div>
  );
};

export default MenuContainer;
