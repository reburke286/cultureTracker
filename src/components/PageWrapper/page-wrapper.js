/* DEPENDENCIES */
import { Outlet } from "react-router-dom";

/* COMPONENTS */
import { Nav } from "../../components";

export const PageWrapper = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};
