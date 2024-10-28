import Intro from "../Intro/Intro"

import TechStack from "../TechStack/TechStack"

import Projects from "../Projects/Projects"

import Email from "../Emails/Email"
import { useEffect, useState } from "react"

export default function Home({
    userInfo,
    setUserInfo,

    techStack,
    setTechStack,

    projects,
    setProjects,

    allEmails,
    setAllEmails,

    loggedUser,
    setLoggedUser,

    allInstitutes,
    setAllInstitutes
}){
    const [specificUserInfo, setSpecificUserInfo] = useState([])

    console.log(userInfo)

    useEffect(() => {
        setSpecificUserInfo(userInfo[0] ? userInfo[0] : [])
    }, [userInfo])

    // const specificUserInfo = userInfo[0]? userInfo[0] : []

    return(
        <div>
            <Intro 
                specificUserInfo={specificUserInfo}
                setLoggedUser={setLoggedUser}
                loggedUser={loggedUser}
                setUserInfo={setUserInfo}
                allInstitutes={allInstitutes}
                setAllInstitutes={setAllInstitutes}
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