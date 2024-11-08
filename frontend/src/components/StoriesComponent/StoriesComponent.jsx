import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import "./StoriesComponent.css";
import Story from "../Story/Story";

let stories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; // to simulate stores

export default function StoriesComponent() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: false,
    align: "start",
  });
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {stories.map((story, index) => (
          <div className="embla__slide" key={index}>
            <Story key={index} storyId={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
