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
          "http://sayit7-env.eba-fcef4qft.eu-west-2.elasticbeanstalk.com/api/test/verifyrole",
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
