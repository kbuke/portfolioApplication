import "./Info.css"

export default function Info({
    specificUserInfo
}){
    return(
        <div
            style={{
                display: "flex",
                flexDirection: "column"
            }}
        >
            <h1
                id="firstName"
            >
                {specificUserInfo.first_name}
            </h1>

            <h1
                id="lastName"
            >
                {specificUserInfo.last_name}
            </h1>

            <h3
                style={{
                    fontWeight: "250",
                    marginTop: "0px"
                }}
            >
                {specificUserInfo.profile_bio}
            </h3>


        </div>
    )
}