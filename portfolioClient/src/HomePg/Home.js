import Intro from "../Intro/Intro"

import TechStack from "../TechStack/TechStack"

import Projects from "../Projects/Projects"

export default function Home({
    userInfo,

    techStack,
    setTechStack,

    projects,
    setProjects
}){

    const specificUserInfo = userInfo[0]? userInfo[0] : []

    console.log(specificUserInfo)

    return(
        <div>
            <Intro 
                specificUserInfo={specificUserInfo}
            />

            <TechStack 
                techStack={techStack}
                setTechStack={setTechStack}
            />

            <Projects 
                projects={projects}
                setProjects={setProjects}
            />
        </div>
    )
}