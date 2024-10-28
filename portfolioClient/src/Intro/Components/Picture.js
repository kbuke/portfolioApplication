import { useState } from "react"
import profilePic from "../../assets/profilePic.jpeg"

import LogOut from "./LogOut"

import "./Picture.css"

export default function Picture({
    setLogin,
    loggedUser,
    setLoggedUser
}){
    const [hoverLogin, setHoverLogin] = useState(false)
    const [logOut, setLogOut] = useState(false)

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
                <>
                    <div
                        id="loggedInOptionsGrid"
                    >
                        <button
                            onClick={() => setLogOut(true)}
                        >
                            Logout
                        </button>

                        <button>Edit your information</button>

                        <button>Add Institute</button>
                    </div>

                    {logOut ? 
                        <LogOut 
                            setLogOut={setLogOut}
                            setLoggedUser={setLoggedUser}
                        />
                        :
                        null
                    }
                </>
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