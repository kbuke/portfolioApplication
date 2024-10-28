import { useState } from "react"
import profilePic from "../../assets/profilePic.jpeg"

import "./Picture.css"

export default function Picture({
    setLogin,
    loggedUser
}){
    const [hoverLogin, setHoverLogin] = useState(false)

    return(
        <div>
            <img 
                src={profilePic}
                alt="Kaan Buke image"
                style={{
                    maxWidth: "100%",
                    zIndex: "-0.5",
                    marginBottom: "20px"
                }}
            />
            {loggedUser ?
                <button>LogOut</button>
                :
                <button
                    className="loginButton"
                    onMouseEnter={() => setHoverLogin(true)}
                    onMouseLeave={() => setHoverLogin(false)}
                    id={hoverLogin? "showLogin" : ""}
                    style={{justifySelf: "center", alignSelf: "center"}}
                    onClick={() => setLogin(true)}
                >
                    Login
                </button>
            }
        </div>
    )
}