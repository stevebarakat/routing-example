import { Outlet, NavLink } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <div>
        <h2>Expert Help</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
          provident consequuntur vel omnis quisquam rem harum, maxime expedita,
          ullam ut dolore! Distinctio eos minima voluptatum totam id hic!
          Sapiente debitis quia illum officia obcaecati provident nulla odio
          molestiae suscipit quasi.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
          provident consequuntur vel omnis quisquam rem harum, maxime expedita,
          ullam ut dolore! Distinctio eos minima voluptatum totam id hic!
          Sapiente debitis quia illum officia obcaecati provident nulla odio
          molestiae suscipit quasi. Qui provident consequuntur vel omnis
          quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos
          minima voluptatum totam id hic!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
          provident consequuntur vel omnis quisquam rem harum, maxime expedita,
          ullam ut dolore! Distinctio provident nulla odio molestiae suscipit
          quasi.
        </p>
        <Outlet />
      </div>
      <aside>
        <nav>
          <NavLink to="/help/choose-attorney">Choose Attorney</NavLink>
          <NavLink to="contact">Contact Us</NavLink>
        </nav>
      </aside>
    </div>
  );
}
