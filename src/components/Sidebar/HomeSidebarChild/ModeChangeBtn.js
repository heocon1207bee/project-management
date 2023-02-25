import React, { useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

const ModeChangeBtn = () => {
  const [mode, changeMode] = useState(true);

  const modeHover = () => {
    changeMode(!mode)
  }

  return (
    <li className="moon-sun" onClick={modeHover}>
      <span className="icon">
        {mode?<BiMoon />:<BiSun />}
      </span>
      <span className="text mode-text">{mode?'Chuyển chế độ tối':'Chuyển chế độ sáng'}</span>
      <div className="toggle-switch">
        <span className="switch"></span>
      </div>
    </li>
  );
};

export default ModeChangeBtn;
