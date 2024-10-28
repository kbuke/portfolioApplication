

export default function TechStack({
    techStack,
    setTechStack
}){

    //Render tech stack
    const renderStack = techStack.map((tech, index) => (
        <div
            key={index}
            className="techContainer"
            style={{color: "white", marginBottom: "20px"}}
        >
            <div
                className="techGrid"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, auto)",
                    alignItems: "center",
                }}
            >
                <div
                    className="techLogoContainer"
                    style={{
                        height: "150px",
                        width: "150px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        marginTop: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <img 
                        className="techLogo"
                        src={tech.logo}
                        alt={`${tech.name} Logo`}
                        style={{
                            height: "100%",
                            width: "100%"
                        }}
                    />
                </div>
                
                <div>
                    <h1
                        className="techName"
                        style={{
                            fontSize: "300%",
                            textDecoration: "underline",
                            marginBottom: "0px"
                        }}
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
        <div
            id="techStackGrid"
            style={{
                display: "grid",
                color: "white",
                gridTemplateColumns: "repeat(3, auto)",
                marginLeft: "20px",
                marginRight: "20px",
                marginBottom: "20px",
                borderBottom: "solid",
            }}
        >
            {renderStack}
        </div>
    )
}