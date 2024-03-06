import { useMemo } from "react";
import "./TravelFormContainer.css";
import { useNavigate } from "react-router-dom";
const TravelFormContainer = ({
  udhetimNeShengjergjBackgroundImage,
  propBackgroundImage,
  propBackgroundImage1,
  data,
}) => {
  const frameStyle = useMemo(() => {
    return {
      backgroundImage: `url(data:image/jpeg;base64,${data[0].photo1.imageData})`,
    };
  }, [udhetimNeShengjergjBackgroundImage]);

  const frame1Style = useMemo(() => {
    return {
      backgroundImage: `url(data:image/jpeg;base64,${data[1].photo1.imageData})`,
    };
  }, [propBackgroundImage]);

  const frame2Style = useMemo(() => {
    return {
      backgroundImage: `url(data:image/jpeg;base64,${data[2].photo1.imageData})`,
    };
  }, [propBackgroundImage1]);

  const navigate = useNavigate();
  return (
    <div className="frame-parent101">
      <div
        onClick={() => navigate(`/post/${data[0].id}`)}
        className="frame41"
        style={frameStyle}
      >
        <div className="frame-child58" />
        <div className="frame-parent102">
          <div className="frame-parent103">
            <div className="frame42">
              <div className="udhetim27">{data[0].tipi}</div>
            </div>
            <div className="nentor-202315">{data[0].data}</div>
          </div>
          <div className="udhetim-ne-shengjergj15">{data[0].titulli}</div>
        </div>
      </div>
      <div className="frame-parent104">
        <div
          onClick={() => navigate(`/post/${data[1].id}`)}
          className="frame43"
          style={frame1Style}
        >
          <div className="frame-parent102">
            <div className="frame-parent103">
              <div className="frame44">
                <div className="udhetim27">{data[1].tipi}</div>
              </div>
              <div className="nentor-202316">{data[1].data}</div>
            </div>
            <div className="udhetim-ne-shengjergj16">{data[1].titulli}</div>
          </div>
        </div>
        <div
          onClick={() => navigate(`/post/${data[2].id}`)}
          className="frame45"
          style={frame2Style}
        >
          <div className="frame-parent102">
            <div className="frame-parent103">
              <div className="frame44">
                <div className="udhetim27">{data[2].tipi}</div>
              </div>
              <div className="nentor-202316">{data[2].data}</div>
            </div>
            <div className="udhetim-ne-shengjergj16">{data[2].titulli}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelFormContainer;
