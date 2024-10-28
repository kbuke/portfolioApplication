import "./Projects.css"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import gitLogo from "../assets/gitHub.png"

import NewProject from "./Components/NewProject"

export default function Projects({
    projects,
    setProjects,
    addButton,
    loggedUser,
    allInstitutes,
    setAllInstitutes
}){

    const [sortProjects, setSortProjects] = useState([])
    const [newProject, setNewProject] = useState(false)

    //Use dependancy array to alter projects when changes made
    useEffect(() => {
        setSortProjects(projects.sort((a, b) => new Date(b.start_date) - new Date(a.start_date)))
    }, [projects])

    const renderProjects = sortProjects.map((project, index) => {
        const projectName = project.name;
        const projectImg = project.image;
    
        const projectInstitution = project.institutes;
        const instituteLogo = projectInstitution.logo;
        const instituteName = projectInstitution.name;
    
        const gitLink = project.git_hub_link ? project.git_hub_link : null;
        const blogLink = project.blog_link ? project.blog_link : null;
    
        const projectStacks = project.project_language;
        const specificProjectStack = projectStacks.map((project) => project.languages.name);
    
        const projectPoints = project.points;
        const renderPoints = projectPoints.map((points, index) => (
            <li
                key={index}
                className="pointsList"
                style={{ marginBottom: "20px" }}
            >
                {points.point}
            </li>
        ));
    
        return (
            <div style={{ display: "flex", flexDirection: "column" }} key={index}>
                <div className="projectContainer">
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
    
                        <div id="projectLinkGrid">
                            <Link to={gitLink} className="linkContainer">
                                <img 
                                    alt={"Git Hub link"}
                                    src={gitLogo}
                                    className="linkImg"
                                />
                            </Link>
    
                            <Link
                                to={blogLink}
                                className="linkContainer"
                                style={{ alignSelf: "end" }}
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
                <h3 className="projectTitle">{projectName}</h3>
    
                <div className="projectStacks">
                    <h3
                        style={{marginTop: "0px", fontWeight: 300}}
                    >
                        {specificProjectStack.join(" | ")}
                    </h3>
                </div>
            </div>
        );
    });

    return(
        <div
            id="projectRenderGrid"
        >
            {newProject ? 
                <NewProject 
                    setNewProject={setNewProject}
                    projects={projects}
                    setProjects={setProjects}
                    allInstitutes={allInstitutes}
                    setAllInstitutes={setAllInstitutes}
                />
                :
                null
            }

            {renderProjects}

            {loggedUser ?
                <div
                    className="techLogoContainer"
                >
                    <img
                        src={addButton}
                        className="addButton"
                        onClick={() => setNewProject(true)}
                    />
                </div>
                :
                null
            }
        </div>
    )
}