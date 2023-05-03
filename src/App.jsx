import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Faq from "./Pages/help/Faq";
import Contact from "./Pages/help/Contact";
import Careers, { careersLoader } from "./Pages/Careers";
import CareerDetails, { careerDetailsLoader } from "./Pages/CareerDetails";

// Layouts
import RouteLayout from "./layouts/RouteLayout";
import HelpLayout from "./layouts/HelpLayout";
import NotFound from "./Pages/NotFound";
import CareersLayout from "./layouts/CareersLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="careers" element={<CareersLayout />}>
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        ></Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
