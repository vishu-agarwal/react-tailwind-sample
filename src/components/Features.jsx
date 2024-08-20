import React from "react";
import Cards from "./Cards";

const data = [
  {no:1, heading:"Job Posting", text:"Get your job in front of the most qualified candidates."},
  {no:2, heading:"Resume Search", text:"Find the right people faster with Indeed Resume."},
  {no:3, heading:"Candidate Management", text:"Keep track of your candidates and manage your hiring process."},
]

const Features = () => {
  return (
    <div className="bg-white py-12 px-3">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {
          data.map(item=><Cards data={item} />)
        }
      </div>
    </div>
  );
};

export default Features;
