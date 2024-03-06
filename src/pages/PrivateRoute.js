import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = localStorage.getItem("token1");

        if (!token) {
          navigate("/login");
          return;
        }

        const response = await fetch(
          "http://localhost:8080/api/test/verifyrole",

          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
            method: "GET",
          }
        );
      } catch (error) {
        console.log("error 3");
        navigate("/login");
      }
    };

    checkToken();
  }, [navigate]);

  return <div>{children}</div>;
};

export default PrivateRoute;
