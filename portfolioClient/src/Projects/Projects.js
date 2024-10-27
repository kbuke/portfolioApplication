import { useEffect, useState } from "react"


export default function Projects({
    projects,
    setProjects
}){
    console.log(projects)

    const [sortProjects, setSortProjects] = useState([])

    //Use dependancy array to alter projects when changes made
    useEffect(() => {
        setSortProjects(projects.sort((a, b) => new Date(b.start_date) - new Date(a.start_date)))
    }, [projects])

    console.log(sortProjects)
    return(
        <div
            style={{
                marginLeft: "20px",
                marginRight: "20px",
                display: "grid",
                gridTemplateColumns: "repeat(2, auto)"
            }}
        >

        </div>
    )
}