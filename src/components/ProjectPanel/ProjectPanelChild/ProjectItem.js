import React from "react";
import { BsThreeDotsVertical, BsInfoCircle } from "react-icons/bs";
import { BiCalendarWeek, BiCalendarCheck, BiCalendarX } from "react-icons/bi";
import { GrUserAdmin } from "react-icons/gr";

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
                <div className="project-info">
                    <h3>Tên dự án</h3>
                    <p>
                        <GrUserAdmin /> <span>Tên Người Tạo</span>
                    </p>
                    <p>
                        <BsInfoCircle />{" "}
                        <span>
                            Phải hoàn thành dự án trong thời gian sớm nhất
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
