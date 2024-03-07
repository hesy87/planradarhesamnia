import { useState } from "react";
import Card from "../components/UI/Card";


export default function VirtualizedList({ items, itemHeight, containerHeight }) {
  const [scrollTop, setScrollTop] = useState(0);

  const startIndex = Math.floor(scrollTop / itemHeight); //index of first visible item
  const endIndex = Math.min(
    //index of last visible item
    startIndex + Math.ceil(containerHeight / itemHeight),
    items.length
  );
  const visibleItems = items.slice(startIndex, endIndex); //extract only the visible items from the items array

  // subtracting the height of the visible items from the height of the container
  const invisibleItemsHeight =
    (startIndex + visibleItems.length - endIndex) * itemHeight;
  
  // update the scrollTop state whenever the user scrolls.
  const handleScroll = (event) => {
    setScrollTop(event.target.scrollTop);
  };
  return (
    // rendered the visible items as div elements with a height of itemHeight
    <div
      style={{ height: `${containerHeight}px`, overflowY: "scroll" }}
      onScroll={handleScroll}
    >
      <div style={{ height: `${items.length * itemHeight}px` }}>
        <div
          style={{
            position: "relative",
            height: `${visibleItems.length * itemHeight}px`,
            top: `${startIndex * itemHeight}px`,
          }}
        >
          {/* arrays of items represent in DOM */}
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
}
