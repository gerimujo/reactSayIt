import TravelFormContainer from "./TravelFormContainer";
import "./LatestPostsContainer.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
const LatestPostsContainer = () => {
  const state = useSelector((state) => state.activeFormsState.activeForm);

  const navigate = useNavigate();
  return (
    <div className="postimet-me-te-fundit-parent">
      <div className="postimet-me-te">Postimet me te fundit</div>
      <TravelFormContainer data={state.postsVisitor.data[0]} />
      <div
        onClick={() => navigate("/blog/1")}
        className="te-gjitha-postimet-wrapper"
      >
        <div className="te-gjitha-postimet">Te gjitha postimet</div>
      </div>
    </div>
  );
};

export default LatestPostsContainer;
