import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <main>
      <div className="p-8 bg-movieDatabase-primary text-movieDatabase-backgroundCard ">
        <h1 className="font-bold text-center lg:font-3xl">Movie Database</h1>
        <nav className="text-center">
          <NavLink to="/" className="px-2 hover:underline">
            Home
          </NavLink>
          <NavLink to="movies" className="px-2 hover:underline">
            Movies
          </NavLink>
          <NavLink to="add" className="px-2 hover:underline">
            Add
          </NavLink>
          <NavLink to="create" className="px-2 hover:underline">
            Create
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </main>
  );
};

export default RootLayout;
