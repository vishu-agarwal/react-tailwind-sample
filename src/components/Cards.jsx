import React from "react";

const Cards = ({ data }) => {
  return (
    <div className="p-10 border grid gap-6 rounded-3xl">
      <h1 className="text-blue-700 font-bold text-2xl">{data.no}</h1>
      <h2 className="font-bold mb-2 text-3xl ">{data.heading}</h2>
      <h4 className="text-xl">{data.text}</h4>
    </div>
  );
};

export default Cards;
