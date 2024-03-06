import TicketLits from "../../components/TicketLits";
import style from "./dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={`${style.bgColor} h-svh`}><TicketLits/></div>
  )
}

export default Dashboard