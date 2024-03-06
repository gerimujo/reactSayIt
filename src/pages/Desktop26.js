import FilteredFormContainer from "../components/FilteredFormContainer";
import ContainerCardForm1 from "../components/ContainerCardForm1";
import Component18 from "../components/Component18";
import FormContainer4 from "../components/FormContainer4";
import FormContainer from "../components/FormContainer";
import ContainerForm1 from "../components/ContainerForm1";
import "./Desktop26.css";
import Component39 from "../components/Component39";
import { useDispatch, useSelector } from "react-redux";
import { BASHKOHU_REGISTER_FORM_ACTIVE } from "../redux/actions";
import { GetAntaretAdmin } from "../redux/asyncActions";
import { useEffect } from "react";

const Desktop26 = () => {
  const dispatch = useDispatch();

  const registerFormActive = useSelector(
    (state) => state.activeFormsState.activeForm.bashkohuFormActive
  );
  const antaretState = useSelector(
    (state) => state.activeFormsState.activeForm.antaret.data
  );
  useEffect(() => {
    dispatch(GetAntaretAdmin());
  }, []);

  if (!antaretState) {
    return <div>Loading...</div>;
  }
  return (
    <div className="desktop-26">
      <FilteredFormContainer />

      <div className="image-291-group">
        <img className="image-291-icon2" alt="" src="/image-291@2x.png" />
        <div className="frame-parent53">
          <div className="frame-parent54">
            <div className="frame-parent55">
              <FormContainer
                itemIcon="/bell1.svg"
                actionText="Njoftimet"
                textcolor="black"
              />
              <FormContainer
                textcolor="white"
                itemIcon="/group1.svg"
                backgroundcolor="#db343a"
                actionText="Antaret"
              />
              <FormContainer
                itemIcon="/add-circle1.svg"
                actionText="Postimet"
                iconText="/group.svg"
              />
            </div>
            <div className="frame-child43" />
          </div>
          <FormContainer itemIcon="/lock.svg" actionText="Change password" />
          <FormContainer itemIcon="/logout.svg" actionText="Dilni" />
        </div>
      </div>
      <div className="desktop-26-child" />
      <div className="antaret2">Antaret</div>
      <div className="desktop-26-item" />
      <div onClick={() => dispatch(BASHKOHU_REGISTER_FORM_ACTIVE())}>
        <Component18
          posto="Shto"
          component18Width="9.86%"
          component18Height="3.31rem"
          component18Position="absolute"
          component18Top="4.38rem"
          component18Right="69.79%"
          component18Left="20.35%"
          component18Right1="11.01%"
          component18Left1="-6.66%"
          addCircleIconWidth="1.81rem"
          addCircleIconHeight="1.81rem"
        />
      </div>
      <div className="antaretcontainer">
        {antaretState.map((d) => (
          <FormContainer4
            id={d.id}
            emri={d.emri}
            mosha={d.mosha}
            arsimi={d.arsimi}
            instituti={d.institucioni}
            numri={d.numri}
            email={d.email}
            vendbanim={d.vendbanim}
            doethemi={d.doethemi}
          />
        ))}
      </div>
      <ContainerForm1 />
      <div
        className="component-43-parent"
        style={{
          display: registerFormActive == false ? "none" : "block",
          zIndex: 20,
        }}
      >
        <Component39
          component12="/component-122.svg"
          showDoEThemi={false}
          component39Width="66.9%"
          component39Height="42.75rem"
          component39Position="absolute"
          component39Top="4rem"
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

export default Desktop26;
