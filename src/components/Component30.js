import { useMemo } from "react";
import "./Component30.css";

const Component30 = ({
  component30Width,
  component30Height,
  component30Position,
  component30Top,
  component30Right,
  component30Left,
}) => {
  const component30Style = useMemo(() => {
    return {
      width: component30Width,
      height: component30Height,
      position: component30Position,
      top: component30Top,
      right: component30Right,
      left: component30Left,
    };
  }, [
    component30Width,
    component30Height,
    component30Position,
    component30Top,
    component30Right,
    component30Left,
  ]);

  return (
    <div className="component-30" style={component30Style}>
      <div className="component-30-child" />
      <div className="component-30-item" />
      <img className="image-icon1" alt="" src="/image2.svg" />
      <div className="upload1">Upload</div>
      <div className="titulli">
        <span>Titulli</span>
        <span className="span1">{` `}</span>
      </div>
      <div className="data">Data</div>
      <div className="vendi">Vendi</div>
      <div className="pershkrim">Pershkrim</div>
      <div className="component-30-inner" />
      <div className="component-30-child1" />
      <div className="component-30-child2" />
      <div className="component-30-child3" />
      <div className="component-30-child4" />
      <div className="posto">Posto</div>
      <div className="component-30-child5" />
      <img className="component-10-icon" alt="" src="/component-10.svg" />
    </div>
  );
};

export default Component30;
