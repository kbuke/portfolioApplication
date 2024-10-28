import "./Intro.css";

import linkednLogo from "../../src/assets/linkedn.png";
import gitHubLogo from "../../src/assets/gitHub.png";
import instaLogo from "../../src/assets/insta.png";

import { Link } from "react-router-dom";

import Info from "./Components/Info";
import Picture from "./Components/Picture";

import Login from "./Components/Login";
import { useState, useEffect } from "react";

export default function Intro({ specificUserInfo, setLoggedUser, loggedUser }) {
    const [login, setLogin] = useState(false)

    useEffect(() => {
        if (login) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
        // Cleanup to remove the class if the component unmounts
        return () => document.body.classList.remove("no-scroll");
    }, [login]);

    console.log(specificUserInfo);
    return (
        <div style={{ display: "flex", color: "white", flexDirection: "column", borderBottom: "solid"}}>
            {login ? 
                <Login 
                    setLogin={setLogin}
                    setLoggedUser={setLoggedUser}
                /> 
                : 
                null
            }
            <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
                <div id="socialsGrid">
                    <Link className="linkednLink" to={`${specificUserInfo.linkdn_link}`}>
                        <img src={linkednLogo} className="socialLogo" />
                    </Link>

                    <Link className="gitHubLink" to={`${specificUserInfo.git_hub_link}`}>
                        <img src={gitHubLogo} className="socialLogo" />
                    </Link>

                    <Link className="instaLink" to={`${specificUserInfo.insta_link}`}>
                        <img className="socialLogo" src={instaLogo} />
                    </Link>
                </div>
            </div>

            <div style={{ display: "grid", marginLeft: "20px", marginRight: "20px", gridTemplateColumns: "70% 30%" }}>
                <Info specificUserInfo={specificUserInfo} />

                <Picture 
                    setLogin={setLogin}
                    loggedUser={loggedUser}
                />
            </div>
        </div>
    );
}
