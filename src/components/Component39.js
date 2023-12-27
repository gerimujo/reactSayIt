import { useEffect, useMemo } from "react";
import "./Component39.css";
import { useDispatch, useSelector } from "react-redux";
import { BASHKOHU_REGISTER_FORM_ACTIVE } from "../redux/actions";
import { useState } from "react";
import { antaretPost } from "../redux/asyncActions";
import { RETURN_ANTARET_NORMAL } from "../redux/actions";
import { REGISTER_FORM_ACTIVE_UPDATE } from "../redux/actions";
import { updaetAntaret } from "../redux/asyncActions";
import { SET_REGISTER_FORM_ANTAR_FOR_UPDATE } from "../redux/actions";
const Component39 = ({
  component12,
  showDoEThemi,
  component39Width,
  component39Height,
  component39Position,
  component39Top,
  component39Right,
  component39Left,
  component39BackgroundColor,
  component39Bottom,
  component12IconTop,
  component12IconBottom,
  component12IconWidth,
  component12IconRight,
  rectangleDivRight,
  rectangleDivRight1,
  rectangleDivRight2,
  emrMbiemrWidth,
  emrMbiemrLeft,
  moshaLeft,
  institucioniArsimorLeft,
  numriIKontaktitLeft,
  adresaEEmailItLeft,
  vendbanimiWidth,
  vendbanimiLeft,
  doEThemiWidth,
  rectangleDivRight3,
  rectangleDivWidth,
  rectangleDivLeft,
}) => {
  const component39Style = useMemo(() => {
    return {
      width: component39Width,
      height: component39Height,
      position: component39Position,
      top: component39Top,
      right: component39Right,
      left: component39Left,
      backgroundColor: component39BackgroundColor,
      bottom: component39Bottom,
    };
  }, [
    component39Width,
    component39Height,
    component39Position,
    component39Top,
    component39Right,
    component39Left,
    component39BackgroundColor,
    component39Bottom,
  ]);

  const component12IconStyle = useMemo(() => {
    return {
      top: component12IconTop,
      bottom: component12IconBottom,
      width: component12IconWidth,
      right: component12IconRight,
    };
  }, [
    component12IconTop,
    component12IconBottom,
    component12IconWidth,
    component12IconRight,
  ]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      right: rectangleDivRight,
    };
  }, [rectangleDivRight]);

  const rectangleDiv2Style = useMemo(() => {
    return {
      right: rectangleDivRight1,
    };
  }, [rectangleDivRight1]);

  const rectangleDiv3Style = useMemo(() => {
    return {
      right: rectangleDivRight2,
    };
  }, [rectangleDivRight2]);

  const emrMbiemrStyle = useMemo(() => {
    return {
      width: emrMbiemrWidth,
      left: emrMbiemrLeft,
    };
  }, [emrMbiemrWidth, emrMbiemrLeft]);

  const moshaStyle = useMemo(() => {
    return {
      left: moshaLeft,
    };
  }, [moshaLeft]);

  const institucioniArsimorStyle = useMemo(() => {
    return {
      left: institucioniArsimorLeft,
    };
  }, [institucioniArsimorLeft]);

  const numriIKontaktitStyle = useMemo(() => {
    return {
      left: numriIKontaktitLeft,
    };
  }, [numriIKontaktitLeft]);

  const adresaEEmailItStyle = useMemo(() => {
    return {
      left: adresaEEmailItLeft,
    };
  }, [adresaEEmailItLeft]);

  const vendbanimiStyle = useMemo(() => {
    return {
      width: vendbanimiWidth,
      left: vendbanimiLeft,
    };
  }, [vendbanimiWidth, vendbanimiLeft]);

  const doEThemiStyle = useMemo(() => {
    return {
      width: doEThemiWidth,
    };
  }, [doEThemiWidth]);

  const rectangleDiv4Style = useMemo(() => {
    return {
      right: rectangleDivRight3,
      width: rectangleDivWidth,
      left: rectangleDivLeft,
    };
  }, [rectangleDivRight3, rectangleDivWidth, rectangleDivLeft]);
  const dispatch = useDispatch();
  const registerFormActive = useSelector(
    (state) => state.activeFormsState.activeForm.antaret
  );
  const state = useSelector((state) => state.activeFormsState.activeForm);
  const [bashkohuFormState, setBashkohuFormState] = useState({
    emri: "",
    mosha: "",
    arsimi: "",
    institucioni: "",
    numri: "",
    email: "",
    vendbanim: "",
    doethemi: "",
  });
  const konfirmo = () => {
    if (state.bashkohuFormActiveUpdate == true) {
      dispatch(SET_REGISTER_FORM_ANTAR_FOR_UPDATE(bashkohuFormState));
      dispatch(updaetAntaret(bashkohuFormState));
    } else {
      dispatch(antaretPost(bashkohuFormState));
    }
  };
  useEffect(() => {
    if (state.bashkohuFormActiveUpdate == true) {
      setBashkohuFormState(state.bashkohuFormUpdateAntar);
    } else {
      setBashkohuFormState({
        emri: "",
        mosha: "",
        arsimi: "",
        institucioni: "",
        numri: "",
        email: "",
        vendbanim: "",
        doethemi: "",
      });
    }
  }, [state]);
  return (
    <div>
      <div className="component-39" style={component39Style}>
        <div className="component-39-child" />
        <div className="component-39-item" />
        <img
          onClick={() => {
            dispatch(BASHKOHU_REGISTER_FORM_ACTIVE());
            setBashkohuFormState({
              emri: "",
              mosha: "",
              arsimi: "",
              institucioni: "",
              numri: "",
              email: "",
              vendbanim: "",
              doethemi: "",
            });
            if (state.bashkohuFormActiveUpdate == true) {
              console.log("fuuuuunktion");
              dispatch(REGISTER_FORM_ACTIVE_UPDATE());
            }
          }}
          className="component-12-icon"
          alt=""
          src={component12}
          style={component12IconStyle}
        />
        <div className="component-39-inner" />
        <div className="component-39-child1" style={rectangleDiv1Style} />
        <div className="component-39-child2" />
        <div className="component-39-child3" style={rectangleDiv2Style} />
        <div className="component-39-child4" />
        <div className="component-39-child5" style={rectangleDiv3Style} />
        <div className="component-39-child6" />
        <div className="component-39-child6" />
        <div className="component-39-child8" />
        <input
          id="inputform"
          className="emr-mbiemr"
          placeholder="Emër / Mbiemër"
          style={emrMbiemrStyle}
          onChange={(e) =>
            setBashkohuFormState({ ...bashkohuFormState, emri: e.target.value })
          }
          value={bashkohuFormState.emri}
        ></input>
        <input
          className="mosha"
          placeholder="Mosha"
          id="inputform"
          style={moshaStyle}
          onChange={(e) =>
            setBashkohuFormState({
              ...bashkohuFormState,
              mosha: e.target.value,
            })
          }
          value={bashkohuFormState.mosha}
        ></input>
        <input
          className="arsimi"
          onChange={(e) =>
            setBashkohuFormState({
              ...bashkohuFormState,
              arsimi: e.target.value,
            })
          }
          value={bashkohuFormState.arsimi}
          placeholder="Arsimi"
          id="inputform"
        ></input>
        <input
          className="institucioni-arsimor"
          placeholder="Institucioni Arsimor"
          id="inputform"
          onChange={(e) =>
            setBashkohuFormState({
              ...bashkohuFormState,
              institucioni: e.target.value,
            })
          }
          value={bashkohuFormState.institucioni}
          style={institucioniArsimorStyle}
        ></input>
        <input
          className="numri-i-kontaktit"
          placeholder="Numri i Kontaktit"
          id="inputform"
          onChange={(e) =>
            setBashkohuFormState({
              ...bashkohuFormState,
              numri: e.target.value,
            })
          }
          value={bashkohuFormState.numri}
          style={numriIKontaktitStyle}
        ></input>
        <input
          className="adresa-e-email-it"
          placeholder="Adresa e Email-it"
          id="inputform"
          onChange={(e) =>
            setBashkohuFormState({
              ...bashkohuFormState,
              email: e.target.value,
            })
          }
          value={bashkohuFormState.email}
          style={adresaEEmailItStyle}
        ></input>
        <input
          className="vendbanimi"
          placeholder="Vendbanimi"
          id="inputform"
          onChange={(e) =>
            setBashkohuFormState({
              ...bashkohuFormState,
              vendbanim: e.target.value,
            })
          }
          value={bashkohuFormState.vendbanim}
          style={vendbanimiStyle}
        ></input>
        <input
          className="do-e-themi"
          placeholder="Do e themi apo jo"
          id="inputform"
          onChange={(e) =>
            setBashkohuFormState({
              ...bashkohuFormState,
              doethemi: e.target.value,
            })
          }
          value={bashkohuFormState.doethemi}
        ></input>

        <div className="component-39-child9" style={rectangleDiv4Style} />
        <p
          className="errorMessageBashkohu"
          style={{
            color:
              registerFormActive.error ==
              "Regjistruar me sukses / Registered successfully"
                ? "green"
                : "red",
            left:
              registerFormActive.error ==
              "Regjistruar me sukses / Registered successfully"
                ? "30%"
                : "5%",
            display: state.bashkohuFormActiveUpdate == true ? "none" : "block",
          }}
        >
          {registerFormActive.error}
        </p>
        <p
          className="errorMessageBashkohu"
          style={{
            color:
              registerFormActive.error == "Update is done" ? "green" : "red",
            left: registerFormActive.error == "Update is done" ? "40%" : "40%",
            display: state.bashkohuFormActiveUpdate == true ? "block" : "none",
          }}
        >
          {registerFormActive.error}
        </p>
        <div onClick={() => konfirmo()} className="update1">
          <p>
            {" "}
            {state.bashkohuFormActiveUpdate == true ? "Update" : "Konfirmo"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Component39;
