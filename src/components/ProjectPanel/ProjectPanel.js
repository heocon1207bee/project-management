import React from "react";
import "./ProjectPanel.scss";
import ProjectItem from "./ProjectPanelChild/ProjectItem";

const ProjectPanel = () => {
    return (
        <div className="project-panel">
            <div className="project-container">
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
            </div>
        </div>
    );
};

export default ProjectPanel;
