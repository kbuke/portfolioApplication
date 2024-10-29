import "./Projects.css"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import gitLogo from "../assets/gitHub.png"

import NewProject from "./Components/NewProject"

import NewProjectStack from "./Components/NewProjectStack"

import DeleteProject from "./Components/DeleteProject"

import NewPoint from "./Components/NewPoint"

export default function Projects({
    projects,
    setProjects,
    addButton,
    loggedUser,
    allInstitutes,
    setAllInstitutes,
    techStack,
    projectStack,
    setProjectStack,
    projectPoints,
    setProjectPoints,
    editIcon,
    binIcon
}){
    console.log(projectStack)
    console.log(projectPoints)

    const [sortProjects, setSortProjects] = useState([])
    const [newProject, setNewProject] = useState(false)

    const [newStack, setNewStack] = useState(false)

    const [projectId, setProjectId] = useState()

    const [newPoint, setNewPoint] = useState(false)

    const [deleteProject, setDeleteProject] = useState(false)

    const [projectName, setProjectName] = useState("")

    const handleProjectStack = (identity) => {
        setProjectId(identity)
        setNewStack(true)
    }

    const handleProjectPoint = (identity) => {
        setNewPoint(true)
        setProjectId(identity)
    }

    //Handle delete request
    const handleDeleteProject = (projectId, projectName) => {
        setProjectId(projectId)
        setDeleteProject(true)
        setProjectName(projectName)
    }

    console.log(`I have selected project ${projectId}`)

    //Use dependancy array to alter projects when changes made
    useEffect(() => {
        setSortProjects(projects.sort((a, b) => new Date(b.start_date) - new Date(a.start_date)))
    }, [projects, projectStack, projectPoints])

    console.log(sortProjects)

    const renderProjects = sortProjects.map((project, index) => {
        const projectName = project.name;
        const projectImg = project.image;

        console.log(project)
    
        const projectInstitution = project.institutes;
        const instituteLogo = projectInstitution.logo;
        const instituteName = projectInstitution.name;
    
        const gitLink = project.git_hub_link ? project.git_hub_link : null;
        const blogLink = project.blog_link ? project.blog_link : null;
    
        const projectStacks = project.project_language;
        const specificProjectStack = [...new Set(projectStacks.map((project) => project.languages.name))];

    
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

                        {loggedUser ?
                            <div
                                style={{display: "grid", gridTemplateColumns: "repeat(3, auto)", gap: "20px", marginBottom: "30px"}}
                            >
                                <div
                                    className="newPointContainer"
                                >
                                    <img 
                                        src={addButton}
                                        className="addButton"
                                        onClick={() => handleProjectPoint(project.id)}
                                    />
                                </div>

                                <div
                                    className="editProjectButtonContainer"
                                >
                                    <img 
                                        className="editProjectButton"
                                        src={editIcon}
                                        alt="editProject"
                                    />
                                </div>

                                <div
                                    className="deleteProjectButtonContainer"
                                >
                                    <img 
                                        className="deleteProjectButton"
                                        src={binIcon}
                                        alt="deleteProject"
                                        onClick={() => handleDeleteProject(project.id, project.name)}
                                    />
                                </div>
                            </div>
                            :
                            null
                        }

                        <div id="projectLinkGrid">
                            {gitLink ?
                                <Link to={gitLink} className="linkContainer">
                                    <img 
                                        alt={"Git Hub link"}
                                        src={gitLogo}
                                        className="linkImg"
                                    />
                                </Link>
                                :
                                null
                            }
    
                            {blogLink ?
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
                                :
                                null
                            }
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


                {loggedUser ?
                    <div
                        id="newProjectStackButton"
                        onClick={() => handleProjectStack(project.id)}
                    >
                        <img 
                            src={addButton}
                            alt="add new project stack"
                            className="addButton"
                        />
                    </div>
                    :
                    null
                }
            </div>
        );
    });

    return(
        <>
            <h1
                id="subHeadings"
            >
                Projects
            </h1>

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

                {newStack ?
                    <NewProjectStack 
                        techStack={techStack}
                        projectId={projectId}
                        setNewStack={setNewStack}
                        projectStack={projectStack}
                        setProjectStack={setProjectStack}
                    />
                    :
                    null
                }

                {newPoint ?
                    <NewPoint 
                        projectId={projectId}
                        projectPoints={projectPoints}
                        setProjectPoints={setProjectPoints}
                        setNewPoint={setNewPoint}
                    />
                    :
                    null
                }

                {deleteProject ?
                    <DeleteProject 
                        projectId={projectId}
                        setProjectId={setProjectId}
                        projectName={projectName}
                        projects={projects}
                        setProjects={setProjects}
                        setDeleteProject={setDeleteProject}
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
        </>
    )
}