import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiCalendarWeek, BiCalendarCheck, BiCalendarX } from "react-icons/bi";

const ProjectItem = (props) => {
    return (
        <div className="project-item">
            <div className="project-info-container">
                <div className="status-dot">
                    <BiCalendarWeek />
                </div>
                <div className="option-dot">
                    <BsThreeDotsVertical />
                </div>
                <h3>Tên dự án</h3>
                <p>Người tạo: Tên Người Tạo</p>
                <p>Mục tiêu: Mục tiêu của dự án</p>
            </div>
        </div>
    );
};

export default ProjectItem;
