import React from "react";
import "./HomeSidebar.scss";
import image1 from "../../assets/images/PM.gif";
import { MdKeyboardArrowRight } from "react-icons/md";
import MenuBar from "./HomeSidebarChild/MenuBar";
import BottomContent from "./HomeSidebarChild/BottomContent";

const HomeSidebar = () => {
  return (
    <nav className="sidebar">
      <header>
        <div className="image-text">
          <span className="image">
            <img src={image1} alt="logo" />
          </span>
          <span className="text header-text">
            <span className="name">PJM</span>
            <span className="profession">Project Management</span>
          </span>
        </div>
        <MdKeyboardArrowRight className="toggle"/>
      </header>
      <br/>
      <br/>
      <MenuBar/>
    </nav>
  );
};

export default HomeSidebar;
