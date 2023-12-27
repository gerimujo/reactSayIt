import { MENU_HAP_TELEFON } from "../redux/actions";
import "./OrganizationCard.css";
import { useDispatch } from "react-redux";
const OrganizationCard = () => {
  const dispatch = useDispatch();
  return (
    <div className="frame48">
      <img className="image-295-icon" alt="" src="/image-296@2x.png" />
      <img
        className="menu-icon4"
        onClick={() => dispatch(MENU_HAP_TELEFON())}
        alt=""
        src="/menu4.svg"
      />
      <div className="frame-parent148">
        <div className="say-it-organization-parent1">
          <div className="say-it-organization-container4">
            Say it Organization
          </div>
          <div className="empowering-youth-voices4">
            Empowering youth voices for a brighter tomorrow.
          </div>
        </div>
        <div className="frame-parent149">
          <div className="bashkohu-me-wrapper4">
            <div className="bashkohu-me6">{`Bashkohu me ne `}</div>
          </div>
          <div className="njoftimet-container">
            <div className="njoftimet18">Njoftimet</div>
            <img className="frame-child83" alt="" src="/arrow-3.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationCard;
