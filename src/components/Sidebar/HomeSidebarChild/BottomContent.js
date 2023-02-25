import React from "react";
import { BiLogOut } from "react-icons/bi";
import MenuBarLi from "./MenuBarLi";
import ModeChangeBtn from "./ModeChangeBtn";

const BottomContent = () => {
  return (
    <div className="bottom-content">
      <ul className="menu-options">
        <MenuBarLi icon={<BiLogOut className="icon" />} name={"Đăng xuất"} />
        <ModeChangeBtn />
      </ul>
    </div>
  );
};

export default BottomContent;
