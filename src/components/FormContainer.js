import { useMemo } from "react";
import "./FormContainer.css";
import { useNavigate } from "react-router-dom";
const FormContainer = ({
  itemIcon,
  actionText,

  propPadding,
  propGap,
  propAlignItems,
  propFlexWrap,
  backgroundcolor,
  textcolor,
}) => {
  const frameDiv13Style = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
      backgroundcolor: backgroundcolor,
    };
  }, [propPadding, propGap]);

  const frameDiv14Style = useMemo(() => {
    return {
      alignItems: propAlignItems,
    };
  }, [propAlignItems]);

  const frameDiv15Style = useMemo(() => {
    return {
      flexWrap: propFlexWrap,
    };
  }, [propFlexWrap]);
  const navigate = useNavigate();

  const gotoUrl = () => {
    console.log(actionText);
    if (actionText == "Antaret") {
      navigate("/antaretadmin");
    }
    if (actionText == "Postimet") {
      navigate("/postimetadmin/1");
    }
    if (actionText == "Dilni") {
      localStorage.removeItem("token1");
      navigate("/login");
    }
    if (actionText == "Njoftimet") {
      navigate("/njoftimetadmin/1");
    }
  };
  return (
    <div
      onClick={() => gotoUrl()}
      className="frame-parent144"
      style={{ backgroundColor: backgroundcolor }}
    >
      <div className="add-circle-parent2" style={frameDiv14Style}>
        <img className="add-circle-icon4" alt="" src={itemIcon} />
        <div className="postimet4" style={{ color: textcolor }}>
          {actionText}
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
