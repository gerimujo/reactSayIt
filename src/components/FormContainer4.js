import "./FormContainer4.css";
import { useState } from "react";
import { deleteAntar, deleteAntar1 } from "../redux/asyncActions";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_REGISTER_FORM_ANTAR_FOR_UPDATE,
  REGISTER_FORM_ACTIVE_UPDATE,
} from "../redux/actions";
import { useLocation, useParams } from "react-router-dom";

const FormContainer4 = ({
  id,
  emri,
  mosha,
  arsimi,
  instituti,
  numri,
  email,
  vendbanim,
  doethemi,
}) => {
  const state = useSelector((state) => state.activeFormsState.activeForm);
  const [opsionbutton, setOpsionButton] = useState(false);
  const dispatch = useDispatch();
  const { page } = useParams();

  const deletePjestar = () => {
    console.log(page);
    if (page == undefined) {
      dispatch(deleteAntar(id));
    } else {
      dispatch(deleteAntar1(id));
    }
  };
  return (
    <div className="component-44">
      <div
        onClick={() => setOpsionButton(!opsionbutton)}
        className="ellipse-parent36"
      >
        <div className="frame-child66" />
        <div className="frame-child66" />
        <div className="frame-child66" />
      </div>
      <div
        style={{ display: opsionbutton == true ? "block" : "none" }}
        className="fshije-parent4"
      >
        <div onClick={() => deletePjestar()} className="fshije6">
          Fshije
        </div>
        <div
          className="fshije6"
          onClick={() => {
            dispatch(
              SET_REGISTER_FORM_ANTAR_FOR_UPDATE({
                id: id,
                emri: emri,
                mosha: mosha,
                arsimi: arsimi,
                institucioni: instituti,
                numri: numri,
                email: email,
                vendbanim: vendbanim,
                doethemi: doethemi,
              })
            );
          }}
        >
          Perditeso
        </div>
      </div>
      <div className="geri-mujo">{emri}</div>
      <div className="div">{mosha}</div>
      <div className="universitet">{arsimi}</div>
      <div className="tbu">{instituti}</div>
      <div className="div1">{numri}</div>
      <div className="gerimujohotmailcom" id="email">
        {email}
      </div>
      <div className="tirana" id="vendbanim1">
        {vendbanim}
      </div>
      <div className="po">{doethemi}</div>
    </div>
  );
};

export default FormContainer4;
