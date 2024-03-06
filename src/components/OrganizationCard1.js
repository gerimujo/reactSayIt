import "./OrganizationCard1.css";
import { useNavigate } from "react-router-dom";

const OrganizationCard1 = () => {
  const navigate = useNavigate();
  return (
    <div className="frame49">
      <div className="kryefaqja-parent3">
        <div onClick={() => navigate("/")} className="kryefaqja5">
          Kryefaqja
        </div>
        <div className="kryefaqja5">Rreth Nesh</div>
        <div onClick={() => navigate("/njoftimet/1")} className="kryefaqja5">
          Njoftimet
        </div>
        <div onClick={() => navigate("/blog/1")} className="kryefaqja5">
          Blog
        </div>
      </div>
      <div onClick={() => navigate("/login")} className="log-in-wrapper5">
        <div className="log-in7">Log in</div>
      </div>
      <img
        onClick={() => navigate("/")}
        className="image-302-icon"
        alt=""
        src="/image-18@2x.png"
      />
      <div className="frame-parent155">
        <div className="say-it-organization-parent2">
          <div className="say-it-organization-container5">
            <span>Say it</span>
            <span className="span7">{` `}</span>
            <span>Organization</span>
          </div>
          <div className="empowering-youth-voices5">
            Empowering youth voices for a brighter tomorrow.
          </div>
        </div>
        <div className="frame-parent156">
          <div
            onClick={() => navigate("/bashkohu")}
            className="bashkohu-me-wrapper5"
          >
            <div className="bashkohu-me7">{`Bashkohu me ne`}</div>
          </div>
          <div className="postimet-group">
            <div className="postimet5">Postimet</div>
            <img className="frame-child91" alt="" src="/arrow-31.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationCard1;
