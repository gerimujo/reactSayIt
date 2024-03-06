import LatestPostsContainer from "../components/LatestPostsContainer";
import FormContainer2 from "../components/FormContainer2";
import NavigationContainer from "../components/NavigationContainer";
import "./Desktop5.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPostsVisitor } from "../redux/asyncActions";
import { useRef } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Desktop5 = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);
  const state = useSelector((state) => state.activeFormsState.activeForm);
  const dispatch = useDispatch();

  const [position, setPosition] = useState(0);

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
      setScrollPosition(570);
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
    <div className="desktop-5">
      <img className="image-299-icon" alt="" src="/image-299@2x.png" />
      <div className="menudiv">
        <div className="kryefaqja-parent">
          <div onClick={() => navigate("/")} className="kryefaqja">
            Kryefaqja
          </div>
          <div className="kryefaqja">Rreth Nesh</div>
          <div onClick={() => navigate("/njoftimet/1")} className="kryefaqja">
            Njoftimet
          </div>
          <div onClick={() => navigate("/blog/1")} className="kryefaqja">
            Blog
          </div>
        </div>
        <div onClick={() => navigate("/login")} className="log-in-wrapper">
          <div className="log-in">Log in</div>
        </div>
        <img className="image-18-icon" alt="" src="/image-18@2x.png" />
      </div>
      <div className="desktop-5-child" />
      <div className="desktop-5-child" />
      <div onClick={() => setScrollPosition(570)} className="partneret">
        Partneret
      </div>
      <div className="frame-parent">
        <FontAwesomeIcon
          onClick={() => setScrollPosition(-570)}
          className="goleft33"
          icon={faChevronLeft}
        />
        <FontAwesomeIcon
          onClick={() => setScrollPosition(570)}
          className="goright33"
          icon={faChevronRight}
        />
        <div className="image-19-parent">
          <div ref={scrollContainerRef} className="carousel-wrapper">
            <span>
              <img className="image-19-icon" alt="" src="/illyrian@2x.png" />
            </span>
            <span>
              <img className="image-19-icon" alt="" src="/goodlife@2x.png" />
            </span>
            <span>
              <img className="image-19-icon" alt="" src="/investors@2x.png" />
            </span>
            <span>
              <img className="image-19-icon" alt="" src="/refreshlife@2x.png" />
            </span>{" "}
          </div>
        </div>
      </div>
      <LatestPostsContainer />
      <div className="empowering-youth-voices">
        Empowering youth voices for a brighter tomorrow.
      </div>
      <div className="say-it-organization-container">
        <span>Say it</span>
        <span className="span">{` `}</span>
        <span>Organization</span>
      </div>
      <div
        onClick={() => navigate("/bashkohu")}
        className="bashkohu-me-wrapper"
      >
        <div className="bashkohu-me">{`Bashkohu me `}</div>
      </div>
      <FormContainer2 />
      <div className="desktop-5-inner" />

      <div className="image-23-parent">
        <img className="image-23-icon" alt="" src="/image-23@2x.png" />
        <div className="frame-group">
          <div className="ellipse-parent">
            <div className="frame-child" />
            <img className="instagram-icon" alt="" src="/instagram.svg" />
          </div>
          <div className="ellipse-parent">
            <div className="frame-child" />
            <img className="whatsapp-icon" alt="" src="/whatsapp.svg" />
          </div>
          <div className="ellipse-parent">
            <div className="frame-child" />
            <img className="facebook-f-icon" alt="" src="/facebookf.svg" />
          </div>
        </div>
      </div>

      <NavigationContainer />
    </div>
  );
};

export default Desktop5;
