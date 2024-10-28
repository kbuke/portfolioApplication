import { useEffect, useState } from "react"

import "./TechStack.css"
import NewStack from "./Components/NewStack"

export default function TechStack({
    techStack,
    setTechStack,
    loggedUser,
    addButton
}){
    const [specificTechStack, setSpecificTechStack] = useState([])
    const [addStack, setAddStack] = useState(false)

    useEffect(() => (
        setSpecificTechStack(techStack)
    ), [techStack])

    //Render tech stack
    const renderStack = specificTechStack.map((tech, index) => (
        <div
            key={index}
            className="techContainer"
        >
            <div
                className="techGrid"
            >
                <div
                    className="techLogoContainer"
                >
                    <img 
                        className="techLogo"
                        src={tech.logo}
                        alt={`${tech.name} Logo`}
                    />
                </div>
                
                <div>
                    <h1
                        className="techName"
                    >
                        {tech.name}
                    </h1>

                    <h3
                        style={{
                            fontWeight: "300",
                            fontSize: "150%",
                            marginTop: "10px"
                        }}
                    >
                        {tech.experience}
                    </h3>
                </div>
            </div>
        </div>
    ))
    return(
        <>
            <h1
                style={{color: "white", marginLeft: "20px", fontSize: "350%"}}
            >
                Tech Stack
            </h1>
            <div
                id="techStackGrid"
            >
                {addStack ?
                    <NewStack 
                        setAddStack={setAddStack}
                        techStack={techStack}
                        setTechStack={setTechStack}
                    />
                    :
                    null
                }

                {renderStack}

                {loggedUser ?
                    <div
                        className="techLogoContainer"
                    >
                        <img 
                            src={addButton}
                            alt="add stack button"
                            className="addButton"
                            onClick={() => setAddStack(true)}
                        />
                    </div>
                    :
                    null
                }
            </div>
        </>
    )
}