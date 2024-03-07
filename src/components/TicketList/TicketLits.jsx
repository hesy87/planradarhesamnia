import { useSelector } from "react-redux";
import VirtualizedList from "../../virtualization/virtualize";
import { useEffect, useState } from "react";

const TicketList = () => {
  const ticketsData = useSelector((state) => state.data.items);
  const [width, setWidth] = useState(window.innerWidth);
  const [itemHeight, setItemHeight] = useState();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      if (window.innerWidth <= 800) {
        setItemHeight(200); // Define itemHeight
      } else {
        setItemHeight(80);
      }
    };

    handleResize(); 

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const containerHeight = 500; // Define or fetch containerHeight

  return (
    <div>
      <VirtualizedList
        items={ticketsData}
        itemHeight={itemHeight}
        containerHeight={containerHeight}
      />
    </div>
  );
};

export default TicketList;
