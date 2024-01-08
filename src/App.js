import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import React from "react";
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

  const LazyIPhone1415ProMax20 = React.lazy(() =>
    import("./pages/IPhone1415ProMax20")
  );
  const LazyDesktop5 = React.lazy(() => import("./pages/Desktop5"));

  const LazyIPhone1415ProMax2 = React.lazy(() =>
    import("./pages/IPhone1415ProMax2")
  );
  const LazyDesktop6 = React.lazy(() => import("./pages/Desktop6"));

  const LazyIPhone1415ProMax3 = React.lazy(() =>
    import("./pages/IPhone1415ProMax3")
  );
  const LazyDesktop7 = React.lazy(() => import("./pages/Desktop7"));

  const LazyIPhone1415ProMax21 = React.lazy(() =>
    import("./pages/IPhone1415ProMax21")
  );
  const LazyDesktop11 = React.lazy(() => import("./pages/Desktop11"));

  const LazyIPhone1415ProMax5 = React.lazy(() =>
    import("./pages/IPhone1415ProMax5")
  );
  const LazyDesktop9 = React.lazy(() => import("./pages/Desktop9"));

  const LazyIPhone1415ProMax4 = React.lazy(() =>
    import("./pages/IPhone1415ProMax4")
  );
  const LazyDesktop8 = React.lazy(() => import("./pages/Desktop8"));
  const LazyDesktop12 = React.lazy(() => import("./pages/Desktop12"));
  const LazyDesktop24 = React.lazy(() => import("./pages/Desktop24"));
  const LazyDesktop26 = React.lazy(() => import("./pages/Desktop26"));

  const LazyDesktopPjestar = React.lazy(() => import("./pages/DesktopPjestar"));

  return (
    <Provider store={store}>
      <Routes>
        <Route
          path="/"
          element={windowWidth < 1000 ? <IPhone1415ProMax20 /> : <Desktop5 />}
        />
        <Route
          path="/njoftimet/:page"
          element={
            <React.Suspense fallback="...Loading">
              {windowWidth < 1000 ? (
                <LazyIPhone1415ProMax2 />
              ) : (
                <LazyDesktop6 />
              )}{" "}
            </React.Suspense>
          }
        />
        <Route
          path="/blog/:page"
          element={
            <React.Suspense fallback="...Loading">
              {windowWidth < 1000 ? (
                <LazyIPhone1415ProMax3 />
              ) : (
                <LazyDesktop7 />
              )}{" "}
            </React.Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <React.Suspense fallback="...Loading">
              {windowWidth < 1000 ? (
                <LazyIPhone1415ProMax21 />
              ) : (
                <LazyDesktop11 />
              )}{" "}
            </React.Suspense>
          }
        />
        <Route
          path="/bashkohu"
          element={
            <React.Suspense fallback="...Loading">
              {windowWidth < 1000 ? (
                <LazyIPhone1415ProMax5 />
              ) : (
                <LazyDesktop9 />
              )}{" "}
            </React.Suspense>
          }
        />
        <Route
          path="/post/:page"
          element={
            <React.Suspense fallback="...Loading">
              {windowWidth < 1000 ? (
                <LazyIPhone1415ProMax4 />
              ) : (
                <LazyDesktop8 />
              )}{" "}
            </React.Suspense>
          }
        />
        <Route path="/*" element={<h1>404 Error, not found!</h1>} />
        <Route path="/test" element={<h1>Test</h1>} />
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
      </Routes>
    </Provider>
  );
}
export default App;
