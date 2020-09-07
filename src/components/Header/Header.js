import React from "react";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
  return (
    <div>
      <h1>Wellness Logger</h1>
      <ul className="menu-header">
        <li>
          <Link to="/">
            <Icon name="home" size="big" />
          </Link>
        </li>

        <li>
          <Link to="/log">
            <Icon name="write" size="big" />
          </Link>
        </li>
        <li>
          <Link to="/view">
            <Icon name="spinner" size="big" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
