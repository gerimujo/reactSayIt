import MenuContainer from "../components/MenuContainer";
import "./Desktop6.css";
import NjoftimeComponent from "../components/NjoftimeComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Component40 from "../components/Component40";
import { useParams } from "react-router-dom";
import { getNjoftimetFromVisitors } from "../redux/asyncActions";
import { useEffect } from "react";
import {
  BASHKOHU_REGISTER_FORM_ACTIVE,
  REGISTER_FORM_ACTIVE_UPDATE,
  REGISTER_NOFTIM_PJESTAR,
} from "../redux/actions";

const Desktop6 = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.activeFormsState.activeForm);
  const naviagte = useNavigate();
  const { page } = useParams();
  const classesBody = [
    "image-25-parent7",
    "image-25-parent8",
    "image-25-parent9",
  ];
  useEffect(() => {
    dispatch(getNjoftimetFromVisitors(page));
    if (Number(page) <= 0) {
      naviagte("/njoftimet/1");
    }
  }, [page]);

  if (!state || !state.njoftimetVisitor || !state.njoftimetVisitor.data) {
    return (
      <div>
        <div>Loading</div>
      </div>
    );
  }
  return (
    <div className="desktop-6">
      <b className="njoftimet11">Njoftimet</b>
      <img className="image-301-icon" alt="" src="/image-301@2x.png" />
      <div className="kryefaqja-parent2">
        <div onClick={() => naviagte("/")} className="kryefaqja4">
          Kryefaqja
        </div>
        <div className="kryefaqja4">Rreth Nesh</div>
        <div onClick={() => naviagte("/njoftimet/1")} className="kryefaqja4">
          Njoftimet
        </div>
        <div onClick={() => naviagte("/blog/1")} className="kryefaqja4">
          Blog
        </div>
      </div>
      <div onClick={() => naviagte("/login")} className="log-in-wrapper4">
        <div className="log-in6">Log in</div>
      </div>
      <img
        className="image-300-icon"
        onClick={() => naviagte("/")}
        alt=""
        src="/image-18@2x.png"
      />
      <div className="desktop-6-inner">
        <div className="frame-parent89">
          {state.njoftimetVisitor.data[0].map((d, i) => (
            <div className={classesBody[i]}>
              <img
                className="image-25-icon9"
                alt=""
                src={`data:image/jpeg;base64,${d.photo.imageData}`}
              />
              <div className="frame-parent90">
                <div className="frame-parent91">
                  <div className="vizitojme-filan-fistekun-parent7">
                    <b className="vizitojme-filan-fistekun91">{d.titulli}</b>
                    <div className="data-23-nentor-2023-parent7">
                      <div className="vizitojme-filan-fistekun9">
                        <span className="data10">Data :</span>
                        <span>{`  ${d.data} `}</span>
                      </div>
                      <div className="vizitojme-filan-fistekun9">
                        <span className="data10">Ora :</span>
                        <span>{`  ${d.ora} `}</span>
                      </div>
                      <div className="vizitojme-filan-fistekun9">
                        <span className="data10">Vendi :</span>
                        <span>{`  ${d.vendi} `}</span>
                      </div>
                    </div>
                  </div>
                  <div className="pershkrim-lorem-container9">
                    <span className="data10">Pershkrim :</span>
                    <div className="descriptionContainner">
                      <textarea
                        value={d.pershkrimi}
                        className="lorem-ipsum-dolor5"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => dispatch(REGISTER_NOFTIM_PJESTAR(d))}
                  className="do-marr-pjese-wrapper7"
                >
                  <div className="do-marr-pjese9">Do marr pjese</div>
                </div>
              </div>
              <div className="udhetim-wrapper7">
                <div className="udhetim23">{d.tipi}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="desktop-6-child">
        <div className="frame-parent89">
          {}
          {state.njoftimetVisitor.data[1].map((d, i) => (
            <div className={classesBody[i]}>
              <img
                className="image-25-icon9"
                alt=""
                src={`data:image/jpeg;base64,${d.photo.imageData}`}
              />
              <div className="frame-parent90">
                <div className="frame-parent91">
                  <div className="vizitojme-filan-fistekun-parent7">
                    <b className="vizitojme-filan-fistekun91">{d.titulli}</b>
                    <div className="data-23-nentor-2023-parent7">
                      <div className="vizitojme-filan-fistekun9">
                        <span className="data10">Data :</span>
                        <span>{`  ${d.data} `}</span>
                      </div>
                      <div className="vizitojme-filan-fistekun9">
                        <span className="data10">Ora :</span>
                        <span>{`  ${d.ora} `}</span>
                      </div>
                      <div className="vizitojme-filan-fistekun9">
                        <span className="data10">Vendi :</span>
                        <span>{`  ${d.vendi} `}</span>
                      </div>
                    </div>
                  </div>
                  <div className="pershkrim-lorem-container9">
                    <span className="data10">Pershkrim :</span>
                    <div className="descriptionContainner">
                      <textarea
                        value={d.pershkrimi}
                        className="lorem-ipsum-dolor5"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => dispatch(REGISTER_NOFTIM_PJESTAR(d))}
                  className="do-marr-pjese-wrapper7"
                >
                  <div className="do-marr-pjese9">Do marr pjese</div>
                </div>
              </div>
              <div className="udhetim-wrapper7">
                <div className="udhetim23">{d.tipi}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="navigationbarpage">
        <div
          onClick={() => {
            naviagte(`../njoftimet/${Number(page) - 1}`, { replace: true });
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        {state.njoftimetVisitor.data[2].map((d, i) => (
          <div
            onClick={() => {
              naviagte(`../njoftimet/${d}`, { replace: true });
            }}
            style={{
              backgroundColor: page == d ? " #ee1d23" : "white",
              color: page == d ? "white" : "black",
            }}
          >
            {d}
          </div>
        ))}

        <div
          onClick={() => {
            if (state.njoftimetVisitor.data[2].length < 3) {
            } else {
              naviagte(`../njoftimet/${Number(page) + 1}`, { replace: true });
            }
          }}
        >
          {" "}
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
      <div className="desktop-6-item" />
      <div className="desktop-6-child1" />

      <div className="image-23-parent3">
        <img className="image-23-icon5" alt="" src="/image-23@2x.png" />
        <div className="frame-parent99">
          <div className="ellipse-parent27">
            <div className="frame-child51" />
            <img className="instagram-icon5" alt="" src="/instagram.svg" />
          </div>
          <div className="ellipse-parent27">
            <div className="frame-child51" />
            <img className="whatsapp-icon5" alt="" src="/whatsapp.svg" />
          </div>
          <div className="ellipse-parent27">
            <div className="frame-child51" />
            <img className="facebook-f-icon5" alt="" src="/facebookf.svg" />
          </div>
        </div>
      </div>

      <MenuContainer />
      <div className="empowering-youth-voices3">
        Empowering youth voices for a brighter tomorrow.
      </div>
      <div className="say-it-organization-container3">
        <span>Say it Organization</span>
      </div>
      <div
        onClick={() => naviagte("/bashkohu")}
        className="bashkohu-me-wrapper1"
      >
        <div className="bashkohu-me3">{`Bashkohu me ne `}</div>
      </div>
      <div className="njoftimet-group">
        <div className="njoftimet13">Njoftimet</div>
        <img className="frame-child57" alt="" src="/arrow-32.svg" />
      </div>
      <div
        className="component-43-parent"
        style={{
          display: state.bashkohuFormActive == false ? "none" : "block",
        }}
      >
        <Component40
          component12="/component-122.svg"
          showDoEThemi={false}
          component39Width="66.9%"
          component39Height="42.75rem"
          component39Position="absolute"
          component39Top="46%"
          component39Right="16.58%"
          component39Left="16.52%"
          component39BackgroundColor="white"
          component39Bottom="unset"
          component12IconTop="3.89%"
          component12IconBottom="93.27%"
          component12IconWidth="2.04%"
          component12IconRight="2.32%"
          rectangleDivRight="8.71%"
          rectangleDivRight1="8.71%"
          rectangleDivRight2="8.71%"
          emrMbiemrWidth="14.58%"
          emrMbiemrLeft="10.72%"
          moshaLeft="54.04%"
          institucioniArsimorLeft="54.04%"
          numriIKontaktitLeft="10.53%"
          adresaEEmailItLeft="54.04%"
          vendbanimiWidth="11.43%"
          vendbanimiLeft="10.23%"
          doEThemiWidth="14.47%"
          rectangleDivRight3="41.61%"
          rectangleDivWidth="17.61%"
          rectangleDivLeft="40.79%"
        />
      </div>
    </div>
  );
};

export default Desktop6;
