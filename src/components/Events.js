import React, { useState, useEffect, useRef } from "react";
import Img1 from "../assests/img/1.jpg";
import Img2 from "../assests/img/2.jpg";
import Img3 from "../assests/img/3.jpg";
import Img4 from "../assests/img/4.jpg";
import Img5 from "../assests/img/5.jpg";
import Img6 from "../assests/img/6.jpg";
import cross from "../assests/icons/cross.svg";
import front from "../assests/icons/front.svg";
import back from "../assests/icons/back.svg";

export const Events = () => {
  const staticHoverTexts = [
    "Event 1 Description",
    "Event 2 Description",
    "Event 3 Description",
    "Event 4 Description",
    "Event 5 Description",
    "Event 6 Description",
  ];
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef();
  const [columnStyles, setColumnStyles] = useState({});
  const [model, setModel] = useState(false);
  const [tempingSrc, setTempingSrc] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
          observer.disconnect(); // Disconnect the observer once the section is visible
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const columnStylesSm = {
      WebkitColumnCount: 1,
      MozColumnCount: 1,
      columnCount: 1,
      WebkitColumnWidth: "100%",
      MozColumnWidth: "100%",
      columnWidth: "100%",
    };

    const columnStylesMd = {
      WebkitColumnCount: 2,
      MozColumnCount: 2,
      columnCount: 2,
      WebkitColumnWidth: "50%",
      MozColumnWidth: "50%",
      columnWidth: "50%",
    };

    const columnStylesLg = {
      WebkitColumnCount: 3,
      MozColumnCount: 3,
      columnCount: 3,
      WebkitColumnWidth: "33%",
      MozColumnWidth: "33%",
      columnWidth: "33%",
    };

    const screenWidth = window.innerWidth;
    if (screenWidth < 540) {
      setColumnStyles(columnStylesSm);
    } else if (screenWidth < 950) {
      setColumnStyles(columnStylesMd);
    } else {
      setColumnStyles(columnStylesLg);
    }

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 540) {
        setColumnStyles(columnStylesSm);
      } else if (screenWidth < 950) {
        setColumnStyles(columnStylesMd);
      } else {
        setColumnStyles(columnStylesLg);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openModel = (imgSrc, index) => {
    setTempingSrc(imgSrc);
    setCurrentIndex(index);
    setModel(true);
  };

  const closeModel = () => {
    setModel(false);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % 6;
    setTempingSrc([Img1, Img2, Img3, Img4, Img5, Img6][nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + 6) % 6;
    setTempingSrc([Img1, Img2, Img3, Img4, Img5, Img6][prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <div id="events" className="bg-gradient-to-t from-white to-gray-300">
      {model && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-[999]">
          <button
            className="absolute top-2 right-2 text-white text-xl"
            onClick={closeModel}
          >
            <img className="w-6 h-6" src={cross} alt="cross" />
          </button>
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-xl"
            onClick={prevImage}
          >
            <img className="w-10 h-10" src={back} alt="back" />
          </button>
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-xl"
            onClick={nextImage}
          >
            <img className="w-10 h-10" src={front} alt="front" />
          </button>
          <img
            className="w-auto max-w-[90%] h-auto max-h-[90%] transform opacity-100"
            src={tempingSrc}
            alt="Model"
          />
        </div>
      )}

      <h1 className="text-center font-bold text-[30px] md:text-[50px] lg:text-[80px]">
        EVENTS AT E-CELL
      </h1>
      <div
        ref={sectionRef}
        className={`px-0 m-4 mt-0 py-4 ${
          isSectionVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16"
        } transition-all duration-1000 ease-in-out`}
        style={columnStyles}
      >
        {[Img1, Img2, Img3, Img4, Img5, Img6].map((imgSrc, index) => (
          <div
            key={index}
            className="relative cursor-pointer transform scale-100 hover:scale-105 transition-transform mb-4 duration-350 ease-in group overflow-hidden"
            onClick={() => openModel(imgSrc, index)}
          >
            <img src={imgSrc} className="w-full" alt={`Event ${index + 1}`} />
            <div className="w-full h-[100%] text-white bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center overflow-hidden flex items-center justify-center">
              <div className="opacity-0 py-auto group-hover:opacity-100 transition-opacity duration-300">
                {staticHoverTexts[index]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
