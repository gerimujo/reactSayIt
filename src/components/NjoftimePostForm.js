import "./NjoftimePostForm.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADMIN_UPDATE_NJOFTIM, ADMIN_POSTO_NJOFTIM } from "../redux/actions";
import { fetchData, postoNjoftime } from "../redux/asyncActions";
import { updateNjoftimet } from "../redux/asyncActions";
import { useParams } from "react-router-dom";

function NjoftimePostForm({ id }) {
  const { page } = useParams();
  const [imageVisible, setImageVisible] = useState(true);
  const state = useSelector((state) => state.activeFormsState.activeForm);
  const dispatch = useDispatch();
  const registerFormActive = state.AdminNjoftimetActive;
  const postimihap = state.njoftimhapUpdate;

  console.log("datataaaa" + postimihap);

  const [selectedImage, setSelectedImage] = useState(null);

  const [postoStateHandler, setPostoStatehandler] = useState({
    photo: null,
    tipi: "",
    titulli: "",
    data: "",
    ora: "",
    vendi: "",
    pershkrimi: "",
    aktiv: "aktiv",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setPostoStatehandler({
      ...postoStateHandler,
      photo: e.target.files[0],
    });
    console.log("file is " + file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const PostoFunction = async () => {
    const formData = new FormData();
    if (
      postoStateHandler.photo != null &&
      postoStateHandler.tipi != "" &&
      postoStateHandler.titulli != "" &&
      postoStateHandler.data != "" &&
      postoStateHandler.ora != "" &&
      postoStateHandler.vendi != ""
    ) {
      formData.append("photo", postoStateHandler.photo);
      formData.append("tipi", postoStateHandler.tipi);
      formData.append("titulli", postoStateHandler.titulli);
      formData.append("data", postoStateHandler.data);
      formData.append("ora", postoStateHandler.ora);
      formData.append("vendi", postoStateHandler.vendi);
      formData.append("pershkrimi", postoStateHandler.pershkrimi);
      formData.append("aktiv", postoStateHandler.aktiv);
      dispatch(postoNjoftime(formData, page));
      dispatch(ADMIN_POSTO_NJOFTIM());
      dispatch(fetchData(page));
    } else {
      alert("ploteso te gjitha fushat ne menyren e duhur");
    }
  };
  const [prov, setprov] = useState({
    photo: null,
    tipi: "",
    titulli: "",
    data: "",
    ora: "",
    vendi: "",
    pershkrimi: "",
    aktiv: "aktiv",
  });
  useEffect(() => {
    setprov(postimihap);
  }, [postimihap]);
  const update = () => {
    if (
      prov.data != "" &&
      prov.ora != "" &&
      prov.tipi != "" &&
      prov.titulli != "" &&
      prov.vendi != ""
    ) {
      const body = {
        id: prov.id,
        aktiv: prov.aktiv,
        data: prov.data,
        ora: prov.ora,
        pershkrimi: prov.pershkrimi,
        tipi: prov.tipi,
        titulli: prov.titulli,
        vendi: prov.vendi,
        photo: null,
      };
      dispatch(updateNjoftimet(body, page));
      console.log("faqja este " + page);

      dispatch(ADMIN_UPDATE_NJOFTIM());
    } else {
      alert("Ju lutem plotesoni te gjitha fushat");
    }
  };

  return (
    <div
      style={{
        display: registerFormActive.status == true ? "block" : "none",
        zIndex: 200,
      }}
    >
      {registerFormActive.type == "update" ? (
        <div className="PostContainer">
          <div className="redHeader">
            <img
              onClick={() => dispatch(ADMIN_UPDATE_NJOFTIM())}
              src="/component-122.svg"
            ></img>
          </div>

          <img
            className="imagepart"
            src={`data:image/jpeg;base64,${postimihap.photo1}`}
            alt="ska"
          ></img>

          <input
            onChange={(e) => setprov({ ...prov, tipi: e.target.value })}
            placeholder="Tipi"
            id="inputpart1"
            className="tipinput"
            value={prov.tipi}
          ></input>

          <input
            onChange={(e) => setprov({ ...prov, titulli: e.target.value })}
            placeholder="Titulli"
            id="inputpart1"
            maxLength="40"
            className="titullinput"
            value={prov.titulli}
          ></input>

          <div className="DataContainer">
            <input
              onChange={(e) => setprov({ ...prov, data: e.target.value })}
              id="inputpart1"
              placeholder="Data"
              className="Datainput"
              value={prov.data}
            ></input>
            <input
              onChange={(e) => setprov({ ...prov, ora: e.target.value })}
              id="inputpart1"
              placeholder="Ora"
              className="Datainput"
              value={prov.ora}
            ></input>
          </div>
          <div className="TitulliContainer">
            <input
              onChange={(e) => setprov({ ...prov, vendi: e.target.value })}
              id="inputpart1"
              placeholder="Vendi"
              className="titullinput"
              value={prov.vendi}
            ></input>
          </div>

          <textarea
            onChange={(e) => setprov({ ...prov, pershkrimi: e.target.value })}
            placeholder="Pershkrim"
            className="Pershkriminput"
            value={prov.pershkrimi}
          ></textarea>

          <div onClick={() => update()} className="PostoContainer">
            <p>Update</p>
          </div>
        </div>
      ) : (
        <div className="PostContainer">
          <div className="redHeader">
            <img
              onClick={() => dispatch(ADMIN_POSTO_NJOFTIM())}
              src="/component-122.svg"
            ></img>
          </div>
          {selectedImage == null ? (
            <div className="imagepart">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                placeholder="click here"
              ></input>
              <p className="upload">Upload</p>
            </div>
          ) : (
            <div className="imagepart">
              <img
                onClick={() => setSelectedImage(null)}
                src="/component-122.svg"
                className="removeimage1"
              ></img>
              <img className="imagepart1" src={selectedImage} alt="ska"></img>
            </div>
          )}

          <input
            value={postoStateHandler.tipi}
            onChange={(e) =>
              setPostoStatehandler({
                ...postoStateHandler,
                tipi: e.target.value,
              })
            }
            placeholder="Tipi"
            id="inputpart1"
            className="tipinput"
          ></input>

          <input
            value={postoStateHandler.titulli}
            onChange={(e) =>
              setPostoStatehandler({
                ...postoStateHandler,
                titulli: e.target.value,
              })
            }
            placeholder="Titulli"
            id="inputpart1"
            maxLength="40"
            className="titullinput"
          ></input>

          <div className="DataContainer">
            <input
              value={postoStateHandler.data}
              onChange={(e) =>
                setPostoStatehandler({
                  ...postoStateHandler,
                  data: e.target.value,
                })
              }
              id="inputpart1"
              placeholder="Data"
              className="Datainput"
            ></input>
          </div>
          <input
            value={postoStateHandler.ora}
            onChange={(e) =>
              setPostoStatehandler({
                ...postoStateHandler,
                ora: e.target.value,
              })
            }
            id="inputpart1"
            placeholder="Ora"
            className="Datainput"
          ></input>
          <div className="TitulliContainer">
            <input
              value={postoStateHandler.vendi}
              onChange={(e) =>
                setPostoStatehandler({
                  ...postoStateHandler,
                  vendi: e.target.value,
                })
              }
              id="inputpart1"
              placeholder="Vendi"
              className="titullinput"
            ></input>
          </div>

          <textarea
            value={postoStateHandler.pershkrimi}
            onChange={(e) =>
              setPostoStatehandler({
                ...postoStateHandler,
                pershkrimi: e.target.value,
              })
            }
            placeholder="Pershkrim"
            className="Pershkriminput"
          ></textarea>

          <div onClick={() => PostoFunction()} className="PostoContainer">
            <p>Posto</p>
          </div>
        </div>
      )}

      <div className="NjoftimePostForm"></div>
    </div>
  );
}
export default NjoftimePostForm;
