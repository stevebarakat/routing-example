import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Routing Example</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="attorneys">Attorneys</NavLink>
          <NavLink to="help">Expert Help</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
