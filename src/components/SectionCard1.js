import TravelFormContainer from "./TravelFormContainer";
import "./SectionCard1.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SectionCard1 = () => {
  const state = useSelector((state) => state.activeFormsState.activeForm);
  const class1 = [
    "frame50",
    "frame52",
    "frame54",
    "frame56",
    "frame58",
    "frame60",
  ];
  const navigate = useNavigate();
  return (
    <div className="postimet-container">
      <div className="postimet6">Postimet</div>
      <div className="frame-parent157">
        <TravelFormContainer
          udhetimNeShengjergjBackgroundImage="url('/frame13@3x.png')"
          propBackgroundImage="url('/frame14@3x.png')"
          propBackgroundImage1="url('/frame15@3x.png')"
          data={state.postsVisitor.data[0]}
        />
        <div className="frame-parent158">
          <div className="frame-parent159">
            {state.postsVisitor.data[1].map((d, i) => (
              <div
                style={{
                  backgroundImage: `url(data:image/jpeg;base64,${d.photo1.imageData})`,
                }}
                className={class1[i]}
                onClick={() => navigate(`/post/${d.id}`)}
              >
                <div className="frame-parent160">
                  <div className="frame-parent161">
                    <div className="frame51">
                      <div className="udhetim32">{d.tipi}</div>
                    </div>
                    <div className="nentor-202322">{d.data}</div>
                  </div>
                  <div className="udhetim-ne-shengjergj22">{d.titulli}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="frame-parent159">
            {state.postsVisitor.data[2].map((d, i) => (
              <div
                style={{
                  backgroundImage: `url(data:image/jpeg;base64,${d.photo1.imageData})`,
                }}
                className={class1[i + 3]}
                onClick={() => navigate(`/post/${d.id}`)}
              >
                <div className="frame-parent160">
                  <div className="frame-parent161">
                    <div className="frame51">
                      <div className="udhetim32">{d.tipi}</div>
                    </div>
                    <div className="nentor-202322">{d.data}</div>
                  </div>
                  <div className="udhetim-ne-shengjergj22">{d.titulli}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCard1;
