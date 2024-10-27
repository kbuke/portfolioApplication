import "./Projects.css"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import gitLogo from "../assets/gitHub.png"

export default function Projects({
    projects,
    setProjects
}){

    const [sortProjects, setSortProjects] = useState([])

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

        const gitLink = project.git_hub_link ? project.git_hub_link : null 
        const blogLink = project.blog_link ? project.blog_link : null 

        const projectPoints = project.points
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

                        <div
                            style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", marginRight: "20px", marginLeft: "20px"}}
                        >
                            <Link
                                to={gitLink}
                                className="linkContainer"
                            >
                                <img 
                                    alt={"Git Hub link"}
                                    src={gitLogo}
                                    className="linkImg"
                                />
                            </Link>

                            <Link
                                to={blogLink}
                                className="linkContainer"
                                style={{alignSelf: "end"}}
                            >
                                <img 
                                    alt={"BlogLink"}
                                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiix8XOZ_wZxRWWcSuaKdxR9Ya7Q7EiBm33Q&s"}
                                    className="linkImg"
                                />
                            </Link>
                        </div>
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