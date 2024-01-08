import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OrganizationCard1 from "../components/OrganizationCard1";
import SectionCard1 from "../components/SectionCard1";
import "./Desktop7.css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { getPostsVisitor } from "../redux/asyncActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Desktop7 = () => {
  const { page } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.activeFormsState.activeForm);
  useEffect(() => {
    dispatch(getPostsVisitor(page));

    if (Number(page) <= 0) {
      navigate("/blog/1");
    }
  }, [page]);

  const navigate = useNavigate();

  if (
    !state.postsVisitor.data ||
    !state ||
    !state.postsVisitor ||
    !state.postsVisitor.data[3]
  ) {
    return <div>Loading...</div>;
  }
  return (
    <div className="desktop-7">
      <OrganizationCard1 />
      <div className="frame-parent86">
        <SectionCard1 />

        <div className="navigationbarpage2">
          <div
            onClick={() => {
              navigate(`../blog/${Number(page) - 1}`, { replace: true });
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          {state.postsVisitor.data[3].map((d) => (
            <div
              onClick={() => {
                navigate(`../blog/${d}`, { replace: true });
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
              if (state.postsVisitor.data[2].length < 3) {
              } else {
                navigate(`../blog/${Number(page) + 1}`, { replace: true });
              }
            }}
          >
            {" "}
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
        <div className="frame-child44" />
      </div>
      <div className="image-23-parent2">
        <img className="image-23-icon4" alt="" src="/image-23@2x.png" />
        <div className="frame-parent87">
          <div className="ellipse-parent21">
            <div className="frame-child45" />
            <img className="instagram-icon4" alt="" src="/instagram.svg" />
          </div>
          <div className="ellipse-parent21">
            <div className="frame-child45" />
            <img className="whatsapp-icon4" alt="" src="/whatsapp.svg" />
          </div>
          <div className="ellipse-parent21">
            <div className="frame-child45" />
            <img className="facebook-f-icon4" alt="" src="/facebookf.svg" />
          </div>
        </div>
      </div>
      <div className="frame-parent88">
        <div className="na-kontaktoni-container">
          <div className="na-kontaktoni2">Na kontaktoni</div>
          <div className="phone-alt-container">
            <img className="phone-alt-icon2" alt="" src="/phonealt.svg" />
            <a className="a2" href="tel:0685087006" target="_blank">
              +355 68 50 87 006
            </a>
          </div>
          <div className="email-container">
            <img className="email-icon2" alt="" src="/email3@2x.png" />
            <div className="infoillyrianhomeal2">info@illyrianhome.al</div>
          </div>
        </div>
        <div className="menu-container">
          <div className="na-kontaktoni2">Menu</div>
          <div className="ellipse-parent24">
            <div className="frame-child48" />
            <div className="infoillyrianhomeal2">Rreth Nesh</div>
          </div>
          <div
            onClick={() => navigate("/njoftimet/1")}
            className="ellipse-parent24"
          >
            <div className="frame-child48" />
            <div className="infoillyrianhomeal2">Njoftimet</div>
          </div>
          <div onClick={() => navigate("/blog/1")} className="ellipse-parent24">
            <div className="frame-child48" />
            <div className="infoillyrianhomeal2">Blog</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop7;
