
const Radial = ({ color, tasks }) => {
  return (
    <div
      className={`radial-progress text-[${color}] text-xl my-5`}
      style={{ "--value": `${tasks}` }}
      role="progressbar"
    >
      {tasks}
    </div>
  );
}

export default Radial