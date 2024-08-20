import React from "react";

const data = [
  {
    image:
      "https://d34k7i5akwhqbd.cloudfront.net/allspark/static/images/visibility-aurora-01633a.svg",
    heading: "Get more visibility",
    strongText: "Sponsor your job",
    text: " to ensure it gets seen by the right people.",
  },
  {
    image:
      "https://d34k7i5akwhqbd.cloudfront.net/allspark/static/images/quality-aurora-6ce509.svg",
    heading: "Find quality applicants",
    strongText: "",
    text: "List your required skills for the job so relevant candidates apply.",
  },
  {
    image:
      "https://d34k7i5akwhqbd.cloudfront.net/allspark/static/images/find-aurora-785c22.svg",
    heading: "Verify their abilities",
    strongText: "",
    text: "Add screener questions and assessments to test applicants’ skills.",
  },
  {
    image:
      "https://d34k7i5akwhqbd.cloudfront.net/allspark/static/images/organize-aurora-dd7191.svg",
    heading: "Organise your candidates",
    strongText: "",
    text: "View and sort CVs, send messages and schedule interviews – all on Indeed.",
  },
];

const CenterCards = () => {
  return (
    <div className="bg-white px-5 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
        {data.map((item) => (
          <div className="flex gap-10 p-10">
            <img
              alt="Increase visibility"
              src={item.image}
              role="presentation"
              class="css-aqier1 eu4oa1w0"
            ></img>
            <div className="grid gap-5">
              <h2 className="text-4xl">{item.heading}</h2>
              <h5 className="text-xl">
                <strong className="text-blue-800">{item.strongText}</strong>
                {item.text}
              </h5>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-5 m-10 justify-center">
        <button className="bg-blue-950 text-white py-5 w-60 rounded-md">
          Get Started
        </button>
        <h4 className="text-xl content-center">
          You control your posts 24/7 – edit, add, pause or close them whenever
          you want.{" "}
          <strong className="text-blue-800"> Learn more about posting.</strong>
        </h4>
      </div>
    </div>
  );
};

export default CenterCards;
