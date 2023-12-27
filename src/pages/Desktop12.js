import PostoContainer from "../components/PostoContainer";
import FilteredFormContainer from "../components/FilteredFormContainer";
import FormContainer from "../components/FormContainer";
import "./Desktop12.css";
import { useEffect, useState } from "react";
import NjoftimePostForm from "../components/NjoftimePostForm";
import { useDispatch, useSelector } from "react-redux";
import { ADMIN_POSTO_NJOFTIM } from "../redux/actions";
import { ADMIN_UPDATE_NJOFTIM } from "../redux/actions";
import { fetchData } from "../redux/asyncActions";
import { deleteNjoftime } from "../redux/asyncActions";
import { NJOFTIM_HAP_UPDATE } from "../redux/actions";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Desktop12 = () => {
  const navigate = useNavigate();
  const { page } = useParams();
  const [imageData, setImageData] = useState(null);

  const [postimhap, setPostimHap] = useState(0);
  const [buttonactive, setButtonActice] = useState([
    { active: false },
    { active: false },
    { active: false },
    { active: false },
  ]);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.activeFormsState.activeForm);
  const njoftimeState1 = state.njoftimet.data;
  const [njoftimeState, setnjoftimeState] = useState([
    {
      photo: null,
      photo1: null,
      tipi: "",
      titulli: "",
      data: "",
      ora: "",
      vendi: "",
      pershkrimi: "",
      aktiv: "aktiv",
    },
  ]);

  const getData = () => {
    dispatch(fetchData(page));
  };
  const deleteNjftime = (id) => {
    dispatch(deleteNjoftime(id, page));
  };

  useEffect(() => {
    getData();
    setnjoftimeState(njoftimeState1);
  }, [page]);
  const goRight = () => {
    if (page * 3 < njoftimeState1.length) {
      page++;
      setnjoftimeState([
        njoftimeState1[page],
        njoftimeState1[page + 1],
        njoftimeState1[page + 2],
      ]);
    }
  };
  const [classNameNjoftime, setClassNameNjfotime] = useState([
    "image-25-parent3",
    "image-25-parent4",
    "image-25-parent5",
  ]);
  // Wait for the data to be available
  if (!njoftimeState1 || !state.njoftimet.data) {
    return (
      <div
        onClick={() => {
          console.log(njoftimeState1);
          console.log(state.njoftimet.data);
          console.log(njoftimeState);
        }}
      >
        Loading...
      </div>
    );
  }
  const pressbutton = (id) => {
    if (id == 0) {
      setButtonActice([
        { active: buttonactive[0].active == true ? false : true },
        { active: false },
        { active: false },
      ]);
    }
    if (id == 1) {
      setButtonActice([
        { active: false },
        { active: buttonactive[1].active == true ? false : true },
        { active: false },
      ]);
    }
    if (id == 2) {
      setButtonActice([
        { active: false },
        { active: false },
        { active: buttonactive[2].active == true ? false : true },
      ]);
    }
  };
  const update = (body) => {
    dispatch(NJOFTIM_HAP_UPDATE(body));
    dispatch(ADMIN_UPDATE_NJOFTIM());
    // setPostimHap(state.njoftimet.data[i]);
  };
  return (
    <div className="desktop-12">
      <NjoftimePostForm postim={postimhap} />
      <div className="desktop-12-child" />
      <PostoContainer postDescription="Posto" />
      <div className="frame-parent46">
        <div style={{ display: "block" }}>
          {njoftimeState1.map((d, i) => (
            <div className={classNameNjoftime[i]}>
              <div onClick={() => pressbutton(i)} className="roundcontainer">
                <div className="round1"></div>
                <div className="round1"></div>
                <div className="round1"></div>
              </div>
              <div
                style={{
                  display: buttonactive[i].active == false ? "none" : "block",
                }}
                className="opsionsdiv"
              >
                <p
                  onClick={() => {
                    deleteNjftime(njoftimeState1[i].id);
                    setButtonActice([
                      { active: false },
                      { active: false },
                      { active: false },
                    ]);
                  }}
                >
                  Fshije
                </p>
                <p onClick={() => update(njoftimeState1[i])}>Update</p>
              </div>

              <img
                className="image-25-icon5"
                src={`data:image/jpeg;base64,${njoftimeState1[i].photo1}`}
                alt="Njoftimet"
              />

              <div className="frame-parent47">
                <div className="frame-parent48">
                  <div className="vizitojme-filan-fistekun-parent3">
                    <b className="vizitojme-filan-fistekun5">
                      {njoftimeState1[i].titulli}
                    </b>
                    <div className="data-23-nentor-2023-parent3">
                      <div className="vizitojme-filan-fistekun5">
                        <span className="data6">Data : </span>
                        <span>{njoftimeState1[i].data}</span>
                      </div>
                      <div className="vizitojme-filan-fistekun5">
                        <span className="data6">Ora : </span>
                        <span>{njoftimeState1[i].ora}</span>
                      </div>
                      <div className="vizitojme-filan-fistekun5">
                        <span className="data6">Vendi : </span>
                        <span>{njoftimeState1[i].vendi}</span>
                      </div>
                    </div>
                  </div>
                  <div className="pershkrim-lorem-container5">
                    <span className="data6">Pershkrim : </span>
                    <div className="descriptionContainner">
                      <textarea
                        value={njoftimeState1[i].pershkrimi}
                        className="lorem-ipsum-dolor5"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() =>
                    navigate(`/pjesmarresnjoftim/${njoftimeState1[i].id}`)
                  }
                  className="do-marr-pjese-wrapper3"
                >
                  <div className="do-marr-pjese5">Shiko pjesmarresit</div>
                </div>
              </div>
              <div className="udhetim-wrapper3">
                <div className="udhetim11">{njoftimeState1[i].tipi}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={() => {
          navigate(`../njoftimetadmin/${Number(page) - 1}`, { replace: true });
        }}
        className="goleft"
      ></div>
      <div
        onClick={() => {
          navigate(`../njoftimetadmin/${Number(page) + 1}`, { replace: true });
        }}
        className="goright"
      ></div>
      <FilteredFormContainer />
      <div className="image-291-group">
        <img className="image-291-icon2" alt="" src="/image-291@2x.png" />
        <div className="frame-parent53">
          <div className="frame-parent54">
            <div className="frame-parent55">
              <FormContainer
                backgroundcolor="#db343a"
                itemIcon="/bell.svg"
                actionText="Njoftimet"
                textcolor="white"
              />
              <FormContainer itemIcon="/group.svg" actionText="Antaret" />
              <FormContainer
                itemIcon="/add-circle1.svg"
                actionText="Postimet"
                iconText="/group.svg"
                userAvatar="Antaret"
              />
            </div>
            <div className="frame-child43" />
          </div>
          <FormContainer itemIcon="/lock.svg" actionText="Change password" />
          <FormContainer itemIcon="/logout.svg" actionText="Dilni" />
        </div>
      </div>
    </div>
  );
};

export default Desktop12;
