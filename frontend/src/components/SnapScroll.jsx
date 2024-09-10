import { useState, useRef, useCallback, useEffect } from "react";
import { FixedSizeList as List } from "react-window";
import VideoItem from "./VideoItem.jsx";

const SnapScroll = ({ onLastVideo, videos }) => {
  const listRef = useRef();
  const [isLastVideoVisible, setIsLastVideoVisible] = useState(false);
  const itemCount = videos.length;
  const itemSize = 650; // height of each video item
  const width = 900; // width of each video item
  const handleScroll = useCallback(() => {
    if (!listRef.current) return;
    const { scrollTop, clientHeight } = listRef.current._outerRef;
    const lastItemOffset = itemSize * (itemCount - 1);
    const maxScrollTop = lastItemOffset - clientHeight;
    if (scrollTop >= maxScrollTop) {
      setIsLastVideoVisible(true);
    } else {
      setIsLastVideoVisible(false);
    }
  }, [itemCount, itemSize]);
  useEffect(() => {
    const ref = listRef.current;
    if (ref) {
      ref._outerRef.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (ref) {
        ref._outerRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);
  useEffect(() => {
    if (isLastVideoVisible) {
      onLastVideo();
    }
  }, [isLastVideoVisible, onLastVideo]);
  return (
    <div>
      <List
        ref={listRef}
        height={itemSize}
        itemCount={itemCount}
        itemSize={itemSize}
        width={width}
        style={{
          scrollSnapType: "y mandatory",
          overflowY: "scroll",
          scrollbarWidth: "none",
        }}
      >
        {({ index, style }) => (
          <div
            style={{
              ...style,
              scrollSnapAlign: "start",
              scrollSnapStop: "always",
            }}
          >
            <VideoItem
              index={index}
              style={{ width, height: itemSize }}
              video={videos[index]}
            />
          </div>
        )}
      </List>
      {isLastVideoVisible && <div>Last video is visible</div>}
    </div>
  );
};
export default SnapScroll;
