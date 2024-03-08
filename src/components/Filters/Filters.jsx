import { newTicketFilter } from "../../store/dataSlice";
import Button from "../UI/Button";
import Radial from "../UI/Radial";
import { useDispatch, useSelector } from "react-redux";

const Filters = () => {

  //get newTickets state to show numbers of new tasks in radial component
  const newTickets = useSelector((state) => state.data.newTickets);
  const dispatch = useDispatch();

  //execute ticket filter reducer
  const onClickHandler = () => {
    dispatch(newTicketFilter());
  };

  return (
    <div className="flex items-center justify-center">
      <Button
        color={"btn-accent md:w-1/12"}
        text={"Filter New Tickets"}
        onClick={onClickHandler}
      />
      <Radial
        color={"#02A896"}
        tasks={newTickets !== undefined ? newTickets.length : "0"}
      />
    </div>
  );
}

export default Filters