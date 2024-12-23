import React, { useState, useEffect,useRef } from "react";
import College from "../assests/icons/college.svg";
import Participants from "../assests/icons/participants.svg";
import Startups from "../assests/icons/startups.svg";
import speaker from "../assests/icons/speaker.svg";
const AnimatedNumber = ({ start, end, duration = 2000 }) => {
  const [currentNumber, setCurrentNumber] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const numberRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          const startTime = performance.now();

          const updateNumber = (timestamp) => {
            const progress = (timestamp - startTime) / duration;

            if (progress < 1) {
              setCurrentNumber(Math.floor(start + progress * (end - start)));
              requestAnimationFrame(updateNumber);
            } else {
              setCurrentNumber(end);
              setHasAnimated(true);
            }
          };

          requestAnimationFrame(updateNumber);
        }
      },
      { threshold: 0.5 }
    );

    if (numberRef.current) {
      observer.observe(numberRef.current);
    }

    return () => {
      if (numberRef.current) {
        observer.unobserve(numberRef.current);
      }
    };
  }, [start, end, duration, hasAnimated]);

  return (
    <div className="m-auto font-bold" style={{ fontSize: "2em" }} ref={numberRef}>
      {currentNumber}+
    </div>
  );
};


export const Numbers=()=> {
  return (
    <div id="numbers" className="bg-gray-300 flex w-full md:h-[60vh] p-[4%]" id="stats">
      <div className="flex w-full flex-col md:flex-row bg-pink-100 rounded-3xl">
        {/* College Section */}
        <div className="flex flex-col m-auto h-[60%]">
          <img
            className="m-auto h-[60%] transform transition-transform hover:scale-110"  
            src={College}
            alt="Description"
            loading="lazy"
          />
          <AnimatedNumber start={1} end={80} />
          <p className="m-auto text-2xl">Colleges</p>
        </div>

        {/* Participants Section */}
        <div className="flex flex-col m-auto h-[60%]">
          <img
            className="m-auto h-[60%] transform transition-transform hover:scale-110"  // Apply Tailwind classes for the zoom effect
            src={Participants}
            alt="Description"
            loading="lazy"
          />
          <AnimatedNumber start={1} end={1500} />
          <p className="m-auto text-2xl">Participants</p>
        </div>

        {/* Startups Section */}
        <div className="flex flex-col m-auto h-[60%]">
          <img
            className="m-auto h-[60%] transform transition-transform hover:scale-110"  // Apply Tailwind classes for the zoom effect
            src={Startups}
            alt="Description"
            loading="lazy"
          />
          <AnimatedNumber start={1} end={120} />
          <p className="m-auto text-2xl">Startups</p>
        </div>

        {/* Speakers Section */}
        <div className="flex flex-col m-auto h-[60%]">
          <img
            className="m-auto h-[60%] transform transition-transform hover:scale-110"  // Apply Tailwind classes for the zoom effect
            src={speaker}
            alt="Description"
            loading="lazy"
          />
          <AnimatedNumber start={1} end={40} />
          <p className="m-auto text-2xl">Speakers</p>
        </div>
      </div>
    </div>
  );
}

