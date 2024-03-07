import { Link } from "react-router-dom";
import styles from "./pageNotFound.module.scss";

const PageNotFound = () => {
  return (
    <div className={`${styles.bgColor} h-svh flex justify-center items-center flex-col`}>
          <h1 className="text-center text-2xl font-bold">This page not found</h1>
      <Link to={"/dashboard"} className="btn btn-primary mt-5">Back to dashboard</Link>
    </div>
  )
};

export default PageNotFound;
