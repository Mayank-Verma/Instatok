import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import "./StoriesComponent.css";
import Story from "../Story/Story";

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
        <div className="embla__slide">
          <Story />
        </div>
        <div className="embla__slide">
          <Story />
        </div>
        <div className="embla__slide">
          <Story />
        </div>
        <div className="embla__slide">
          <Story />
        </div>
        <div className="embla__slide">
          <Story />
        </div>
        <div className="embla__slide">
          <Story />
        </div>
        <div className="embla__slide">
          <Story />
        </div>
        <div className="embla__slide">
          <Story />
        </div>
        <div className="embla__slide">
          <Story />
        </div>
        <div className="embla__slide">
          <Story />
        </div>
        <div className="embla__slide">
          <Story />
        </div>
        <div className="embla__slide">
          <Story />
        </div>
      </div>
    </div>
  );
}
