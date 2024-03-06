import Component10 from "../components/Component10";
import OrganizationRegistrationContai from "../components/OrganizationRegistrationContai";
import "./IPhone1415ProMax5.css";
import { useDispatch, useSelector } from "react-redux";
import {
  BASHKOHU_REGISTER_FORM_ACTIVE,
  MENU_HAP_TELEFON,
} from "../redux/actions";

import Menu from "./Menu";

const IPhone1415ProMax5 = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.activeFormsState.activeForm);
  const registerFormActive = useSelector(
    (state) => state.activeFormsState.activeForm.bashkohuFormActive
  );
  return (
    <div className="bigcontainer-bashkohu">
      <Menu />
      <div id={state.idmenu.idpartComponent} className="iphone-14-15-pro-max-5">
        <div className="frame-parent38">
          <div className="frame-parent39">
            <div className="behu-pjese-e-organizates-tone-parent">
              <div className="behu-pjese-e">{`Behu pjese e organizates tone  `}</div>
              <div className="image-293-parent">
                <img
                  className="image-293-icon"
                  alt=""
                  src="/image-293@2x.png"
                />
                <div className="jeni-gati-pr-container">
                  <p className="jeni-gati-pr">
                    Jeni gati për organizimin më të ri n’qytet? Je një i ri i
                    cili po kërkon një hapësirë të dedikuar vetëm ty? Dëshiron
                    të bëhesh pjesë e një grupi të rinjsh cool dhe të ndash me
                    ta eksperiencat dhe aspiratat e tua?
                  </p>
                  <p className="jeni-gati-pr">
                    <span className="say-it-sht">{` SAY IT është zyrtarisht këtu! `}</span>
                    <span>
                      Për të gjithë ju që dëshironi të jeni pjesë e
                      aktiviteteve, eventeve dhe organizimeve të ndryshme, ku ju
                      dhe miqtë tuaj do të jeni kryefjala e tyre mos nguroni të
                      plotësoni formularin e mëposhtëm. Aventura sapo ka nisur!
                    </span>
                  </p>
                  <p className="jeni-gati-pr">&nbsp;</p>
                  <p className="jeni-gati-pr">
                    Buckle up, sepse gjëra të mëdha po vinë!
                  </p>
                  <p className="jeni-gati-pr">Mos rri por #thuje !</p>
                </div>
              </div>
            </div>
            <div className="frame18">
              <div
                onClick={() => dispatch(BASHKOHU_REGISTER_FORM_ACTIVE())}
                className="rregjistrohu-wrapper"
              >
                <div className="rregjistrohu">Rregjistrohu</div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="menu-icon2"
          onClick={() => dispatch(MENU_HAP_TELEFON())}
          alt=""
          src="/menu2.svg"
        />
        <img className="image-297-icon" alt="" src="/image-296@2x.png" />
        <div
          className="iphone-14-15-pro-max-5-inner"
          style={{ display: registerFormActive == false ? "none" : "block" }}
        >
          <OrganizationRegistrationContai />
        </div>
      </div>
      <Component10
        image23="/image-234@2x.png"
        email="/email4@2x.png"
        component10Height="45.63rem"
        component10Position="relative"
        component10AlignSelf="stretch"
        component10Width="unset"
        component10Top="60%"
        component10Right="unset"
        component10Left="unset"
        component10Bottom="unset"
        phoneAltWidth="3.48%"
        phoneAltTop="43.78%"
        phoneAltBottom="53.95%"
        phoneAltLeft="4.89%"
        phoneAltRight="91.63%"
        frameDivRight="67.46%"
        frameDivLeft="4.64%"
        frameDivHeight="14.53%"
        frameDivWidth="27.9%"
        frameDivBottom="18.03%"
        circleWidth="0.81rem"
        circleHeight="0.81rem"
        circleWidth1="0.63rem"
        circleHeight1="0.63rem"
        circleWidth2="0.63rem"
        circleHeight2="0.63rem"
        frameDivTop="64.7%"
        frameDivRight1="58.19%"
        frameDivBottom1="5.93%"
        frameDivLeft1="13.91%"
        frameDivHeight1="29.37%"
        frameDivWidth1="27.9%"
        ellipseDivWidth="0.56rem"
        ellipseDivHeight="0.56rem"
        ellipseDivWidth1="0.56rem"
        ellipseDivHeight1="0.56rem"
        ellipseDivWidth2="0.56rem"
        ellipseDivHeight2="0.56rem"
        frameDivHeight2="15.9%"
        frameDivWidth2="35.42%"
        frameDivRight2="50.89%"
        frameDivLeft2="13.68%"
        frameDivBottom2="76.16%"
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
        frameDivRight3="28.59%"
        frameDivBottom3="45.34%"
        frameDivLeft3="13.73%"
        frameDivHeight3="20.7%"
        phoneAltIconWidth="1.13rem"
        phoneAltIconHeight="1.13rem"
        emailIconWidth="1.38rem"
        emailIconHeight="1.38rem"
      />
    </div>
  );
};

export default IPhone1415ProMax5;
