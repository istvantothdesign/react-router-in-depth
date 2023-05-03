import React from "react";
import { Outlet } from "react-router-dom";

const CareersLayout = () => {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
        dolorem nam nihil provident, suscipit maxime magni omnis? Magni,
        similique aspernatur!
      </p>

      <Outlet />
    </div>
  );
};
export default CareersLayout;
