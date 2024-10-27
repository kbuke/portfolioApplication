import "./Projects.css"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import gitLogo from "../assets/gitHub.png"

export default function Projects({
    projects,
    setProjects
}){

    const [sortProjects, setSortProjects] = useState([])
    const [hoveredProjects, setHoveredProjects] = useState("")

    //Use dependancy array to alter projects when changes made
    useEffect(() => {
        setSortProjects(projects.sort((a, b) => new Date(b.start_date) - new Date(a.start_date)))
    }, [projects])

    console.log(sortProjects)

    const renderProjects = sortProjects.map((project, index) => {
        const projectName = project.name;
        const projectImg = project.image;

        const projectInstitution = project.institutes
        const instituteLogo = projectInstitution.logo
        const instituteName = projectInstitution.name 

        const projectPoints = project.points
        console.log(projectPoints)
        const renderPoints = projectPoints.map((points, index) => (
            <li
                key={index}
                className="pointsList"
                style={{marginBottom: "20px"}}
            >
                {points.point}
            </li>
        ))
        return (
            <div
                style={{display: "flex", flexDirection: "column"}}
            >
                <div className="projectContainer" key={index}>
                    <img 
                        alt={`${projectName} Image`}
                        src={projectImg}
                        className="projectImg"
                    />
                    <div className="overlay">
                        <img 
                            alt={`${instituteName} logo`}
                            src={instituteLogo}
                            className="instituteLogo"
                        />

                        <ul>{renderPoints}</ul>
                    </div>
                </div>
                <h3 
                    className="projectTitle"
                >
                    {projectName}
                </h3>
            </div>
        );
    });
    

    return(
        <div
            id="projectRenderGrid"
        >
            {renderProjects}
        </div>
    )
}