import React from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => (
  <nav id="navbar" className={props.visible ? "nav__show" : ""}>
    <ul>
      <li>
        <Link to="/weather/Kiruna">Kiruna 123</Link>
      </li>
      <li>
        <Link to="/weather/Stockholm">Stockholm</Link>
      </li>
      <li>
        <Link to="/weather/Sturup">Sturup</Link>
      </li>
    </ul>
  </nav>
);

export default Sidebar;
