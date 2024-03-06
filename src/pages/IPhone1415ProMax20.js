import FormContainer3 from "../components/FormContainer3";
import LatestPostsSection from "../components/LatestPostsSection";
import Component10 from "../components/Component10";
import "./IPhone1415ProMax20.css";
import Menu from "./Menu";
import { MENU_HAP_TELEFON } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { getPostsVisitor } from "../redux/asyncActions";

const IPhone1415ProMax20 = () => {
  const scrollContainerRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.activeFormsState.activeForm);
  const registerFormActive = useSelector(
    (state) => state.activeFormsState.activeForm.bashkohuFormActive
  );

  const setScrollPosition = (scrollValue) => {
    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;
      const currentScrollPosition = scrollContainer.scrollLeft;

      const maxScroll =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;

      let newScrollPosition = currentScrollPosition + scrollValue;

      if (newScrollPosition > maxScroll) {
        newScrollPosition = 0;
      } else if (newScrollPosition < 0) {
        newScrollPosition = maxScroll;
      }

      scrollContainer.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    dispatch(getPostsVisitor(1));
    const intervalId = setInterval(() => {
      setScrollPosition(window.innerWidth);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  if (
    !state.postsVisitor.data ||
    !state ||
    !state.postsVisitor ||
    !state.postsVisitor.data[3]
  ) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Menu />
      <div
        id={state.idmenu.idpartComponent}
        className="iphone-14-15-pro-max-20"
      >
        <img className="image-290-icon" alt="" src="/image-290@2x.png" />
        <img className="image-291-icon" alt="" src="/image-2911@2x.png" />
        <div className="say-it-organization-parent">
          <div className="say-it-organization-container1">
            <span>Say it</span>
            <span className="span2">{` `}</span>
            <span>Organization</span>
          </div>
          <div className="empowering-youth-voices1">
            {" "}
            Empowering youth voices for a brighter tomorrow.
          </div>
          <div
            onClick={() => navigate("/bashkohu")}
            className="bashkohu-me-container"
          >
            <div className="bashkohu-me1">{`Bashkohu me `}</div>
          </div>
        </div>
        <FormContainer3 />
        <LatestPostsSection />
        <div className="iphone-14-15-pro-max-20-child" />
        <div className="partneret-parent">
          <div className="partneret1">Partneret</div>
          <div className="image-19-parent1">
            <div ref={scrollContainerRef} className="carousel-wrapper1">
              <span>
                <img className="image-19-icon1" alt="" src="/illyrian@2x.png" />
              </span>
              <span>
                <img className="image-19-icon1" alt="" src="/goodlife@2x.png" />
              </span>
              <span>
                <img
                  className="image-19-icon1"
                  alt=""
                  src="/investors@2x.png"
                />
              </span>
              <span>
                <img
                  className="image-19-icon1"
                  alt=""
                  src="/refreshlife@2x.png"
                />
              </span>{" "}
            </div>
          </div>
        </div>
        <Component10
          image23="/image-231@2x.png"
          email="/email1@2x.png"
          component10Height="18.65%"
          component10Position="absolute"
          component10AlignSelf="unset"
          component10Width="102.06%"
          component10Top="74.35%"
          component10Right="0%"
          component10Left="-2.06%"
          component10Bottom="0%"
          phoneAltWidth="3.49%"
          phoneAltTop="43.77%"
          phoneAltBottom="53.96%"
          phoneAltLeft="4.88%"
          phoneAltRight="91.63%"
          frameDivRight="67.45%"
          frameDivLeft="4.65%"
          frameDivHeight="14.53%"
          frameDivWidth="27.9%"
          frameDivBottom="18.03%"
          circleWidth="0.81rem"
          circleHeight="0.81rem"
          circleWidth1="0.63rem"
          circleHeight1="0.63rem"
          circleWidth2="0.63rem"
          circleHeight2="0.63rem"
          frameDivTop="64.69%"
          frameDivRight1="58.2%"
          frameDivBottom1="5.94%"
          frameDivLeft1="13.9%"
          frameDivHeight1="29.37%"
          frameDivWidth1="27.9%"
          ellipseDivWidth="0.56rem"
          ellipseDivHeight="0.56rem"
          ellipseDivWidth1="0.56rem"
          ellipseDivHeight1="0.56rem"
          ellipseDivWidth2="0.56rem"
          ellipseDivHeight2="0.56rem"
          frameDivHeight2="15.91%"
          frameDivWidth2="35.43%"
          frameDivRight2="50.9%"
          frameDivLeft2="13.67%"
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
          frameDivWidth3="57.67%"
          frameDivTop1="33.95%"
          frameDivRight3="28.62%"
          frameDivBottom3="45.35%"
          frameDivLeft3="13.71%"
          frameDivHeight3="20.7%"
          phoneAltIconWidth="1.13rem"
          phoneAltIconHeight="1.13rem"
          emailIconWidth="1.38rem"
          emailIconHeight="1.38rem"
        />
        <img
          className="menu-icon1"
          onClick={() => dispatch(MENU_HAP_TELEFON())}
          alt=""
          src="/menu1.svg"
        />
      </div>
    </div>
  );
};

export default IPhone1415ProMax20;
