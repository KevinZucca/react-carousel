import "./App.scss";
import journeys from "../journeys.json";
import Carousel from "./components/Carousel";
import { useEffect, useState } from "react";

function App() {
  const [activeIndex, setIndex] = useState(0);

  function handlePrev() {
    setIndex((currentIndex) => {
      if (currentIndex <= 0) {
        return journeys.length - 1;
      } else {
        return currentIndex - 1;
      }
    });
  }

  function handleNext() {
    setIndex((currentIndex) => {
      if (currentIndex == journeys.length - 1) {
        return 0;
      } else {
        return currentIndex + 1;
      }
    });
  }

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      handlePrev();
    } else if (event.key === "ArrowRight") {
      handleNext();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      {journeys.map((journey, i) => (
        <Carousel
          key={i}
          data={journey}
          index={i}
          className={i === activeIndex ? "block" : "hidden"}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      ))}
    </>
  );
}

export default App;
