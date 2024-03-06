import ContainerForm from "./ContainerForm";
import "./LatestPostsSection.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const LatestPostsSection = () => {
  const navigate = useNavigate();
  const state = useSelector((state) => state.activeFormsState.activeForm);

  return (
    <div className="frame-parent124">
      <div className="postimet-me-te-fundit-group">
        <div className="postimet-me-te1"> Postimet me te fundit</div>
        <div className="frame-parent125">
          <div
            style={{
              backgroundImage: `url(data:image/jpeg;base64,${state.postsVisitor.data[0][0].photo1.imageData})`,
            }}
            className="frame411"
            onClick={() =>
              navigate(`/post/${state.postsVisitor.data[0][0].id}`)
            }
          >
            <div className="frame-child581" />
            <div className="frame-parent1021">
              <div className="frame-parent1031">
                <div className="frame421">
                  <div className="udhetim271">
                    {state.postsVisitor.data[0][0].tipi}
                  </div>
                </div>
                <div className="nentor-2023151">
                  {state.postsVisitor.data[0][0].data}
                </div>
              </div>
              <div className="udhetim-ne-shengjergj151">
                {state.postsVisitor.data[0][0].titulli}
              </div>
            </div>
          </div>
          <div className="frame-parent128">
            <ContainerForm
              data={state.postsVisitor.data[0][1]}
              carDimensions="/rectangle-271@2x.png"
            />
            <ContainerForm
              carDimensions="/rectangle-272@2x.png"
              propAlignItems="flex-end"
              propJustifyContent="center"
              data={state.postsVisitor.data[0][2]}
            />
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: 30 }}
        onClick={() => navigate("/blog/1")}
        className="te-gjitha-postimet-container"
      >
        <div className="te-gjitha-postimet1">Te gjitha postimet</div>
      </div>
    </div>
  );
};

export default LatestPostsSection;
