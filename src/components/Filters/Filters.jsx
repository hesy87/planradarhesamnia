import { newTicketFilter } from "../../store/dataSlice";
import Button from "../UI/Button";
import Radial from "../UI/Radial";
import { useDispatch, useSelector } from "react-redux";

const Filters = () => {
    const newTickets = useSelector((state) => state.data.newTickets);
    const dispatch = useDispatch();

    const onClickHandler = () => {
        dispatch(newTicketFilter())
    }
    
    console.log(newTickets);
  return (
    <div className="flex items-center justify-center">
      <Button
        color={"btn-accent md:w-1/12"}
        text={"Filter New Tasks"}
        onClick={onClickHandler}
      />
      <Radial color={"#02A896"} tasks={newTickets !== undefined ? newTickets.length : '0'} />
    </div>
  );
}

export default Filters