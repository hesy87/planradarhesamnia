import Badge from "./Badge";
import Button from "./Button";

const Card = ({...items}) => {
  return (
    <div className="border-2 w-100 bg-base-100 shadow-sm rounded-2xl flex flex-row justify-around py-3 mt-1">
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
      <div>
        <label>Descriptopn</label>
        <p>{items.description}</p>
      </div>
      <div>
        <Button text={"Delete"} color={"btn-error"} />
        <Button text={"Edit"} color={"btn-success"} />
      </div>
    </div>
  );
}

export default Card