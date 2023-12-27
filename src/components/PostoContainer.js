import { useMemo } from "react";
import "./PostoContainer.css";
import { useDispatch, useSelector } from "react-redux";
import { ADMIN_POSTO_NJOFTIM } from "../redux/actions";
import { ADMIN_UPDATE_NJOFTIM } from "../redux/actions";

const PostoContainer = ({
  postDescription,
  addCircleIconHeight,
  addCircleIconWidth,
  addCircleIconTop,
  addCircleIconRight,
  addCircleIconBottom,
  addCircleIconLeft,
  propWidth,
  propHeight,
}) => {
  const component181Style = useMemo(() => {
    return {
      height: addCircleIconHeight,
      width: addCircleIconWidth,
      top: addCircleIconTop,
      right: addCircleIconRight,
      bottom: addCircleIconBottom,
      left: addCircleIconLeft,
    };
  }, [
    addCircleIconHeight,
    addCircleIconWidth,
    addCircleIconTop,
    addCircleIconRight,
    addCircleIconBottom,
    addCircleIconLeft,
  ]);

  const addCircleIconStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);
  const dispatch = useDispatch();
  const registerFormActive = useSelector(
    (state) => state.activeFormsState.activeForm.AdminNjoftimetActive
  );
  return (
    <div
      onClick={() => {
        dispatch(ADMIN_POSTO_NJOFTIM());
      }}
      className="component-181"
      style={component181Style}
    >
      <div className="add-circle-parent1">
        <img
          className="add-circle-icon3"
          alt=""
          src="/add-circle.svg"
          style={addCircleIconStyle}
        />
        <div className="posto1">{postDescription}</div>
      </div>
    </div>
  );
};

export default PostoContainer;
