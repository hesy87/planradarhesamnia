
const Badge = ({ status, color }) => {
  return <div className={`badge ${color}`}>{status}</div>;
};

export default Badge;
