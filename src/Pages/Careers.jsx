import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const Careers = () => {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based In {career.location}</p>
        </Link>
      ))}
    </div>
  );
};

// Loader function
export const careersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");

  if (!res.ok) {
    throw Error("Could not fetch careers.");
  }

  return res.json();
};

export default Careers;
