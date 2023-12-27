import PostoContainer from "../components/PostoContainer1";
import FilteredFormContainer from "../components/FilteredFormContainer";
import ContainerCardForm1 from "../components/ContainerCardForm1";
import "./Desktop24.css";
import PostimePostForm from "../components/PostimePostForm";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostimet, DELETEPOST } from "../redux/asyncActions";
import { POSTIME_UPDATE_ACTIVE, POSTIME_UPDATE_POST } from "../redux/actions";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Desktop24 = () => {
  const navigate = useNavigate();

  const { page } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.activeFormsState.activeForm);
  const [OpsionButton, setOpsionButton] = useState({
    1: { click: false },
    2: { click: false },
    3: { click: false },
    4: { click: false },
    5: { click: false },
    6: { click: false },
  });

  const handleOpsionButtonClick = (id) => {
    setOpsionButton((state) => ({
      ...state,
      [id]: { click: !state[id]?.click },
    }));
    console.log(id);
  };
  useEffect(() => {
    dispatch(getPostimet(page));
  }, [page]);

  if (
    !state ||
    !state.postimet ||
    !state.postimet.data ||
    !state.postimet.data[0]
  ) {
    return <div>Loading...</div>;
  }
  return (
    <div className="desktop-24">
      <div className="desktop-24-child" />
      <PostimePostForm />
      <PostoContainer
        postDescription="Posto"
        addCircleIconHeight="unset"
        addCircleIconWidth="9.76%"
        addCircleIconTop="calc(50% - 431px)"
        addCircleIconRight="68%"
        addCircleIconBottom="unset"
        addCircleIconLeft="22.24%"
        propWidth="1.81rem"
        propHeight="1.81rem"
      />
      <FilteredFormContainer />
      <ContainerCardForm1
        dimensionCode="/image-291@2x.png"
        imageCode="/add-circle3.svg"
        bellIconHeight="unset"
        bellIconAlignItems="flex-start"
        bellIconJustifyContent="flex-start"
        bellIconPadding="unset"
        bellIconBoxSizing="unset"
        frameDivGap="58px"
        addCircleIconBackgroundColor="#db343a"
        addCircleIconHeight="unset"
        addCircleIconPadding="var(--padding-10xl) 0rem"
        groupIconColor="#fff"
        antaretBackgroundColor="unset"
        antaretPadding="0rem 0rem 0rem var(--padding-18xl)"
      />
      <div className="frame-parent22">
        <div className="frame-parent23">
          {state.postimet.data[0].map((d, i) => (
            <div className="frame3">
              <img
                className="imagePostim"
                alt="ska"
                src={`data:image/jpeg;base64,${d.photo1.imageData}`}
              ></img>
              <div className="frame-parent24">
                <div className="frame-parent25">
                  <div className="frame4">
                    <div className="udhetim5">{d.tipi}</div>
                  </div>
                  <div className="nentor-2023">{d.data}</div>
                </div>
                <div className="udhetim-ne-shengjergj">{d.titulli}</div>
              </div>
              <div
                onClick={() => handleOpsionButtonClick(i + 1)}
                className="ellipse-parent9"
              >
                <div className="frame-child11" />
                <div className="frame-child11" />
                <div className="frame-child11" />
              </div>
              <div className="frame-child14" />
              <div
                style={{
                  display: OpsionButton[i + 1].click == true ? "block" : "none",
                }}
                className="fshije-parent"
              >
                <div
                  onClick={() => dispatch(DELETEPOST(d.id, page))}
                  className="fshije"
                >
                  Fshije
                </div>
                <div
                  onClick={() => {
                    dispatch(POSTIME_UPDATE_POST(d));
                    handleOpsionButtonClick(i + 1);
                  }}
                  className="fshije"
                >
                  Perditeso
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="frame-parent23">
          {state.postimet.data[1].map((d, i) => (
            <div className="frame3">
              <img
                className="imagePostim"
                alt="ska"
                src={`data:image/jpeg;base64,${d.photo1.imageData}`}
              ></img>
              <div className="frame-parent24">
                <div className="frame-parent25">
                  <div className="frame4">
                    <div className="udhetim5">{d.tipi}</div>
                  </div>
                  <div className="nentor-2023">{d.data}</div>
                </div>
                <div className="udhetim-ne-shengjergj">{d.titulli}</div>
              </div>
              <div
                onClick={() => handleOpsionButtonClick(i + 4)}
                className="ellipse-parent9"
              >
                <div className="frame-child11" />
                <div className="frame-child11" />
                <div className="frame-child11" />
              </div>
              <div className="frame-child14" />
              <div
                style={{
                  display: OpsionButton[i + 4].click == true ? "block" : "none",
                }}
                className="fshije-parent"
              >
                <div
                  onClick={() => dispatch(DELETEPOST(d.id, page))}
                  className="fshije"
                >
                  Fshije
                </div>
                <div
                  onClick={() => {
                    dispatch(POSTIME_UPDATE_POST(d));
                    handleOpsionButtonClick(i + 4);
                  }}
                  className="fshije"
                >
                  Perditeso
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={() => {
          navigate(`../postimetadmin/${Number(page) - 1}`, { replace: true });
        }}
        className="goleft1"
      ></div>
      <div
        onClick={() => {
          navigate(`../postimetadmin/${Number(page) + 1}`, { replace: true });
        }}
        className="goright1"
      ></div>
    </div>
  );
};

export default Desktop24;
