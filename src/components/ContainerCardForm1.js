import { useMemo } from "react";
import "./ContainerCardForm1.css";
import FormContainer from "./FormContainer";

const ContainerCardForm1 = ({
  dimensionCode,
  imageCode,
  bellIconHeight,
  bellIconAlignItems,
  bellIconJustifyContent,
  bellIconPadding,
  bellIconBoxSizing,
  frameDivGap,
  addCircleIconBackgroundColor,
  addCircleIconHeight,
  addCircleIconPadding,
  groupIconColor,
  antaretBackgroundColor,
  antaretPadding,
}) => {
  const frameDiv8Style = useMemo(() => {
    return {
      height: bellIconHeight,
      alignItems: bellIconAlignItems,
      justifyContent: bellIconJustifyContent,
      padding: bellIconPadding,
      boxSizing: bellIconBoxSizing,
    };
  }, [
    bellIconHeight,
    bellIconAlignItems,
    bellIconJustifyContent,
    bellIconPadding,
    bellIconBoxSizing,
  ]);

  const frameDiv9Style = useMemo(() => {
    return {
      gap: frameDivGap,
    };
  }, [frameDivGap]);

  const frameDiv10Style = useMemo(() => {
    return {
      backgroundColor: addCircleIconBackgroundColor,
      height: addCircleIconHeight,
      padding: addCircleIconPadding,
    };
  }, [addCircleIconBackgroundColor, addCircleIconHeight, addCircleIconPadding]);

  const postimetStyle = useMemo(() => {
    return {
      color: groupIconColor,
    };
  }, [groupIconColor]);

  const frameDiv11Style = useMemo(() => {
    return {
      backgroundColor: antaretBackgroundColor,
      padding: antaretPadding,
    };
  }, [antaretBackgroundColor, antaretPadding]);

  return (
    <div className="image-291-group">
      <img className="image-291-icon2" alt="" src="/image-291@2x.png" />
      <div className="frame-parent53">
        <div className="frame-parent54">
          <div className="frame-parent55">
            <FormContainer
              itemIcon="/bell1.svg"
              actionText="Njoftimet"
              textcolor="black"
            />
            <FormContainer itemIcon="/group.svg" actionText="Antaret" />
            <FormContainer
              backgroundcolor="#db343a"
              itemIcon="/add-circle.svg"
              actionText="Postimet"
              iconText="/group.svg"
              userAvatar="Antaret"
              textcolor="white"
            />
          </div>
          <div className="frame-child43" />
        </div>
        <FormContainer itemIcon="/lock.svg" actionText="Change password" />
        <FormContainer itemIcon="/logout.svg" actionText="Dilni" />
      </div>
    </div>
  );
};

export default ContainerCardForm1;
