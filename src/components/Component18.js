import { useMemo } from "react";
import PostoContainer from "./PostoContainer";
import "./Component18.css";

const Component18 = ({
  posto,
  component18Width,
  component18Height,
  component18Position,
  component18Top,
  component18Right,
  component18Left,
  component18Right1,
  component18Left1,
  addCircleIconWidth,
  addCircleIconHeight,
}) => {
  const component18Style = useMemo(() => {
    return {
      width: component18Width,
      height: component18Height,
      position: component18Position,
      top: component18Top,
      right: component18Right,
      left: component18Left,
    };
  }, [
    component18Width,
    component18Height,
    component18Position,
    component18Top,
    component18Right,
    component18Left,
  ]);

  const component181Style = useMemo(() => {
    return {
      right: component18Right1,
      left: component18Left1,
    };
  }, [component18Right1, component18Left1]);

  const addCircleIconStyle = useMemo(() => {
    return {
      width: addCircleIconWidth,
      height: addCircleIconHeight,
    };
  }, [addCircleIconWidth, addCircleIconHeight]);

  return (
    <div className="component-18" style={component18Style}>
      <PostoContainer
        postDescription="Shto"
        addCircleIconHeight="100%"
        addCircleIconWidth="95.65%"
        addCircleIconTop="0%"
        addCircleIconRight="11.02%"
        addCircleIconBottom="0%"
        addCircleIconLeft="-6.67%"
        propWidth="29px"
        propHeight="29px"
      />
    </div>
  );
};

export default Component18;
