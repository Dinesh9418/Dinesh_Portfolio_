import React, { useState } from "react";
import "./Projects.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "../resume/Button";
import Projects from "./Projects";

const ProjectIndex = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <section className="resume container section" id="experience">
            <h2 className="section__title">Projects</h2>

            <div className="resume__container">
                <Tabs
                    className="tabs"
                    selectedIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                    selectedTabClassName={"is-active"}
                    selectedTabPanelClassName={"is-active"}
                >
                    <TabList className="tab__list">
                        {Projects.map((experience, index) => {
                            const { id, project_name } = experience;
                            return (
                                <Tab className="tab" key={`project_name-${id}`}>
                                    <Button>{project_name}</Button>
                                </Tab>
                            );
                        })}
                    </TabList>

                    {Projects.map((experience) => {
                        const { id, project_name, yearsActive, role, technologies, responsibilities, description } = experience;
                        return (
                            <TabPanel className="tab__panel" key={`panel-${id}`}>
                                <h2 className="tab__panel-title">
                                    {project_name} as {role}
                                </h2>
                                <p className="tab__panel-subtitle">{yearsActive}</p>
                                <p className="tab__panel-subtitle">Responsibility  : {responsibilities}</p>
                                <p className="tab__panel-subtitle">Technologies  : {technologies}</p>
                                <ul className="tab__panel-list">Responsibilities :
                                    {responsibilities.map((info, index) => {
                                        return <li key={`info-${index}`}>{info}</li>;
                                    })}
                                </ul>
                            </TabPanel>
                        );
                    })}
                </Tabs>
            </div>
        </section>
    );
};

export default ProjectIndex;
