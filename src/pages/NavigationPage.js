import { Outlet } from "react-router-dom";

import Navigation from "../components/Navigation";

const NavigationPage = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default NavigationPage;
