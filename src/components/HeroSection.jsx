import React from "react";

const HeroSection = () => {
  return (
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4">
        <div className="grid gap-10 text-center md:text-left md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's hire your next great candidate. Fast.
          </h2>
          <div className="content-center">
            <button className="bg-blue-600 text-white py-2 px-4 rounded w-52">
              Post A Free Job*
            </button>
          </div>
          <a href="#" className="mt-10">
            *Terms, conditions, quality standards and usage limits apply.
          </a>
        </div>
        <div className="p-5 md:w-1/2 mb-8 md:mb-0">
          <img
            src={"./hero.gif"}
            alt="Hero"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
      </div>
  );
};

export default HeroSection;
