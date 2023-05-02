import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page not found</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        recusandae architecto ipsa impedit? Nihil eos deserunt culpa laborum,
        iusto praesentium!
      </p>

      <p>
        Go to the <Link to={"/"}>Homepage</Link>.
      </p>
    </div>
  );
};

export default NotFound;
