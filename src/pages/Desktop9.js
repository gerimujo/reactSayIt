import Component39 from "../components/Component39";
import "./Desktop9.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASHKOHU_REGISTER_FORM_ACTIVE } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const Desktop9 = () => {
  const naviagte = useNavigate();
  const dispatch = useDispatch();
  const registerFormActive = useSelector(
    (state) => state.activeFormsState.activeForm.bashkohuFormActive
  );
  return (
    <div className="desktop-9">
      <img
        onClick={() => naviagte("/")}
        className="image-298-icon2"
        alt=""
        src="/image-2981@2x.png"
      />
      <div className="kryefaqja-container">
        <div onClick={() => naviagte("/")} className="kryefaqja2">
          Kryefaqja
        </div>
        <div className="kryefaqja2">Rreth Nesh</div>
        <div onClick={() => naviagte("/njoftimet")} className="kryefaqja2">
          Njoftimet
        </div>
        <div onClick={() => naviagte("/blog")} className="kryefaqja2">
          Blog
        </div>
      </div>
      <div className="log-in-wrapper2">
        <div className="log-in4">Log in</div>
      </div>
      <div className="frame-parent40">
        <div className="frame-parent41">
          <div className="behu-pjese-e-organizates-tone-group">
            <div className="behu-pjese-e1">{`Behu pjese e organizates tone  `}</div>
            <div className="frame-parent42">
              <div className="mos-rri-por-thuje-parent">
                <div className="mos-rri-por1">Mos rri por thuje</div>
                <div className="jeni-gati-pr-container1">
                  <p className="jeni-gati-pr1">
                    Jeni gati për organizimin më të ri n’qytet? Je një i ri i
                    cili po kërkon një hapësirë të dedikuar vetëm ty? Dëshiron
                    të bëhesh pjesë e një grupi të rinjsh cool dhe të ndash me
                    ta eksperiencat dhe aspiratat e tua?
                  </p>
                  <p className="jeni-gati-pr1">
                    <span className="say-it-sht1">{` SAY IT është zyrtarisht këtu! `}</span>
                    <span>
                      Për të gjithë ju që dëshironi të jeni pjesë e
                      aktiviteteve, eventeve dhe organizimeve të ndryshme, ku ju
                      dhe miqtë tuaj do të jeni kryefjala e tyre mos nguroni të
                      plotësoni formularin e mëposhtëm. Aventura sapo ka nisur!
                    </span>
                  </p>
                  <p className="jeni-gati-pr1">&nbsp;</p>
                  <p className="jeni-gati-pr1">
                    Buckle up, sepse gjëra të mëdha po vinë!
                  </p>
                  <p className="jeni-gati-pr1">Mos rri por #thuje !</p>
                </div>
              </div>
              <img className="image-292-icon" alt="" src="/image-292@2x.png" />
            </div>
          </div>
          <div className="frame19">
            <div
              onClick={() => dispatch(BASHKOHU_REGISTER_FORM_ACTIVE())}
              className="rregjistrohu-container"
            >
              <div className="rregjistrohu1">Rregjistrohu</div>
            </div>
          </div>
        </div>
        <div className="frame-parent43">
          <div className="image-23-parent1">
            <img className="image-23-icon3" alt="" src="/image-235@2x.png" />
            <div className="frame-parent44">
              <div className="ellipse-parent15">
                <div className="frame-child37" />
                <img className="instagram-icon3" alt="" src="/instagram.svg" />
              </div>
              <div className="ellipse-parent15">
                <div className="frame-child37" />
                <img className="whatsapp-icon3" alt="" src="/whatsapp.svg" />
              </div>
              <div className="ellipse-parent15">
                <div className="frame-child37" />
                <img className="facebook-f-icon3" alt="" src="/facebookf.svg" />
              </div>
            </div>
          </div>
          <div className="frame-parent45">
            <div className="na-kontaktoni-group">
              <div className="na-kontaktoni1">Na kontaktoni</div>
              <div className="phone-alt-group">
                <img className="phone-alt-icon1" alt="" src="/phonealt.svg" />
                <a className="a1" href="tel:0685087006" target="_blank">
                  +355 68 50 87 006
                </a>
              </div>
              <div className="email-group">
                <img className="email-icon1" alt="" src="/email5@2x.png" />
                <div className="infoillyrianhomeal1">info@illyrianhome.al</div>
              </div>
            </div>
            <div className="menu-group">
              <div className="na-kontaktoni1">Menu</div>
              <div className="ellipse-parent18">
                <div className="frame-child40" />
                <div className="infoillyrianhomeal1">Rreth Nesh</div>
              </div>
              <div className="ellipse-parent18">
                <div className="frame-child40" />
                <div className="infoillyrianhomeal1">Njoftimet</div>
              </div>
              <div className="ellipse-parent18">
                <div className="frame-child40" />
                <div className="infoillyrianhomeal1">Blog</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="component-43-parent"
        style={{ display: registerFormActive == false ? "none" : "block" }}
      >
        <Component39
          component12="/component-122.svg"
          showDoEThemi={false}
          component39Width="66.9%"
          component39Height="42.75rem"
          component39Position="absolute"
          component39Top="33rem"
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

export default Desktop9;
