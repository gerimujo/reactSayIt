import "./OrganizationRegistrationContai.css";
import { useDispatch, useSelector } from "react-redux";
import { BASHKOHU_REGISTER_FORM_ACTIVE } from "../redux/actions";
import { PostoPjestammeret, antaretPost } from "../redux/asyncActions";
import { useEffect, useState } from "react";

const OrganizationRegistrationContai1 = (top1) => {
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
    njoftimet: state.njoftimetPjestarRregjistrohu,
  });
  const konfirmo = () => {
    setBashkohuFormState({
      ...bashkohuFormState,
      njoftimet: state.njoftimetPjestarRregjistrohu,
    });
    dispatch(PostoPjestammeret(bashkohuFormState));
  };
  useEffect(() => {
    setBashkohuFormState((prevState) => ({
      ...prevState,
      njoftimet: state.njoftimetPjestarRregjistrohu,
    }));
  }, [state.njoftimetPjestarRregjistrohu]);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div style={{ top: scrollY + 30 + "px" }} className="frame-parent137">
      <div className="rectangle-parent4">
        <div className="frame-child75" />
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
              njoftimet: state.njoftimetPjestarRregjistrohu,
            });
          }}
          className="component-12-icon1"
          alt=""
          src="/component-121.svg"
        />
      </div>
      <div className="frame-parent138">
        <div className="rregjistrohu-parent">
          <div className="rregjistrohu2">RREGJISTROHU</div>
          <div className="frame-parent139">
            <div className="frame-parent140">
              <div className="emer-mbimer-wrapper">
                <input
                  className="emer-mbimer"
                  placeholder="Emer / Mbimer"
                  onChange={(e) =>
                    setBashkohuFormState({
                      ...bashkohuFormState,
                      emri: e.target.value,
                    })
                  }
                  value={bashkohuFormState.emri}
                ></input>
              </div>
              <div className="emer-mbimer-wrapper">
                <input
                  className="emer-mbimer"
                  placeholder="Mosha"
                  onChange={(e) =>
                    setBashkohuFormState({
                      ...bashkohuFormState,
                      mosha: e.target.value,
                    })
                  }
                  value={bashkohuFormState.mosha}
                ></input>
              </div>
            </div>
            <div className="frame-parent140">
              <div className="emer-mbimer-wrapper">
                <input
                  className="emer-mbimer"
                  onChange={(e) =>
                    setBashkohuFormState({
                      ...bashkohuFormState,
                      arsimi: e.target.value,
                    })
                  }
                  value={bashkohuFormState.arsimi}
                  placeholder="Arsimi"
                ></input>
              </div>
              <div className="institucioni-arsimor-wrapper">
                <input
                  className="emer-mbimer"
                  onChange={(e) =>
                    setBashkohuFormState({
                      ...bashkohuFormState,
                      institucioni: e.target.value,
                    })
                  }
                  value={bashkohuFormState.institucioni}
                  placeholder="Institucioni Arsimor"
                ></input>
              </div>
            </div>
            <div className="frame-parent140">
              <div className="emer-mbimer-wrapper">
                <input
                  onChange={(e) =>
                    setBashkohuFormState({
                      ...bashkohuFormState,
                      numri: e.target.value,
                    })
                  }
                  value={bashkohuFormState.numri}
                  className="emer-mbimer"
                  placeholder="Numri i Kontaktit"
                ></input>
              </div>
              <div className="institucioni-arsimor-wrapper">
                <input
                  className="emer-mbimer"
                  onChange={(e) =>
                    setBashkohuFormState({
                      ...bashkohuFormState,
                      email: e.target.value,
                    })
                  }
                  value={bashkohuFormState.email}
                  placeholder="Adresa e Email-it"
                ></input>
              </div>
            </div>
            <div className="frame-parent140">
              <div className="emer-mbimer-wrapper">
                <input
                  className="emer-mbimer"
                  onChange={(e) =>
                    setBashkohuFormState({
                      ...bashkohuFormState,
                      vendbanim: e.target.value,
                    })
                  }
                  value={bashkohuFormState.vendbanim}
                  placeholder="Vendbanimi"
                ></input>
              </div>
              <div className="institucioni-arsimor-wrapper">
                <input
                  onChange={(e) =>
                    setBashkohuFormState({
                      ...bashkohuFormState,
                      doethemi: e.target.value,
                    })
                  }
                  value={bashkohuFormState.doethemi}
                  className="emer-mbimer"
                  placeholder="Do e themi apo jo ?"
                ></input>
              </div>
            </div>
          </div>
        </div>
        <p
          className="errorMessageBashkohu1"
          onClick={() => console.log(registerFormActive.data)}
          style={{
            color:
              state.njoftimetPjestarRregjistrohuShenim ==
              "Bere me sukses / Done succesfully"
                ? "green"
                : "red",
          }}
        >
          {state.njoftimetPjestarRregjistrohuShenim}
        </p>
        <div onClick={() => konfirmo()} className="konfirmo-wrapper">
          <div className="konfirmo">Konfirmo</div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationRegistrationContai1;
