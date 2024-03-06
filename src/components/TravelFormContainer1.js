import { useSelector } from "react-redux";
import "./TravelFormContainer1.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const TravelFormContainer1 = () => {
  const state = useSelector((state) => state.activeFormsState.activeForm);

  const [number, setNumber] = useState(1);
  const [photoState, setPhotoState] = useState({});
  const [photohap, setPhotoHap] = useState({
    value: state.postimhap.data.photo1.imageData,
  });
  useEffect(() => {
    setPhotoState({
      0: { value: state.postimhap.data.photo1.imageData },
      1: { value: state.postimhap.data.photo2.imageData },
      2: { value: state.postimhap.data.photo3.imageData },
      3: { value: state.postimhap.data.photo4.imageData },
      4: { value: state.postimhap.data.photo5.imageData },
      5: { value: state.postimhap.data.photo6.imageData },
      6: { value: state.postimhap.data.photo7.imageData },
      7: { value: state.postimhap.data.photo8.imageData },
    });
  }, []);
  const goLeft = () => {
    if (number == 0) {
      setPhotoHap(photoState[7]);
      setNumber(7);
    } else {
      setPhotoHap(photoState[number - 1]);
      setNumber(number - 1);
    }
  };
  const goRight = () => {
    if (number == 7) {
      setPhotoHap(photoState[0]);
      setNumber(0);
    } else {
      setPhotoHap(photoState[number + 1]);
      setNumber(number + 1);
    }
  };
  return (
    <div className="frame-parent152">
      <FontAwesomeIcon
        onClick={() => goLeft()}
        className="goLeft11"
        icon={faChevronLeft}
      />
      <FontAwesomeIcon
        onClick={() => goRight()}
        className="goRight21"
        icon={faChevronRight}
      />
      <div className="frame-parent153">
        <div className="udhetim-ne-shengjergj-group">
          <div className="udhetim-ne-shengjergj21">
            {state.postimhap.data.titulli}
          </div>
          <div className="calendar-alt-parent">
            <img className="calendar-alt-icon" alt="" src="/calendaralt.svg" />
            <div className="nentor-202321">{state.postimhap.data.data}</div>
          </div>
        </div>
        <div className="frame-parent154">
          <img
            className="frame-icon2"
            alt=""
            src={`data:image/jpeg;base64,${photohap.value}`}
          />
          <div className="rectangle-parent6">
            <img
              className="frame-child84"
              alt=""
              src={`data:image/jpeg;base64,${state.postimhap.data.photo1.imageData}`}
            />
            <img
              className="frame-child84"
              alt=""
              src={`data:image/jpeg;base64,${state.postimhap.data.photo2.imageData}`}
            />
            <img
              className="frame-child84"
              alt=""
              src={`data:image/jpeg;base64,${state.postimhap.data.photo3.imageData}`}
            />
            <img
              className="frame-child84"
              alt=""
              src={`data:image/jpeg;base64,${state.postimhap.data.photo4.imageData}`}
            />
            <img
              className="frame-child84"
              alt=""
              src={`data:image/jpeg;base64,${state.postimhap.data.photo5.imageData}`}
            />
            <img
              className="frame-child84"
              alt=""
              src={`data:image/jpeg;base64,${state.postimhap.data.photo6.imageData}`}
            />
            <img
              className="frame-child84"
              alt=""
              src={`data:image/jpeg;base64,${state.postimhap.data.photo7.imageData}`}
            />
            <img
              className="frame-child84"
              alt=""
              src={`data:image/jpeg;base64,${state.postimhap.data.photo8.imageData}`}
            />
          </div>
          <div className="angle-left" />
        </div>
      </div>
      <div className="lorem-ipsum-dolor23">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non ante
        ut justo convallis tristique. Integer luctus ex at lorem fringilla, eget
        fermentum sapien tin Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fusce non ante ut justo convallis tristique. Integer luctus ex at
        lorem fringilla, eget fermentum sapien tinciduntLorem ipsum dolor sit
        amet, consectetur adipiscing elit. Fusce non ante ut justo convallis
        tristique. Integer luctus ex at lorem fringilla, eget fermentum sapien
        tinciduntLorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
        non ante ut justo convallis tristique. Integer luctus ex at lorem
        fringilla, eget fermentum sapien tinciduntcidunt.g elit. Fusce non ante
        ut justo convallis tristique. Integer luctus ex at lorem fringilla, eget
        fermentum sapien tinciduntLorem ipsum dolor sit amet, consectetur
        adipiscing elit. Fusce non ante ut justo convallis tristique. Integer
        luctus ex at lorem fringilla, eget fermentum sapien tinciduntcidunt.g
        elit. Fusce non ante ut justo convallis tristique. Integer luctus ex at
        lorem fringilla, eget fermentum sapien tinciduntLorem ipsum dolor sit
        amet, consectetur adipiscing elit. Fusce non ante ut justo convallis
        tristique. Integer luctus ex at lorem fringilla, eget fermentum sapien
        tinciduntciduntg elit. Fusce non ante ut justo convallis tristique.
        Integer luctus ex at lorem fringilla, eget fermentum sapien
        tinciduntLorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
        non ante ut justo convallis tristique. Integer luctus ex at lorem
        fringilla, eget fermentum sapien tinciduntciduntg elit. Fusce non ante
        ut justo convallis tristique. Integer luctus ex at lorem fringilla, eget
        fermentum sapien tinciduntLorem ipsum dolor sit amet, consectetur
        adipiscing elit. Fusce non ante ut justo convallis tristique. Integer
        luctus ex at lorem fringilla, eget fermentum sapien tinciduntcidunt
        fringilla, eget fermentum sapien tinciduntLorem ipsum dolor sit amet,
        consectetur adipiscing elit. Fusce non ante ut justo convallis
        tristique. Integer luctus ex at lorem fringilla, eget fermentum sapien
        tinciduntciduntg elit. Fusce non ante ut justo convallis tristique.
        Integer luctus ex at lorem fringilla, eget fermentum sapien
        tinciduntLorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
        non ante ut justo convallis tristique. Integer luctus ex at lorem
        fringilla, eget fermentum sapien tinciduntcidunt fringilla, eget
        fermentum sapien tinciduntLorem ipsum dolor sit amet, consectetur
        adipiscing elit. Fusce non ante ut justo convallis tristique. Integer
        luctus ex at lorem fringilla, eget fermentum sapien tinciduntciduntg
        elit. Fusce non ante ut justo convallis tristique. Integer luctus ex at
        lorem fringilla, eget fermentum sapien tinciduntLorem ipsum dolor sit
        amet, consectetur adipiscing elit. Fusce non ante ut justo convallis
        tristique. Integer luctus ex at lorem fringilla, eget fermentum sapien
        tinciduntcidunt fringilla, eget fermentum sapien tinciduntLorem ipsum
        dolor sit amet, consectetur adipiscing elit. Fusce non ante ut justo
        convallis tristique. Integer luctus ex at lorem fringilla, eget
        fermentum sapien tinciduntciduntg elit. Fusce non ante ut justo
        convallis tristique. Integer luctus ex at lorem fringilla, eget
        fermentum sapien tinciduntLorem ipsum dolor sit amet, consectetur
        adipiscing elit. Fusce non ante ut justo convallis tristique. Integer
        luctus ex at lorem fringilla, eget fermentum sapien tinciduntcidunt
      </div>
    </div>
  );
};

export default TravelFormContainer1;
