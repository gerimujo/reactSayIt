import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { MENU_MBYLL_TELEFON, MENU_STATIK_TELEFON } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const state = useSelector(
    (state) => state.activeFormsState.activeForm.idmenu.idmenu
  );
  const dispatch = useDispatch();
  const closeMenu = () => {
    dispatch(MENU_MBYLL_TELEFON());

    setTimeout(() => {
      dispatch(MENU_STATIK_TELEFON());
    }, 200);
  };
  return (
    <div
      id={state}
      style={{ display: state == "menustatik" ? "none" : "block" }}
      className="menu11"
    >
      <FontAwesomeIcon
        className="closeIconMenu"
        onClick={() => closeMenu()}
        icon={faXmark}
      />
      <p
        onClick={() => {
          navigate("/");
          closeMenu();
        }}
        className="kryefaqja"
      >
        Kryefaqja
      </p>
      <p className="line1"></p>
      <p className="kryefaqja">Rreth Nesh</p>
      <p className="line1"></p>
      <p
        className="kryefaqja"
        onClick={() => {
          navigate("/njoftimet/1");
          closeMenu();
        }}
      >
        Njoftimet
      </p>
      <p className="line1"></p>
      <p
        className="kryefaqja"
        onClick={() => {
          navigate("/blog/1");
          closeMenu();
        }}
      >
        Blog
      </p>
      <p className="line1"></p>
    </div>
  );
};
export default Menu;
