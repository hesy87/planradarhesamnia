import Badge from "./Badge";
import Button from "./Button";

const Table = ({ ticketsData }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-xl">
            <th>Subject</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {ticketsData.map((item) => (
            <tr
              key={item.id}
              className={`
                ${
                  item.priority === 1
                    ? "bg-red-400"
                    : item.priority === 2
                    ? "bg-yellow-200"
                    : "bg-blue-300"
                }
               text-lg`}
            >
              <td>{item.subject}</td>
              <td>{item.priority}</td>
              <td>
                <Badge
                  status={item.status}
                  color={
                    item.status === "new"
                      ? "badge-accent"
                      : item.status === "active"
                      ? "badge-secondary"
                      : "badge-primary"
                  }
                />
              </td>
              <td>{item.description}</td>
              <td>
                      <Button text={"Delete"} color={'btn-error' } />
                <Button text={"Edit"} color={"btn-success"} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
