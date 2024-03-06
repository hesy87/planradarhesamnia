import { useSelector } from "react-redux";
import Table from "./UI/Table";

const TicketLits = () => {
    const ticketsData = useSelector((state) => state.data.items);
    console.log(ticketsData);
  return (
    <div>
      <Table ticketsData={ticketsData} />
    </div>
  );
};

export default TicketLits;
