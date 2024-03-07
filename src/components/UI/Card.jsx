import { deleteTicket } from "../../store/dataSlice";
import Badge from "./Badge";
import Button from "./Button";
import { useDispatch } from "react-redux";

const Card = ({ ...items }) => {
  const dispatch = useDispatch();

  const onDelete = (itemId) => {
    dispatch(deleteTicket(itemId));
  }
  
  return (
    <div className="border-2 h-full w-100 bg-base-100 shadow-sm rounded-2xl flex flex-col items-center md:flex-row p-3 mt-1">
      <div className="flex flex-row justify-between md:w-3/4">
        <div>
          <label className="pb-1">Subject</label>
          <p>{items.subject}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <label className="pb-1">Status</label>
          <Badge
            status={items.status}
            color={
              items.status === "new"
                ? "badge-accent"
                : items.status === "active"
                ? "badge-secondary"
                : "badge-primary"
            }
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <label className="pb-1">Priority</label>
          <Badge
            status={items.priority}
            color={
              items.priority === 1
                ? "bg-red-400 px-3"
                : items.priority === 2
                ? "bg-yellow-200 px-3"
                : "bg-blue-300 px-3"
            }
          />
        </div>
        <div className="invisible md:visible">
          <label>Descriptopn</label>
          <p>{items.description}</p>
        </div>
      </div>
      <div className="flex justify-end md:w-1/4">
        <Button text={"Delete"} color={"btn-error"} onClick={()=>onDelete(items.id)} />
        <Button text={"Edit"} color={"btn-success"} />
      </div>
    </div>
  );
}

export default Card