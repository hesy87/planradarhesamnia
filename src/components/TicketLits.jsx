import { useSelector } from "react-redux";

const TicketLits = () => {
    const ticketData = useSelector((state) => state.data.items);
    console.log(ticketData);
  return <div>TicketLits</div>;
};

export default TicketLits;
