import React from "react";
import MenuBarLi from "./MenuBarLi";
import {
  BiCalendar,
  BiCalendarWeek,
  BiCalendarCheck,
  BiCalendarX,
} from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import BottomContent from "./BottomContent";

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <div className="menu">
        <ul className="menu-options">
          <MenuBarLi
            icon={<BiCalendar className="icon" />}
            name={"Tất cả dự án"}
          />
          <MenuBarLi
            icon={<BiCalendarWeek className="icon" />}
            name={"Đang thực hiện"}
          />
          <MenuBarLi
            icon={<BiCalendarCheck className="icon" />}
            name={"Đã hoàn thành"}
          />
          <MenuBarLi
            icon={<BiCalendarX className="icon" />}
            name={"Bị hủy bỏ"}
          />
          <div
            style={{ borderBottom: "2px solid #eeeeee", margin: "25px 30px" }}
          />
          <MenuBarLi
            icon={<MdOutlineMailOutline className="icon" />}
            name={"Lời mời tham gia"}
          />
        </ul>
      </div>
      <BottomContent />
    </div>
  );
};

export default MenuBar;
