import "./PostimePostForm.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADMIN_UPDATE_POSTIM, ADMIN_POSTO_POSTIM } from "../redux/actions";
import { postoPostime } from "../redux/asyncActions";
import { fileToBase64 } from "../redux/asyncActions";
import { UppdePost } from "../redux/asyncActions";
import { DELETEPOST } from "../redux/asyncActions";
import { useParams } from "react-router-dom";

function PostimePostForm({ postim }) {
  const [imageVisible, setImageVisible] = useState(true);
  const { page } = useParams();
  const dispatch = useDispatch();
  const registerFormActive = useSelector(
    (state) => state.activeFormsState.activeForm.AdminPostActive
  );
  const state = useSelector((state) => state.activeFormsState.activeForm);
  const [postimShow, setPostim] = useState(postim);
  const [updateState, setUpdateState] = useState();
  const [media, setMedia] = useState({
    1: { id: 1, value: null },
    2: { id: 2, value: null },
    3: { id: 3, value: null },
    4: { id: 4, value: null },
    5: { id: 5, value: null },
    6: { id: 6, value: null },
    7: { id: 7, value: null },
    8: { id: 8, value: null },
    9: { id: 9, value: null },
  });
  const [postoStateHandler, setPostoStateHandler] = useState({
    1: { id: 1, value: null },
    2: { id: 2, value: null },
    3: { id: 3, value: null },
    4: { id: 4, value: null },
    5: { id: 5, value: null },
    6: { id: 6, value: null },
    7: { id: 7, value: null },
    8: { id: 8, value: null },
    9: { id: 9, value: null },
    10: { id: 10, value: "" },
    11: { id: 11, value: "" },
    12: { id: 12, value: "" },
    13: { id: 13, value: "" },
  });
  useEffect(() => {
    if (registerFormActive.type == "post") {
      setMedia({
        1: { id: 1, value: null },
        2: { id: 2, value: null },
        3: { id: 3, value: null },
        4: { id: 4, value: null },
        5: { id: 5, value: null },
        6: { id: 6, value: null },
        7: { id: 7, value: null },
        8: { id: 8, value: null },
        9: { id: 9, value: null },
      });

      setPostoStateHandler({
        1: { id: 1, value: null },
        2: { id: 2, value: null },
        3: { id: 3, value: null },
        4: { id: 4, value: null },
        5: { id: 5, value: null },
        6: { id: 6, value: null },
        7: { id: 7, value: null },
        8: { id: 8, value: null },
        9: { id: 9, value: null },
        10: { id: 10, value: "" },
        11: { id: 11, value: "" },
        12: { id: 12, value: "" },
        13: { id: 13, value: "" },
      });
    }
    if (registerFormActive.type == "update") {
      setUpdateState(state.PostimUpdatePost);
      setMedia({
        1: {
          id: 1,
          value: `data:image/jpeg;base64,${state.PostimUpdatePost.photo1.imageData}`,
        },
        2: {
          id: 2,
          value: `data:image/jpeg;base64,${state.PostimUpdatePost.photo2.imageData}`,
        },
        3: {
          id: 3,
          value: `data:image/jpeg;base64,${state.PostimUpdatePost.photo3.imageData}`,
        },
        4: {
          id: 4,
          value: `data:image/jpeg;base64,${state.PostimUpdatePost.photo4.imageData}`,
        },
        5: {
          id: 5,
          value: `data:image/jpeg;base64,${state.PostimUpdatePost.photo5.imageData}`,
        },
        6: {
          id: 6,
          value: `data:image/jpeg;base64,${state.PostimUpdatePost.photo6.imageData}`,
        },
        7: {
          id: 7,
          value: `data:image/jpeg;base64,${state.PostimUpdatePost.photo7.imageData}`,
        },
        8: {
          id: 8,
          value: `data:image/jpeg;base64,${state.PostimUpdatePost.photo8.imageData}`,
        },
        9: {
          id: 9,
          value:
            state.PostimUpdatePost.video == null
              ? `data:video/mp4;base64,${""}`
              : `data:video/mp4;base64,${state.PostimUpdatePost.video.data}`,
        },
      });

      setPostoStateHandler({
        1: { id: 1, value: state.PostimUpdatePost.photo11 },
        2: {
          id: 2,
          value: state.PostimUpdatePost.photo21,
        },
        3: { id: 3, value: state.PostimUpdatePost.photo31 },
        4: { id: 4, value: state.PostimUpdatePost.photo41 },
        5: { id: 5, value: state.PostimUpdatePost.photo51 },
        6: { id: 6, value: state.PostimUpdatePost.photo61 },
        7: { id: 7, value: state.PostimUpdatePost.photo71 },
        8: { id: 8, value: state.PostimUpdatePost.photo81 },
        9: { id: 9, value: state.PostimUpdatePost.video1 },
        10: { id: 10, value: state.PostimUpdatePost.data },
        11: { id: 11, value: state.PostimUpdatePost.pershkrim },
        12: { id: 12, value: state.PostimUpdatePost.tipi },
        13: { id: 13, value: state.PostimUpdatePost.titulli },
      });
    }
  }, [state.PostimUpdatePost]);
  const handleImageChange = (e, id1) => {
    const file = e.target.files[0];
    setPostoStateHandler({
      ...postoStateHandler,
      [id1]: { ...postoStateHandler[id1], value: file },
    });
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMedia((prevMedia) => ({
          ...prevMedia,
          [id1]: { ...prevMedia[id1], value: reader.result },
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageChange1 = async (e, id1) => {
    const file = e.target.files[0];
    const base64String = await fileToBase64(file);

    if (id1 == 1) {
      setUpdateState({
        ...updateState,
        photo1: { ...updateState.photo1, imageData: base64String },
      });
    }
    if (id1 == 2) {
      setUpdateState({
        ...updateState,
        photo2: { ...updateState.photo2, imageData: base64String },
      });
    }
    if (id1 == 3) {
      setUpdateState({
        ...updateState,
        photo3: { ...updateState.photo3, imageData: base64String },
      });
    }
    if (id1 == 4) {
      setUpdateState({
        ...updateState,
        photo4: { ...updateState.photo4, imageData: base64String },
      });
    }
    if (id1 == 5) {
      setUpdateState({
        ...updateState,
        photo5: { ...updateState.photo5, imageData: base64String },
      });
    }
    if (id1 == 6) {
      setUpdateState({
        ...updateState,
        photo6: { ...updateState.photo6, imageData: base64String },
      });
    }
    if (id1 == 7) {
      setUpdateState({
        ...updateState,
        photo7: { ...updateState.photo7, imageData: base64String },
      });
    }

    if (id1 == 8) {
      setUpdateState({
        ...updateState,
        photo8: { ...updateState.photo8, imageData: base64String },
      });
    }
    if (id1 == 9) {
      setUpdateState({
        ...updateState,
        video: { ...updateState.video, data: base64String },
      });
    }

    setPostoStateHandler({
      ...postoStateHandler,
      [id1]: { ...postoStateHandler[id1], value: file },
    });
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (id1 == 9) {
          setMedia((prevMedia) => ({
            ...prevMedia,
            [id1]: {
              ...prevMedia[id1],
              value: `data:video/mp4;base64,${base64String}`,
            },
          }));
        } else {
          setMedia((prevMedia) => ({
            ...prevMedia,
            [id1]: {
              ...prevMedia[id1],
              value: `data:image/jpeg;base64,${base64String}`,
            },
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const removeImage = (id) => {
    setMedia((prevMedia) => ({
      ...prevMedia,
      [id]: { ...prevMedia[id], value: null },
    }));
    if (id == 9) {
      setUpdateState({ ...updateState, video: null });
    }
  };
  const posto = () => {
    const body = new FormData();
    body.append("titulli", postoStateHandler[13].value);
    body.append("tipi", postoStateHandler[12].value);
    body.append("data", postoStateHandler[10].value);
    body.append("pershkrimi", postoStateHandler[11].value);
    body.append("photo1", postoStateHandler[1].value);
    body.append("photo2", postoStateHandler[2].value);
    body.append("photo3", postoStateHandler[3].value);
    body.append("photo4", postoStateHandler[4].value);
    body.append("photo5", postoStateHandler[5].value);
    body.append("photo6", postoStateHandler[6].value);
    body.append("photo7", postoStateHandler[7].value);
    body.append("photo8", postoStateHandler[8].value);
    body.append("video", postoStateHandler[9].value);
    dispatch(postoPostime(body, page));
    dispatch(ADMIN_POSTO_POSTIM());
  };
  const update = () => {
    const body = {
      ...updateState,
      pershkrim: postoStateHandler[11].value,
      data: postoStateHandler[10].value,
      tipi: postoStateHandler[12].value,
      titulli: postoStateHandler[13].value,
    };

    dispatch(UppdePost(body, page));
    dispatch(ADMIN_POSTO_POSTIM());
  };

  return (
    <div
      style={{ display: registerFormActive.status == true ? "block" : "none" }}
    >
      {registerFormActive.type == "post" ? (
        <div className="PostContainer1">
          <div className="redHeader1">
            <img
              onClick={() => dispatch(ADMIN_POSTO_POSTIM())}
              src="/component-122.svg"
            ></img>
          </div>
          <div className="imagerow1container">
            {media[1].value == null ? (
              <div className="image1">
                <input
                  accept="image/*"
                  type="file"
                  onChange={(e) => handleImageChange(e, 1)}
                />
              </div>
            ) : (
              <div className="image1">
                <img
                  src="/component-122.svg"
                  onClick={() => removeImage(1)}
                  id="removeimage"
                ></img>
                <img src={media[1].value}></img>
              </div>
            )}
            {media[2].value == null ? (
              <div className="image1">
                <input
                  accept="image/*"
                  type="file"
                  onChange={(e) => handleImageChange(e, 2)}
                />
              </div>
            ) : (
              <div className="image1">
                <img
                  src="/component-122.svg"
                  onClick={() => removeImage(2)}
                  id="removeimage"
                ></img>
                <img src={media[2].value}></img>
              </div>
            )}

            {media[3].value == null ? (
              <div className="image1">
                <input
                  accept="image/*"
                  type="file"
                  onChange={(e) => handleImageChange(e, 3)}
                />
              </div>
            ) : (
              <div className="image1">
                <img
                  src="/component-122.svg"
                  onClick={() => removeImage(3)}
                  id="removeimage"
                ></img>
                <img src={media[3].value}></img>
              </div>
            )}
            {media[4].value == null ? (
              <div className="image1">
                <input
                  accept="image/*"
                  type="file"
                  onChange={(e) => handleImageChange(e, 4)}
                />
              </div>
            ) : (
              <div className="image1">
                <img
                  src="/component-122.svg"
                  onClick={() => removeImage(4)}
                  id="removeimage"
                ></img>
                <img src={media[4].value}></img>
              </div>
            )}
          </div>
          <div className="imagerow1container">
            {media[5].value == null ? (
              <div className="image1">
                <input
                  accept="image/*"
                  type="file"
                  onChange={(e) => handleImageChange(e, 5)}
                />
              </div>
            ) : (
              <div className="image1">
                <img
                  src="/component-122.svg"
                  onClick={() => removeImage(5)}
                  id="removeimage"
                ></img>
                <img src={media[5].value}></img>
              </div>
            )}
            {media[6].value == null ? (
              <div className="image1">
                <input
                  accept="image/*"
                  type="file"
                  onChange={(e) => handleImageChange(e, 6)}
                />
              </div>
            ) : (
              <div className="image1">
                <img
                  src="/component-122.svg"
                  onClick={() => removeImage(6)}
                  id="removeimage"
                ></img>
                <img src={media[6].value}></img>
              </div>
            )}
            {media[7].value == null ? (
              <div className="image1">
                <input
                  accept="image/*"
                  type="file"
                  onChange={(e) => handleImageChange(e, 7)}
                />
              </div>
            ) : (
              <div className="image1">
                <img
                  src="/component-122.svg"
                  onClick={() => removeImage(7)}
                  id="removeimage"
                ></img>
                <img src={media[7].value}></img>
              </div>
            )}
            {media[8].value == null ? (
              <div className="image1">
                <input
                  accept="image/*"
                  type="file"
                  onChange={(e) => handleImageChange(e, 8)}
                />
              </div>
            ) : (
              <div className="image1">
                <img
                  src="/component-122.svg"
                  onClick={() => removeImage(8)}
                  id="removeimage"
                ></img>
                <img src={media[8].value}></img>
              </div>
            )}
          </div>
          <textarea
            placeholder="Pershkrim"
            className="textareapostime"
            value={postoStateHandler[11].value}
            onChange={(e) =>
              setPostoStateHandler({
                ...postoStateHandler,
                11: { id: 11, value: e.target.value },
              })
            }
          ></textarea>
          <div className="inputtypepart">
            <input
              value={postoStateHandler[13].value}
              onChange={(e) =>
                setPostoStateHandler({
                  ...postoStateHandler,
                  13: { id: 13, value: e.target.value },
                })
              }
              placeholder="Titulli"
            ></input>
            <input
              value={postoStateHandler[12].value}
              onChange={(e) =>
                setPostoStateHandler({
                  ...postoStateHandler,
                  12: { id: 12, value: e.target.value },
                })
              }
              placeholder="Tipi"
            ></input>
            <input
              placeholder="Data"
              value={postoStateHandler[10].value}
              onChange={(e) =>
                setPostoStateHandler({
                  ...postoStateHandler,
                  10: { id: 10, value: e.target.value },
                })
              }
            ></input>
          </div>
          {media[9].value == null ? (
            <div className="videotag">
              <input
                type="file"
                accept="video/*"
                text="upload a video"
                onChange={(e) => handleImageChange(e, 9)}
              />
            </div>
          ) : (
            <div className="videotag">
              <img
                src="/component-122.svg"
                onClick={() => removeImage(9)}
                id="removeimage1"
              ></img>
              <video src={media[9].value} controls></video>
            </div>
          )}

          <div onClick={() => posto()} className="postopostim">
            <p>Posto</p>
          </div>
        </div>
      ) : (
        <div className="PostContainer1">
          <div className="redHeader1">
            <img
              onClick={() => dispatch(ADMIN_POSTO_POSTIM())}
              src="/component-122.svg"
            ></img>
          </div>
          <div className="imagerow1container">
            {media[1].value == null ? (
              <div className="image1">
                <input
                  accept="image/*"
                  type="file"
                  onChange={(e) => handleImageChange1(e, 1)}
                />
              </div>
            ) : (
              <div className="image1">
                <img
                  src="/component-122.svg"
                  onClick={() => removeImage(1)}
                  id="removeimage"
                ></img>
                <img src={media[1].value}></img>
              </div>
            )}
            {media[2].value == null ? (
              <div className="image1">
                <input
                  accept="image/*"
                  type="file"
                  onChange={(e) => handleImageChange1(e, 2)}
                />
              </div>
            ) : (
              <div className="image1">
                <img
                  src="/component-122.svg"
                  onClick={() => removeImage(2)}
                  id="removeimage"
                ></img>
                <img src={media[2].value}></img>
              </div>
            )}

            {media[3].value == null ? (
              <div className="image1">
                <input
                  accept="image/*"
                  type="file"
                  onChange={(e) => handleImageChange1(e, 3)}
                />
              </div>
            ) : (
              <div className="image1">
                <img
                  src="/component-122.svg"
                  onClick={() => removeImage(3)}
                  id="removeimage"
                ></img>
                <img src={media[3].value}></img>
              </div>
            )}
            {media[4].value == null ? (
              <div className="image1">
                <input
                  accept="image/*"
                  type="file"
                  onChange={(e) => handleImageChange1(e, 4)}
                />
              </div>
            ) : (
              <div className="image1">
                <img
                  src="/component-122.svg"
                  onClick={() => removeImage(4)}
                  id="removeimage"
                ></img>
                <img src={media[4].value}></img>
              </div>
            )}
          </div>
          <div className="imagerow1container">
            {media[5].value == null ? (
              <div className="image1">
                <input
                  accept="image/*"
                  type="file"
                  onChange={(e) => handleImageChange1(e, 5)}
                />
              </div>
            ) : (
              <div className="image1">
                <img
                  src="/component-122.svg"
                  onClick={() => removeImage(5)}
                  id="removeimage"
                ></img>
                <img src={media[5].value}></img>
              </div>
            )}
            {media[6].value == null ? (
              <div className="image1">
                <input
                  accept="image/*"
                  type="file"
                  onChange={(e) => handleImageChange1(e, 6)}
                />
              </div>
            ) : (
              <div className="image1">
                <img
                  src="/component-122.svg"
                  onClick={() => removeImage(6)}
                  id="removeimage"
                ></img>
                <img src={media[6].value}></img>
              </div>
            )}
            {media[7].value == null ? (
              <div className="image1">
                <input
                  accept="image/*"
                  type="file"
                  onChange={(e) => handleImageChange1(e, 7)}
                />
              </div>
            ) : (
              <div className="image1">
                <img
                  src="/component-122.svg"
                  onClick={() => removeImage(7)}
                  id="removeimage"
                ></img>
                <img src={media[7].value}></img>
              </div>
            )}
            {media[8].value == null ? (
              <div className="image1">
                <input
                  accept="image/*"
                  type="file"
                  onChange={(e) => handleImageChange1(e, 8)}
                />
              </div>
            ) : (
              <div className="image1">
                <img
                  src="/component-122.svg"
                  onClick={() => removeImage(8)}
                  id="removeimage"
                ></img>
                <img src={media[8].value}></img>
              </div>
            )}
          </div>
          <textarea
            placeholder="Pershkrim"
            className="textareapostime"
            value={postoStateHandler[11].value}
            onChange={(e) =>
              setPostoStateHandler({
                ...postoStateHandler,
                11: { id: 11, value: e.target.value },
              })
            }
          ></textarea>
          <div className="inputtypepart">
            <input
              value={postoStateHandler[13].value}
              onChange={(e) =>
                setPostoStateHandler({
                  ...postoStateHandler,
                  13: { id: 13, value: e.target.value },
                })
              }
              placeholder="Titulli"
            ></input>
            <input
              value={postoStateHandler[12].value}
              onChange={(e) =>
                setPostoStateHandler({
                  ...postoStateHandler,
                  12: { id: 12, value: e.target.value },
                })
              }
              placeholder="Tipi"
            ></input>
            <input
              placeholder="Data"
              value={postoStateHandler[10].value}
              onChange={(e) =>
                setPostoStateHandler({
                  ...postoStateHandler,
                  10: { id: 10, value: e.target.value },
                })
              }
            ></input>
          </div>
          {media[9].value == null ? (
            <div className="videotag">
              <input
                accept="video/*"
                type="file"
                text="upload a video"
                onChange={(e) => handleImageChange1(e, 9)}
              />
            </div>
          ) : (
            <div className="videotag">
              <img
                src="/component-122.svg"
                onClick={() => removeImage(9)}
                id="removeimage1"
              ></img>
              <video src={media[9].value} controls></video>
            </div>
          )}

          <div onClick={() => update()} className="postopostim">
            <p>Update</p>
          </div>
        </div>
      )}

      <div className="NjoftimePostForm"></div>
    </div>
  );
}
export default PostimePostForm;
