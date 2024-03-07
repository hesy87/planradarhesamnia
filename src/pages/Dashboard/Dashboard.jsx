import Filters from "../../components/Filters/Filters.jsx";
import TicketLits from "../../components/TicketList/TicketLits";
import Navbar from  "../../components/UI/Navbar.jsx"

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Filters/>
      <TicketLits />
    </>
  )
}

export default Dashboard