import { useMemo } from "react";
import "./ContactSection.css";

const ContactSection = ({ frameDivTop }) => {
  const frameDiv12Style = useMemo(() => {
    return {
      top: frameDivTop,
    };
  }, [frameDivTop]);

  return (
    <div className="frame-parent134" style={frameDiv12Style}>
      <div className="image-23-parent5">
        <img className="image-23-icon7" alt="" src="/image-233@2x.png" />
        <div className="frame-parent135">
          <div className="ellipse-parent37">
            <div className="frame-child69" />
            <img className="instagram-icon7" alt="" src="/instagram.svg" />
          </div>
          <div className="ellipse-parent37">
            <div className="frame-child69" />
            <img className="whatsapp-icon7" alt="" src="/whatsapp.svg" />
          </div>
          <div className="ellipse-parent37">
            <div className="frame-child69" />
            <img className="facebook-f-icon7" alt="" src="/facebookf.svg" />
          </div>
        </div>
      </div>
      <div className="frame-parent136">
        <div className="na-kontaktoni-parent2">
          <div className="na-kontaktoni4">Na kontaktoni</div>
          <div className="phone-alt-parent2">
            <img className="phone-alt-icon4" alt="" src="/phonealt.svg" />
            <a className="a4" href="tel:0685087006" target="_blank">
              +355 68 50 87 006
            </a>
          </div>
          <div className="email-parent2">
            <img className="email-icon4" alt="" src="/email3@2x.png" />
            <div className="infoillyrianhomeal4">info@illyrianhome.al</div>
          </div>
        </div>
        <div className="menu-parent2">
          <div className="na-kontaktoni4">Menu</div>
          <div className="ellipse-parent40">
            <div className="frame-child72" />
            <div className="infoillyrianhomeal4">Rreth Nesh</div>
          </div>
          <div className="ellipse-parent40">
            <div className="frame-child72" />
            <div className="infoillyrianhomeal4">Njoftimet</div>
          </div>
          <div className="ellipse-parent40">
            <div className="frame-child72" />
            <div className="infoillyrianhomeal4">Blog</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
