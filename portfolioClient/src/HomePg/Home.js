import Intro from "../Intro/Intro"

export default function Home({
    userInfo
}){

    const specificUserInfo = userInfo[0]? userInfo[0] : []

    console.log(specificUserInfo)

    return(
        <div>
            <Intro 
                specificUserInfo={specificUserInfo}
            />
        </div>
    )
}