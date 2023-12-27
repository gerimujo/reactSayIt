import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop5 from "./pages/Desktop5";
import Desktop41 from "./pages/Desktop41";
import Desktop40 from "./pages/Desktop40";
import IPhone1415ProMax21 from "./pages/IPhone1415ProMax21";
import IPhone1415ProMax20 from "./pages/IPhone1415ProMax20";
import Desktop27 from "./pages/Desktop27";
import Desktop26 from "./pages/Desktop26";
import Desktop24 from "./pages/Desktop24";
import Desktop11 from "./pages/Desktop11";
import IPhone1415ProMax5 from "./pages/IPhone1415ProMax5";
import Desktop9 from "./pages/Desktop9";
import Desktop12 from "./pages/Desktop12";
import IPhone1415ProMax4 from "./pages/IPhone1415ProMax4";
import IPhone1415ProMax3 from "./pages/IPhone1415ProMax3";
import IPhone1415ProMax2 from "./pages/IPhone1415ProMax2";
import Desktop8 from "./pages/Desktop8";
import Desktop7 from "./pages/Desktop7";
import Desktop6 from "./pages/Desktop6";
import { Provider } from "react-redux";
import store from "./redux/store";
import PrivateRoute from "./pages/PrivateRoute";
import { Helmet } from "react-helmet";
import DesktopPjestar from "./pages/DesktopPjestar";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    // Function to update the window width
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener to update window width on resize
    window.addEventListener("resize", updateWindowWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);
  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2aXNpdG9yIiwiZXhwIjo5MjIzMzcyMDM2ODU0Nzc1LCJpYXQiOjE3MDEyOTkzNjh9.rFvEOW3zkwomyjJizc557VfpROryCOMnZOUiiGCkRN33-KZnJeXj5_yN2PzMqJrbgCOPMu0uAauZVPEapjMvGw"
  );
  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-41":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-40":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-max-21":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-max-20":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-27":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-26":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-24":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-11":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-max-5":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-9":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-12":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-max-4":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-max-3":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-max-2":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-8":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-7":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-6":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Provider store={store}>
      <Routes>
        <Route
          path="/"
          element={windowWidth < 1000 ? <IPhone1415ProMax20 /> : <Desktop5 />}
        />
        <Route
          path="/njoftimet/:page"
          element={windowWidth < 1000 ? <IPhone1415ProMax2 /> : <Desktop6 />}
        />
        <Route
          path="/blog/:page"
          element={windowWidth < 1000 ? <IPhone1415ProMax3 /> : <Desktop7 />}
        />
        <Route
          path="/login"
          element={windowWidth < 1000 ? <IPhone1415ProMax21 /> : <Desktop11 />}
        />
        <Route
          path="/bashkohu"
          element={windowWidth < 1000 ? <IPhone1415ProMax5 /> : <Desktop9 />}
        />
        <Route
          path="/post/:page"
          element={windowWidth < 1000 ? <IPhone1415ProMax4 /> : <Desktop8 />}
        />
        <Route path="/*" element={<h1>404 Error, not found!</h1>} />
        <Route
          path="/njoftimetadmin/:page"
          element={
            <PrivateRoute>
              <Desktop12 />
            </PrivateRoute>
          }
        />
        <Route
          path="/postimetadmin/:page"
          element={
            <PrivateRoute>
              <Desktop24 />
            </PrivateRoute>
          }
        />
        <Route
          path="/antaretadmin"
          element={
            <PrivateRoute>
              <Desktop26 />
            </PrivateRoute>
          }
        />
        <Route
          path="/pjesmarresnjoftim/:page"
          element={
            <PrivateRoute>
              <DesktopPjestar />
            </PrivateRoute>
          }
        />

        <Route path="/desktop-41" element={<Desktop41 />} />
        <Route path="/desktop-40" element={<Desktop40 />} />
        <Route
          path="/iphone-14-15-pro-max-21"
          element={<IPhone1415ProMax21 />}
        />
        <Route
          path="/iphone-14-15-pro-max-20"
          element={<IPhone1415ProMax20 />}
        />
        <Route path="/desktop-27" element={<Desktop27 />} />
        <Route path="/desktop-26" element={<Desktop26 />} />
        <Route path="/desktop-24" element={<Desktop24 />} />
        <Route path="/desktop-11" element={<Desktop11 />} />
        <Route path="/iphone-14-15-pro-max-5" element={<IPhone1415ProMax5 />} />
        <Route path="/desktop-9" element={<Desktop9 />} />
        <Route path="/desktop-12" element={<Desktop12 />} />
        <Route path="/iphone-14-15-pro-max-4" element={<IPhone1415ProMax4 />} />
        <Route path="/iphone-14-15-pro-max-3" element={<IPhone1415ProMax3 />} />
        <Route path="/iphone-14-15-pro-max-2" element={<IPhone1415ProMax2 />} />

        <Route path="/desktop-7" element={<Desktop7 />} />
        <Route path="/desktop-6" element={<Desktop6 />} />
      </Routes>
    </Provider>
  );
}
export default App;
