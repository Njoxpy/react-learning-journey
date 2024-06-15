// import react router dom library
import { NavLink, Link, Outlet } from "react-router-dom";

const HelpLayout = () => {
  return (
    <main>
      <div className="p-8">
        <NavLink to="Help">Help</NavLink>
        <NavLink to="faq">Faq</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default HelpLayout;
