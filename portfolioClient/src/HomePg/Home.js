import Intro from "../Intro/Intro"

import TechStack from "../TechStack/TechStack"

import Projects from "../Projects/Projects"

import Email from "../Emails/Email"

export default function Home({
    userInfo,

    techStack,
    setTechStack,

    projects,
    setProjects,

    allEmails,
    setAllEmails,

    loggedUser,
    setLoggedUser
}){

    const specificUserInfo = userInfo[0]? userInfo[0] : []

    console.log(loggedUser)

    return(
        <div>
            <Intro 
                specificUserInfo={specificUserInfo}
                setLoggedUser={setLoggedUser}
                loggedUser={loggedUser}
            />

            <TechStack 
                techStack={techStack}
                setTechStack={setTechStack}
            />

            <Projects 
                projects={projects}
                setProjects={setProjects}
            />

            <Email 
                allEmails={allEmails}
                setAllEmails={setAllEmails}
            />
        </div>
    )
}