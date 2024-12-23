import React from "react";
import Header from "./components/header";
import Reviews from "./components/reviews";

const LinesOfApp = () => {
  return (
    <div className="p-10 relative bg-gray-700">
      {/* Header */}
      <Header />
      {/* Testimonials  */}
      <Reviews />
    </div>
  );
};

export default LinesOfApp;
