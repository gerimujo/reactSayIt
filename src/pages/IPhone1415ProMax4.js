import { useEffect } from "react";
import Component10 from "../components/Component10";
import SectionCard from "../components/SectionCard";
import "./IPhone1415ProMax4.css";
import { getPostimVisitor } from "../redux/asyncActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useRef } from "react";
import Menu from "./Menu";
import { MENU_HAP_TELEFON } from "../redux/actions";

const IPhone1415ProMax4 = () => {
  const divRef = useRef();
  const { page } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.activeFormsState.activeForm);

  useEffect(() => {
    dispatch(getPostimVisitor(page));
  }, []);

  if (
    !state ||
    !state.postimhap ||
    !state.postimhap.data ||
    !state.postimhap.data.id
  ) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <Menu />
      <div
        id={state.idmenu.idpartComponent}
        style={{ height: "fit-content + 700px" }}
        className="iphone-14-15-pro-max-4"
      >
        <img className="image-296-icon1" alt="" src="/image-296@2x.png" />
        <img
          className="menu-icon3"
          onClick={() => dispatch(MENU_HAP_TELEFON())}
          alt=""
          src="/menu3.svg"
        />
        <div style={{ height: "fit-content" }}>
          <div ref={divRef} className="frame-parent56">
            <SectionCard />
            {state.postimhap.data.video && (
              <div>
                <video
                  className="frame20"
                  controls
                  alt=""
                  src={`data:video/mp4;base64,${state.postimhap.data.video.data}`}
                />
              </div>
            )}
          </div>

          <Component10
            image23="/image-236@2x.png"
            email="/email2@2x.png"
            component10Height="43.25rem"
            component10Position="relative"
            component10AlignSelf="unset"
            component10Width="101.16%"
            component10Top="unset"
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
        </div>
      </div>
    </div>
  );
};

export default IPhone1415ProMax4;
