import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from "gsap";

export default class AutoPlay extends Component {
  constructor(props) {
    super(props);
    this.headingRef = React.createRef();
  }

  componentDidMount() {
    const headingElement = this.headingRef.current;
    if (headingElement) {
      const observer = new IntersectionObserver(this.handleScroll, {
        threshold: 0.5,
      });

      observer.observe(headingElement);

      return () => {
        observer.disconnect();
      };
    }
  }

  handleScroll = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.fromTo(
          this.headingRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1.7, ease: "power3.out" }
        );
      }
    });
  };

  render() {
    
    const imageData = [
      { imagePath: "/StartUpLogos/Babtra.png", link: "https://baabtra.com/" },
      {
        imagePath: "/StartUpLogos/Drivezy.png",
        link: "https://drivezyclone1.netlify.app/",
      },
      {
        imagePath: "/StartUpLogos/EveryCrave.png",
        link: "http://www.everycrave.me/",
      },
      {
        imagePath: "/StartUpLogos/Kratikal.png",
        link: "https://kratikal.com/",
      },
      { imagePath: "/StartUpLogos/Loco.png", link: "https://loco.gg/" },
      {
        imagePath: "/StartUpLogos/Pvr.png",
        link: "https://www.pvrcinemas.com/nowshowing#!",
      },
      {
        imagePath: "/StartUpLogos/Symb.png",
        link: "https://www.symbtechnologies.com/",
      },
      {
        imagePath: "/StartUpLogos/Trelos.png",
        link: "https://www.zaubacorp.com/company/TRELOS-IT-SOLUTIONS-OPC-PRIVATE-LIMITED/U72200HR2018OPC074393",
      },
      {
        imagePath: "/StartUpLogos/Unacademy.png",
        link: "https://unacademy.com/",
      },
    ];

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2020,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };

    return (
      <div className="w-[100%] mx-auto h-[200px] bg-gradient-to-r from-gray-900 to-gray-800 lg:h-[540px] md:h-[350px]   md:pt-0 flex flex-col justify-center items-center space-y-4 lg:space-y-10 md:space-y-10 ">
        <div className="mt-0 ">
          <h2
            ref={this.headingRef}
            className="mx-auto lg:text-5xl md:text-3xl font-bold opacity-0 mt-0 text-white"
          >
            STARTUPS FROM Slrtce
          </h2>
        </div>
        <div className="carousel-container  bg-gray-900 border rounded-lg h-[100px]  lg:h-[60%] w-[95%] mx-auto  flex flex-col ">
          <Slider
            {...settings}
            className="w-[90%] mx-auto my-auto  bg-gray-900"
          >
            {imageData.map((data, index) => (
              <div
                key={index}
                className=" h:[50px] mb- md:h-[185px] md:lg:h-[230px] slide  bg-gray-900"
              >
                <a
                  key={index}
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={process.env.PUBLIC_URL + data.imagePath}
                    alt={`Slide ${index + 1}`}
                    className="h-[50px] w-[50px]  lg:mt-3 md:mt-3 md:h-[150px] md:w-[150px] lg:h-[200px] lg:w-[200px] mx-auto  rounded-full transition-transform transform hover:scale-110 hover:cursor-pointer"
                  />
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
