import { useMemo } from "react";
import "./ContainerCardForm.css";

const ContainerCardForm = ({
  imageLabel,
  uecDescription,
  loremIpsumText,
  propHeight,
  propWidth,
  propHeight1,
}) => {
  const frameDiv6Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const hugIconStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight1,
    };
  }, [propWidth, propHeight1]);

  return (
    <div className="hug-parent" style={frameDiv6Style}>
      <img className="hug-icon" alt="" src={imageLabel} style={hugIconStyle} />
      <div className="arsyeja-2-uec-container">
        <span>{uecDescription}</span>
        <span className="span5">{` `}</span>
      </div>
      <div className="lorem-ipsum-dolor13">{loremIpsumText}</div>
    </div>
  );
};

export default ContainerCardForm;
