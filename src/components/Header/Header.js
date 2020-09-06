import React from "react";
import { Icon } from "semantic-ui-react";

import "./Header.css";

export default function Header() {
  return (
    <div>
      <h1>Wellness Logger</h1>
      <ul className="menu-header">
        <li>
          <Icon name="home" size="big" />
        </li>

        <li>
          <Icon name="write" size="big" />
        </li>

        <li>
          <Icon name="spinner" size="big" />
        </li>
      </ul>
    </div>
  );
}
