import { useMemo } from "react";
import "./FormContainer1.css";
import { useDispatch } from "react-redux";
import {
  BASHKOHU_REGISTER_FORM_ACTIVE,
  REGISTER_NOFTIM_PJESTAR,
} from "../redux/actions";
const FormContainer1 = ({ frameDivTop, item }) => {
  const frameDiv16Style = useMemo(() => {
    return {
      top: frameDivTop,
    };
  }, [frameDivTop]);
  const dispatch = useDispatch();
  return (
    <div className="image-25-parent11" style={frameDiv16Style}>
      <img
        className="image-25-icon13"
        alt=""
        src={`data:image/jpeg;base64,${item.photo.imageData}`}
      />
      <div className="frame-parent150">
        <div className="frame-parent151">
          <div className="vizitojme-filan-fistekun-parent11">
            <b className="vizitojme-filan-fistekun13">{item.titulli}</b>
            <div className="data-23-nentor-2023-parent11">
              <div className="vizitojme-filan-fistekun13">
                <span className="data14">Data :</span>
                <span>{` ${item.data} `}</span>
              </div>
              <div className="vizitojme-filan-fistekun13">
                <span className="data14">Ora :</span>
                <span>{`  ${item.ora} `}</span>
              </div>
              <div className="vizitojme-filan-fistekun13">
                <span className="data14">Vendi :</span>
                <span>{`  ${item.vendi} `}</span>
              </div>
            </div>
          </div>
          <div className="pershkrim-lorem-container13">
            <span className="data14">Pershkrim :</span>
            <div className="descriptionContainner">
              <textarea
                value={item.pershkrimi}
                className="lorem-ipsum-dolor5"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="do-marr-pjese-wrapper11">
          <div
            onClick={() => dispatch(REGISTER_NOFTIM_PJESTAR(item))}
            className="do-marr-pjese13"
          >
            <p> Do marr pjese</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer1;
