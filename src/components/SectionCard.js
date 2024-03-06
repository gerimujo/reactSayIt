import { useEffect, useState } from "react";
import "./SectionCard.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const SectionCard = () => {
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
    <div className="frame-parent145">
      <FontAwesomeIcon
        onClick={() => goLeft()}
        className="goLeft"
        icon={faChevronLeft}
      />
      <FontAwesomeIcon
        onClick={() => goRight()}
        className="goRight"
        icon={faChevronRight}
      />
      <div className="frame-parent146">
        <div className="udhetim-ne-shengjergj-parent">
          <div className="udhetim-ne-shengjergj20">
            {state.postimhap.data.titulli}
          </div>
          <div className="frame47">
            <img className="vector-icon1" alt="" src="/vector1.svg" />
            <div className="nentor-202320">{state.postimhap.data.data}</div>
          </div>
        </div>

        <div className="frame-parent147">
          <img
            className="frame-icon1"
            alt=""
            src={`data:image/jpeg;base64,${photohap.value}`}
          />
          <div className="rectangle-parent5">
            <img
              className="frame-child76"
              alt=""
              src={`data:image/jpeg;base64,${state.postimhap.data.photo1.imageData}`}
            />
            <img
              className="frame-child76"
              alt=""
              src={`data:image/jpeg;base64,${state.postimhap.data.photo2.imageData}`}
            />
            <img
              className="frame-child76"
              alt=""
              src={`data:image/jpeg;base64,${state.postimhap.data.photo3.imageData}`}
            />
            <img
              className="frame-child76"
              alt=""
              src={`data:image/jpeg;base64,${state.postimhap.data.photo4.imageData}`}
            />
            <img
              className="frame-child76"
              alt=""
              src={`data:image/jpeg;base64,${state.postimhap.data.photo5.imageData}`}
            />
            <img
              className="frame-child76"
              alt=""
              src={`data:image/jpeg;base64,${state.postimhap.data.photo6.imageData}`}
            />
            <img
              className="frame-child76"
              alt=""
              src={`data:image/jpeg;base64,${state.postimhap.data.photo7.imageData}`}
            />
            <img
              className="frame-child76"
              alt=""
              src={`data:image/jpeg;base64,${state.postimhap.data.photo8.imageData}`}
            />
          </div>
        </div>
      </div>
      <div className="lorem-ipsum-dolor21">
        {state.postimhap.data.pershkrim}
      </div>
    </div>
  );
};

export default SectionCard;
