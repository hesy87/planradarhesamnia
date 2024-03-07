import { useSelector } from "react-redux";
import VirtualizedList from "../../virtualization/virtualize";
import { useEffect, useState } from "react";

const TicketList = () => {
  const ticketsData = useSelector((state) => state.data.items);
  const [itemHeight, setItemHeight] = useState();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setItemHeight(200); // Define Height for mobile and tablet screen size
      } else {
        setItemHeight(80); // Define Height for Desktop screen size
      }
    };

    handleResize(); 
    // evet listener to find out the size of the screen to handle responsive designe
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const containerHeight = 500; // Define Height of the container of virtual list

  // past array of data and sizes to virtualition
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
