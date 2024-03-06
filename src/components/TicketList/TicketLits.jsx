import { useSelector } from "react-redux";
import './tableList.scss'
import Card from "../UI/Card";
// import Virtualize from "../../virualize/Virtualize";

const TicketLits = () => {
    const ticketsData = useSelector((state) => state.data.items);
    console.log(ticketsData);
  return (
    <div className="container">
      {/* create Data table */}
      <div className="innerContainer">
        {ticketsData.map((items) => <Card key={items.id} {...items} />)}
      </div>
      {/* <div className="innerContainer">
        <Virtualize
          ticketsData={ticketsData}
          component={Table}
          gap={4}
        />
      </div> */}
    </div>
  );
};

export default TicketLits;
