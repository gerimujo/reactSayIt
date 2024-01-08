import OrganizationCard from "../components/OrganizationCard";
import Component10 from "../components/Component10";
import "./IPhone1415ProMax3.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import Menu from "./Menu";
import { useEffect } from "react";
import { getPostsVisitorMobile } from "../redux/asyncActions";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const IPhone1415ProMax3 = () => {
  const naviagte = useNavigate();
  const { page } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.activeFormsState.activeForm);
  const body = [
    "frame-parent61",
    "frame-parent66",
    "frame-parent76",
    "frame-parent77",
    "frame-parent78",
    "frame-parent79",
  ];
  useEffect(() => {
    dispatch(getPostsVisitorMobile(page));

    if (Number(page) <= 0) {
      naviagte("/blog/1");
    } // Assuming state.postsVisitor is the object you're working with
  }, [page]);
  if (
    !state ||
    !state.postsVisitor ||
    !state.postsVisitor.data ||
    !state.postsVisitor.data[0] ||
    !state.postsVisitor.data[0][0].id ||
    !Array.isArray(state.postsVisitor.data[1])
  ) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <Menu />
      <div id={state.idmenu.idpartComponent} className="iphone-14-15-pro-max-3">
        <OrganizationCard />

        <div className="iphone-14-15-pro-max-3-inner">
          <div className="menagepagesdiv1">
            <div
              onClick={() => {
                naviagte(`../blog/${Number(page) - 1}`, { replace: true });
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            {state.postsVisitor.data[1][0].id == null ? (
              state.postsVisitor.data[1].map((d) => (
                <div
                  onClick={() => {
                    naviagte(`../blog/${d}`, { replace: true });
                  }}
                  style={{
                    backgroundColor: page == d ? " #ee1d23" : "white",
                    color: page == d ? "white" : "black",
                  }}
                >
                  {d}
                </div>
              ))
            ) : (
              <div
                style={{
                  backgroundColor: " #ee1d23",
                  color: "white",
                }}
              >
                1
              </div>
            )}
            <div
              onClick={() => {
                if (state.postsVisitor.data[0].length < 6) {
                } else {
                  naviagte(`../blog/${Number(page) + 1}`, {
                    replace: true,
                  });
                }
              }}
            >
              {" "}
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
          <div className="postimet-parent">
            <div className="postimet1">Postimet</div>
            <div className="frame-parent57">
              <div className="frame-parent60">
                {state.postsVisitor.data[0].map((d, i) => (
                  <div className={body[i]}>
                    <div
                      onClick={() => naviagte(`/post/${d.id}`)}
                      style={{
                        backgroundImage: `url(  data:video/mp4;base64,${d.photo1.imageData}`,
                      }}
                      className="frame23"
                    >
                      <div className="frame-parent58">
                        <div className="frame-parent59">
                          <div className="frame223">
                            <div className="udhetim144">{d.tipi}</div>
                          </div>
                          <div className="nentor-20236">{d.data}</div>
                        </div>
                        <div className="udhetim-ne-shengjergj6">{d.tipi}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Component10
          image23="/image-237@2x.png"
          email="/email6@2x.png"
          component10Height="43.25rem"
          component10Position="absolute"
          component10AlignSelf="unset"
          component10Width="100.87%"
          component10Top="169.31rem"
          component10Right="0%"
          component10Left="-0.87%"
          component10Bottom="unset"
          phoneAltWidth="3.48%"
          phoneAltTop="43.77%"
          phoneAltBottom="53.96%"
          phoneAltLeft="4.88%"
          phoneAltRight="91.64%"
          frameDivRight="67.43%"
          frameDivLeft="4.66%"
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
          frameDivRight1="58.19%"
          frameDivBottom1="5.94%"
          frameDivLeft1="13.9%"
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
          frameDivLeft2="13.67%"
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
          frameDivWidth3="57.69%"
          frameDivTop1="33.96%"
          frameDivRight3="28.59%"
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
  );
};

export default IPhone1415ProMax3;
