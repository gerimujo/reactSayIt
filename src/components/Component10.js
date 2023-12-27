import { useMemo } from "react";
import "./Component10.css";
import { useNavigate } from "react-router-dom";

const Component10 = ({
  image23,
  email,
  component10Height,
  component10Position,
  component10AlignSelf,
  component10Width,
  component10Top,
  component10Right,
  component10Left,
  component10Bottom,
  phoneAltWidth,
  phoneAltTop,
  phoneAltBottom,
  phoneAltLeft,
  phoneAltRight,
  frameDivRight,
  frameDivLeft,
  frameDivHeight,
  frameDivWidth,
  frameDivBottom,
  circleWidth,
  circleHeight,
  circleWidth1,
  circleHeight1,
  circleWidth2,
  circleHeight2,
  frameDivTop,
  frameDivRight1,
  frameDivBottom1,
  frameDivLeft1,
  frameDivHeight1,
  frameDivWidth1,
  ellipseDivWidth,
  ellipseDivHeight,
  ellipseDivWidth1,
  ellipseDivHeight1,
  ellipseDivWidth2,
  ellipseDivHeight2,
  frameDivHeight2,
  frameDivWidth2,
  frameDivRight2,
  frameDivLeft2,
  frameDivBottom2,
  image23IconWidth,
  image23IconHeight,
  ellipseDivWidth3,
  ellipseDivHeight3,
  instagramIconTop,
  instagramIconLeft,
  instagramIconWidth,
  instagramIconHeight,
  ellipseDivWidth4,
  ellipseDivHeight4,
  whatsappIconTop,
  whatsappIconLeft,
  whatsappIconWidth,
  whatsappIconHeight,
  ellipseDivWidth5,
  ellipseDivHeight5,
  facebookFIconTop,
  facebookFIconLeft,
  facebookFIconWidth,
  facebookFIconHeight,
  frameDivWidth3,
  frameDivTop1,
  frameDivRight3,
  frameDivBottom3,
  frameDivLeft3,
  frameDivHeight3,
  phoneAltIconWidth,
  phoneAltIconHeight,
  emailIconWidth,
  emailIconHeight,
  marginTop,
}) => {
  const component10Style = useMemo(() => {
    return {
      height: component10Height,
      position: component10Position,
      alignSelf: component10AlignSelf,
      width: component10Width,
      top: component10Top,
      right: component10Right,
      left: component10Left,
      bottom: component10Bottom,
      marginTop: 270,
    };
  }, [
    component10Height,
    component10Position,
    component10AlignSelf,
    component10Width,
    component10Top,
    component10Right,
    component10Left,
    component10Bottom,
  ]);

  const phoneAltStyle = useMemo(() => {
    return {
      width: phoneAltWidth,
      top: phoneAltTop,
      bottom: phoneAltBottom,
      left: phoneAltLeft,
      right: phoneAltRight,
    };
  }, [phoneAltWidth, phoneAltTop, phoneAltBottom, phoneAltLeft, phoneAltRight]);

  const frameDiv2Style = useMemo(() => {
    return {
      right: frameDivRight,
      left: frameDivLeft,
      height: frameDivHeight,
      width: frameDivWidth,
      bottom: frameDivBottom,
    };
  }, [
    frameDivRight,
    frameDivLeft,
    frameDivHeight,
    frameDivWidth,
    frameDivBottom,
  ]);

  const circleStyle = useMemo(() => {
    return {
      width: circleWidth,
      height: circleHeight,
    };
  }, [circleWidth, circleHeight]);

  const circle1Style = useMemo(() => {
    return {
      width: circleWidth1,
      height: circleHeight1,
    };
  }, [circleWidth1, circleHeight1]);

  const circle2Style = useMemo(() => {
    return {
      width: circleWidth2,
      height: circleHeight2,
    };
  }, [circleWidth2, circleHeight2]);

  const frameDiv3Style = useMemo(() => {
    return {
      top: frameDivTop,
      right: frameDivRight1,
      bottom: frameDivBottom1,
      left: frameDivLeft1,
      height: frameDivHeight1,
      width: frameDivWidth1,
    };
  }, [
    frameDivTop,
    frameDivRight1,
    frameDivBottom1,
    frameDivLeft1,
    frameDivHeight1,
    frameDivWidth1,
  ]);

  const ellipseDivStyle = useMemo(() => {
    return {
      width: ellipseDivWidth,
      height: ellipseDivHeight,
    };
  }, [ellipseDivWidth, ellipseDivHeight]);

  const ellipseDiv1Style = useMemo(() => {
    return {
      width: ellipseDivWidth1,
      height: ellipseDivHeight1,
    };
  }, [ellipseDivWidth1, ellipseDivHeight1]);

  const ellipseDiv2Style = useMemo(() => {
    return {
      width: ellipseDivWidth2,
      height: ellipseDivHeight2,
    };
  }, [ellipseDivWidth2, ellipseDivHeight2]);

  const frameDiv4Style = useMemo(() => {
    return {
      height: frameDivHeight2,
      width: frameDivWidth2,
      right: frameDivRight2,
      left: frameDivLeft2,
      bottom: frameDivBottom2,
    };
  }, [
    frameDivHeight2,
    frameDivWidth2,
    frameDivRight2,
    frameDivLeft2,
    frameDivBottom2,
  ]);

  const image23IconStyle = useMemo(() => {
    return {
      width: image23IconWidth,
      height: image23IconHeight,
    };
  }, [image23IconWidth, image23IconHeight]);

  const ellipseDiv3Style = useMemo(() => {
    return {
      width: ellipseDivWidth3,
      height: ellipseDivHeight3,
    };
  }, [ellipseDivWidth3, ellipseDivHeight3]);

  const instagramIconStyle = useMemo(() => {
    return {
      top: instagramIconTop,
      left: instagramIconLeft,
      width: instagramIconWidth,
      height: instagramIconHeight,
    };
  }, [
    instagramIconTop,
    instagramIconLeft,
    instagramIconWidth,
    instagramIconHeight,
  ]);

  const ellipseDiv4Style = useMemo(() => {
    return {
      width: ellipseDivWidth4,
      height: ellipseDivHeight4,
    };
  }, [ellipseDivWidth4, ellipseDivHeight4]);

  const whatsappIconStyle = useMemo(() => {
    return {
      top: whatsappIconTop,
      left: whatsappIconLeft,
      width: whatsappIconWidth,
      height: whatsappIconHeight,
    };
  }, [
    whatsappIconTop,
    whatsappIconLeft,
    whatsappIconWidth,
    whatsappIconHeight,
  ]);

  const ellipseDiv5Style = useMemo(() => {
    return {
      width: ellipseDivWidth5,
      height: ellipseDivHeight5,
    };
  }, [ellipseDivWidth5, ellipseDivHeight5]);

  const facebookFIconStyle = useMemo(() => {
    return {
      top: facebookFIconTop,
      left: facebookFIconLeft,
      width: facebookFIconWidth,
      height: facebookFIconHeight,
    };
  }, [
    facebookFIconTop,
    facebookFIconLeft,
    facebookFIconWidth,
    facebookFIconHeight,
  ]);

  const frameDiv5Style = useMemo(() => {
    return {
      width: frameDivWidth3,
      top: frameDivTop1,
      right: frameDivRight3,
      bottom: frameDivBottom3,
      left: frameDivLeft3,
      height: frameDivHeight3,
    };
  }, [
    frameDivWidth3,
    frameDivTop1,
    frameDivRight3,
    frameDivBottom3,
    frameDivLeft3,
    frameDivHeight3,
  ]);

  const phoneAltIconStyle = useMemo(() => {
    return {
      width: phoneAltIconWidth,
      height: phoneAltIconHeight,
    };
  }, [phoneAltIconWidth, phoneAltIconHeight]);

  const emailIconStyle = useMemo(() => {
    return {
      width: emailIconWidth,
      height: emailIconHeight,
    };
  }, [emailIconWidth, emailIconHeight]);
  const navigate = useNavigate();
  return (
    <div
      onClick={() => console.log(marginTop)}
      className="component-10"
      style={component10Style}
    >
      <div className="phone-alt" style={phoneAltStyle} />
      <div className="frame-parent1" style={frameDiv2Style}>
        <div className="circle-wrapper">
          <div className="circle" style={circleStyle} />
        </div>
        <div className="circle-container">
          <div className="circle1" style={circle1Style} />
        </div>
        <div className="circle-container">
          <div className="circle1" style={circle2Style} />
        </div>
      </div>
      <div className="menu-parent" style={frameDiv3Style}>
        <div className="menu">Menu</div>
        <div className="ellipse-parent3">
          <div className="frame-child3" style={ellipseDivStyle} />
          <div className="infoillyrianhomeal">Rreth Nesh</div>
        </div>
        <div
          onClick={() => navigate("/njoftimet/1")}
          className="ellipse-parent3"
        >
          <div className="frame-child3" style={ellipseDiv1Style} />
          <div className="infoillyrianhomeal">Njoftimet</div>
        </div>
        <div onClick={() => navigate("/blog/1")} className="ellipse-parent3">
          <div className="frame-child3" style={ellipseDiv2Style} />
          <div className="infoillyrianhomeal">Blog</div>
        </div>
      </div>
      <div className="image-23-container" style={frameDiv4Style}>
        <img
          className="image-23-icon2"
          alt=""
          src={image23}
          style={image23IconStyle}
        />
        <div className="frame-parent2">
          <div className="ellipse-parent6">
            <div className="frame-child6" style={ellipseDiv3Style} />
            <img
              className="instagram-icon2"
              alt=""
              src="/instagram.svg"
              style={instagramIconStyle}
            />
          </div>
          <div className="ellipse-parent6">
            <div className="frame-child6" style={ellipseDiv4Style} />
            <img
              className="whatsapp-icon2"
              alt=""
              src="/whatsapp.svg"
              style={whatsappIconStyle}
            />
          </div>
          <div className="ellipse-parent6">
            <div className="frame-child6" style={ellipseDiv5Style} />
            <img
              className="facebook-f-icon2"
              alt=""
              src="/facebookf.svg"
              style={facebookFIconStyle}
            />
          </div>
        </div>
      </div>
      <div className="na-kontaktoni-parent" style={frameDiv5Style}>
        <div className="menu">Na kontaktoni</div>
        <div className="phone-alt-parent">
          <img
            className="phone-alt-icon"
            alt=""
            src="/phonealt.svg"
            style={phoneAltIconStyle}
          />
          <a className="a" href="tel:0685087006" target="_blank">
            +355 68 50 87 006
          </a>
        </div>
        <div className="email-parent">
          <img
            className="email-icon"
            alt=""
            src={email}
            style={emailIconStyle}
          />
          <div className="infoillyrianhomeal">info@illyrianhome.al</div>
        </div>
      </div>
    </div>
  );
};

export default Component10;
