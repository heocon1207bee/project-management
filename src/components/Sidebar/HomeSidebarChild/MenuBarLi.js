import React from "react";

const MenuBarLi = (props) => {
  return <li className="option">
    {props.icon}
    <span className="text nav-text">{props.name}</span>
  </li>;
};

export default MenuBarLi;
