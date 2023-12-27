import { useMemo } from "react";
import "./ContainerForm.css";
import { useNavigate } from "react-router-dom";
const ContainerForm = ({
  carDimensions,
  propAlignItems,
  propJustifyContent,
  data,
}) => {
  const frameDiv7Style = useMemo(() => {
    return {
      alignItems: propAlignItems,
      justifyContent: propJustifyContent,
    };
  }, [propAlignItems, propJustifyContent]);
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/post/${data.id}`)}
      style={{
        backgroundImage: `url(data:image/jpeg;base64,${data.photo1.imageData})`,
      }}
      className="frame4111"
    >
      <div className="frame-child5811" />
      <div className="frame-parent10211">
        <div className="frame-parent10311">
          <div className="frame4211">
            <div className="udhetim2711">{data.tipi}</div>
          </div>
          <div className="nentor-20231511">{data.data}</div>
        </div>
        <div className="udhetim-ne-shengjergj1511">{data.titulli}</div>
      </div>
    </div>
  );
};

export default ContainerForm;
