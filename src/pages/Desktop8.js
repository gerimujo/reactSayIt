import TravelFormContainer1 from "../components/TravelFormContainer1";
import ContactSection from "../components/ContactSection";
import "./Desktop8.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostimVisitor } from "../redux/asyncActions";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Desktop8 = () => {
  const { page } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.activeFormsState.activeForm);
  const navigate = useNavigate();
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
    <div className="desktop-8">
      <img
        onClick={() => navigate("/")}
        className="image-297-icon1"
        alt=""
        src="/image-297@2x.png"
      />
      <div className="kryefaqja-parent1">
        <div onClick={() => navigate("")} className="kryefaqja3">
          Kryefaqja
        </div>
        <div className="kryefaqja3">Rreth Nesh</div>
        <div onClick={() => navigate("/njoftimet/1")} className="kryefaqja3">
          Njoftimet
        </div>
        <div onClick={() => navigate("/blog/1")} className="kryefaqja3">
          Blog
        </div>
      </div>
      <div onClick={() => navigate("/login")} className="log-in-wrapper3">
        <div className="log-in5">Log in</div>
      </div>
      <div>
        <div className="frame-parent85">
          <TravelFormContainer1 />

          {state.postimhap.data.video && (
            <div>
              <video
                className="frame40"
                alt=""
                controls
                src={`data:video/mp4;base64,${state.postimhap.data.video.data}`}
              />
            </div>
          )}
        </div>
        <ContactSection frameDivTop="unset" />
      </div>
    </div>
  );
};

export default Desktop8;
