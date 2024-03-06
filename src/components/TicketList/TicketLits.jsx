import { useSelector } from "react-redux";
import { useState } from "react";
import Card from "../UI/Card";

const TicketList = () => {
  const ticketsData = useSelector((state) => state.data.items);
  const [scrollTop, setScrollTop] = useState(0);
  const itemHeight = 80; // Define or import itemHeight
  const containerHeight = 500; // Define or fetch containerHeight
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    startIndex + Math.ceil(containerHeight / itemHeight),
    ticketsData.length
  );
  const visibleItems = ticketsData.slice(startIndex, endIndex);
  const invisibleItemsHeight =
    (startIndex + visibleItems.length - endIndex) * itemHeight;

  const handleScroll = (event) => {
    setScrollTop(event.target.scrollTop);
  };

  return (
    <div
      style={{ height: `${containerHeight}px`, overflowY: "scroll" }}
      onScroll={handleScroll}
    >
      <div style={{ height: `${ticketsData.length * itemHeight}px` }}>
        <div
          style={{
            position: "relative",
            height: `${visibleItems.length * itemHeight}px`,
            top: `${startIndex * itemHeight}px`,
          }}
        >
          {visibleItems.map((item) => (
            <div key={item.id} style={{ height: `${itemHeight}px` }}>
              <Card {...item} />
            </div>
          ))}
        </div>
        <div style={{ height: `${invisibleItemsHeight}px` }} />
      </div>
    </div>
  );
};

export default TicketList;
