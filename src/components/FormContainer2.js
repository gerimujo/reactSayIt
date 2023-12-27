import ContainerCardForm from "./ContainerCardForm";
import "./FormContainer2.css";
import { useNavigate } from "react-router-dom";
const FormContainer2 = () => {
  const navigate = useNavigate();
  return (
    <div className="frame-parent109">
      <div className="frame-parent110">
        <div className="frame-parent111">
          <div className="arsyet-perse-duhet-te-na-bashk-parent">
            <div className="arsyet-perse-duhet">
              Arsyet perse duhet te na bashkoheni ?
            </div>
            <div className="lorem-ipsum-dolor14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
              ante ut justo convallis tristique. Integer luctus ex at lorem
              fringilla, eget fermentum sapien tincidunt
            </div>
          </div>
          <div className="frame-parent112">
            <div className="happy-parent">
              <img className="happy-icon" alt="" src="/happy@2x.png" />
              <div className="arsyet-perse-duhet">{`Arsyeja 1 uec `}</div>
              <div className="lorem-ipsum-dolor15">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non ante ut justo . `}</div>
            </div>
            <ContainerCardForm
              imageLabel="/hug@2x.png"
              uecDescription="Arsyeja 2 uec"
              loremIpsumText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non ante ut justo "
            />
          </div>
          <div className="frame-parent113">
            <ContainerCardForm
              imageLabel="/happy1@2x.png"
              uecDescription="Arsyeja 1 uec"
              loremIpsumText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non ante ut justo "
              propHeight="9.13rem"
              propWidth="1.88rem"
              propHeight1="1.88rem"
            />
            <ContainerCardForm
              imageLabel="/hug1@2x.png"
              uecDescription="Arsyeja 2 uec"
              loremIpsumText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non ante ut justo  . "
              propHeight="9.44rem"
              propWidth="2.19rem"
              propHeight1="2.19rem"
            />
          </div>
        </div>
        <div
          onClick={() => navigate("/bashkohu")}
          className="bashkohu-me-wrapper2"
        >
          <div className="bashkohu-me4">{`Bashkohu me ne `}</div>
        </div>
      </div>
      <img className="image-18-icon2" alt="" src="/image-182@2x.png" />
    </div>
  );
};

export default FormContainer2;
