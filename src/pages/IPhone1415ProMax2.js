import FormContainer1 from "../components/FormContainer1";
import Component10 from "../components/Component10";
import "./IPhone1415ProMax2.css";
import Menu from "./Menu";
import { useDispatch, useSelector } from "react-redux";
import { MENU_HAP_TELEFON } from "../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getNjoftimetFromVisitors } from "../redux/asyncActions";
import { useEffect } from "react";
import OrganizationRegistrationContai from "../components/OrganizationRegistrationContai";
import { useState } from "react";
import OrganizationRegistrationContai1 from "../components/OrganizationRegistrationContai1";

const IPhone1415ProMax2 = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.activeFormsState.activeForm);
  const registerFormActive = useSelector(
    (state) => state.activeFormsState.activeForm.bashkohuFormActive
  );
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const classesBody = [
    "41rem",
    "87rem",
    "131rem",
    "175rem",
    "219rem",
    "263rem",
  ];
  const { page } = useParams();
  useEffect(() => {
    dispatch(getNjoftimetFromVisitors(page));
  }, [page]);

  if (!state || !state.njoftimetVisitor || !state.njoftimetVisitor.data) {
    return (
      <div>
        <div>Loading</div>
      </div>
    );
  }
  return (
    <div className="njoftimetbigconatiner">
      <Menu />
      <div id={state.idmenu.idpartComponent} className="iphone-14-15-pro-max-2">
        <div className="frame39">
          <img className="frame-icon" alt="" src="/youngpeople@2x.png" />
          <img className="image-297-icon" alt="" src="/image-296@2x.png" />
          <img
            className="menu-icon2"
            onClick={() => dispatch(MENU_HAP_TELEFON())}
            alt=""
            src="/menu2.svg"
          />

          {state.njoftimetVisitor.data[3].map((d, i) => (
            <FormContainer1 item={d} frameDivTop={classesBody[i]} />
          ))}
          <b className="njoftimet7">Njoftimet</b>
          <div className="menagepagesdiv">
            <div
              onClick={() => {
                navigate(`../njoftimet/${Number(page) - 1}`, { replace: true });
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            {state.njoftimetVisitor.data[2].map((d, i) => (
              <div
                onClick={() => {
                  navigate(`../njoftimet/${d}`, { replace: true });
                }}
                style={{
                  backgroundColor: page == d ? " #ee1d23" : "white",
                  color: page == d ? "white" : "black",
                }}
              >
                {d}
              </div>
            ))}

            <div
              onClick={() => {
                if (state.njoftimetVisitor.data[1].length < 3) {
                } else {
                  navigate(`../njoftimet/${Number(page) + 1}`, {
                    replace: true,
                  });
                }
              }}
            >
              {" "}
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </div>
        <div className="frame-parent83">
          <div className="say-it-organization-group">
            <div className="say-it-organization-container2">
              <span id="sayitText">Say it</span>
              <span className="span3">{` `}</span>
              <span id="sayitText">Organization</span>
            </div>
            <div className="empowering-youth-voices2">
              Empowering youth voices for a brighter tomorrow.
            </div>
          </div>
          <div className="frame-parent84">
            <div
              onClick={() => navigate("/bashkohu")}
              className="bashkohu-me-frame"
            >
              <div className="bashkohu-me2">{`Bashkohu me ne `}</div>
            </div>
            <div className="njoftimet-parent">
              <div className="njoftimet8">Njoftimet</div>
              <img className="arrow-icon" alt="" src="/arrow-3.svg" />
            </div>
          </div>
        </div>
        <div
          className="iphone-14-15-pro-max-5-inner"
          style={{ display: registerFormActive == false ? "none" : "block" }}
        >
          <OrganizationRegistrationContai1 top1={scrollY + "px"} />
        </div>
        <Component10
          image23="/image-238@2x.png"
          email="/email7@2x.png"
          component10Height="14.52%"
          component10Position="absolute"
          component10AlignSelf="unset"
          component10Width="102.1%"
          component10Top="81.34%"
          component10Right="0%"
          component10Left="-2.1%"
          component10Bottom="-0.86%"
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
    </div>
  );
};

export default IPhone1415ProMax2;
