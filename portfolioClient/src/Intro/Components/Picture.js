import profilePic from "../../assets/profilePic.jpeg"

export default function Picture(){
    return(
        <div>
            <img 
                src={profilePic}
                alt="Kaan Buke image"
                style={{
                    maxWidth: "100%",
                    zIndex: "-0.5"
                }}
            />
        </div>
    )
}