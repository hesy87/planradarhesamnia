import { useNavigate } from "react-router-dom";
import map from "../../assets/map.jpg";
import styles from  "./landingPage.module.scss";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className={`${styles.bgColor} h-screen flex justify-center content-center`}>
      <div className="flex-col flex p-3 border-2 bg-white rounded-3xl borderColor py-10 px-10 h-1/2 mt-20">
        <h1 className="text-center text-2xl">
          Welcome To PlanRadar SaaS application
        </h1>
        <h5 className="text-center">Login to continue</h5>
        <img src={map} alt="map" width={250} className="m-auto" />
        <button
          className={styles.customButton}
          onClick={() => navigate("/dashboard")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
