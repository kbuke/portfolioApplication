import Intro from "../Intro/Intro"

import TechStack from "../TechStack/TechStack"

export default function Home({
    userInfo,

    techStack,
    setTechStack
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
        </div>
    )
}