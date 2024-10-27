import "./Intro.css";

import linkednLogo from "../../src/assets/linkedn.png";
import gitHubLogo from "../../src/assets/gitHub.png";
import instaLogo from "../../src/assets/insta.png";

import { Link } from "react-router-dom";

import Info from "./Components/Info";
import Picture from "./Components/Picture";

export default function Intro({ specificUserInfo }) {
    console.log(specificUserInfo);
    return (
        <div style={{ display: "flex", color: "white", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
                <div id="socialsGrid">
                    <Link className="linkednLink" to={`${specificUserInfo.linkdn_link}`}>
                        <img src={linkednLogo} className="socialLogo" />
                    </Link>

                    <Link className="gitHubLink">
                        <img src={gitHubLogo} className="socialLogo" />
                    </Link>

                    <Link className="instaLink">
                        <img className="socialLogo" src={instaLogo} />
                    </Link>
                </div>
            </div>

            <div style={{ display: "grid", marginLeft: "20px", marginRight: "20px", gridTemplateColumns: "70% 30%" }}>
                <Info specificUserInfo={specificUserInfo} />

                <Picture />
            </div>
        </div>
    );
}
