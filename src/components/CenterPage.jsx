import React from "react";
import CenterCards from "./CenterCards";

const imageCard = [
  {
    image:
      "https://d34k7i5akwhqbd.cloudfront.net/allspark/static/images/mcdonalds-e98393.svg",
    text: "Indeed helps the world’s largest family restaurant business to recruit high-quality candidates for its hard-to-fill positions.",
  },
  {
    image:
      "https://d34k7i5akwhqbd.cloudfront.net/allspark/static/images/university-of-oxford-300af0.svg",
    text: "The second oldest university in the world uses Indeed to draw targeted jobseeker traffic to fill both niche academic positions and corporate support roles.",
  },
  {
    image:
      "https://d34k7i5akwhqbd.cloudfront.net/allspark/static/images/nokia-321ac2.svg",
    text: "The world leader in mobile communications uses Indeed Sponsored Jobs to lower its cost per applicant and cost per hire.",
  },
];

const CenterPage = () => {
  return (
    <div>
      <div className="bg-gray-100 p-10">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4">
          <div className="grid gap-10 text-center md:text-left md:w-1/2 m-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Save time and effort in your recruitment journey.
            </h2>
            <p className="text-2xl">
              Finding the best fit for the job shouldn’t be a full-time job.
              Indeed’s simple and powerful tools let you source, screen and hire
              faster.
            </p>
          </div>
        </div>
        <CenterCards />
      </div>
      <div className=" container mx-auto items-center justify-between px-4 ">
        <div className="grid gap-10 text-center m-10 py-10 ">
          <h2 className="text-3xl md:text-3xl font-bold mb-4  w-4/12 justify-self-center">
            Want to fill your job faster? Sponsor it.
          </h2>
          <p className="text-2xl  w-6/12 justify-self-center">
            Sponsored Jobs are over 4.5X more likely to result in a hire. Only
            pay for applications from qualified candidates who meet your
            requirements.
          </p>
        </div>
      </div>
      <div className=" container mx-auto items-center justify-between px-4 ">
        <div className="grid gap-10 text-center m-10 py-10 ">
          <h2 className="text-3xl md:text-3xl font-bold mb-4  w-4/12 justify-self-center">
            You're in good company.
          </h2>
          <p className="text-2xl  w-6/12 justify-self-center">
            Over 2,70,000 companies use Indeed to hire. See why these fantastic
            companies use us as their platform for hiring dream talent.
          </p>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center max-sm:gap-10 my-16">
        {imageCard.map((item) => (
          <div className="grid gap-3 p-8 justify-items-center rounded-3xl shadow-xl border w-9/12 ">
            <img
              alt="Increase visibility"
              src={item.image}
              role="presentation"
              class="css-aqier1 eu4oa1w0"
            ></img>
            <h5 className="text-xl">
              <strong className="text-blue-800">{item.strongText}</strong>
              {item.text}
            </h5>
          </div>
        ))}
      </div>
      <div className="mx-auto grid grid-cols-2">
        <div className="bg-blue-950 text-white px-20 grid gap-12 h-5/6">
          <h1 className="text-4xl w-4/6 justify-self-end mt-10">
            "We have found Indeed very helpful in finding the right candidate
            for our organization... it saves time and energy of both the
            candidates as well as the recruiter."
          </h1>
          <h2 className="text-3xl w-4/6  justify-self-end mb-10">Kapdec</h2>
        </div>
        <img
          src="https://d34k7i5akwhqbd.cloudfront.net/allspark/static/images/customer-testimonial-IN-2bb115.jpg"
          alt=""
          class="css-1tzli5f eu4oa1w0"
          height={"850px"}
          width={"850px"}
        />
      </div>
      <div className=" container mx-auto items-center justify-between px-4 my-20">
        <div className="grid gap-10 text-center m-10 py-20 ">
          <h2 className="text-3xl md:text-3xl font-bold mb-4  w-4/12 justify-self-center">
            Get started in minutes!
          </h2>
          <button className="text-white bg-blue-800 w-52 py-4 rounded-lg justify-self-center">
            Start posting
          </button>
        </div>
      </div>
    </div>
  );
};

export default CenterPage;
