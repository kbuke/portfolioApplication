import logo from './logo.svg';
import './App.css';

import {useEffect, useState} from "react"

import Home from './HomePg/Home';

function App() {
  //Set state for user info
  const [userInfo, setUserInfo] = useState([])

  //Set state for technologies
  const [techStack, setTechStack] = useState([])

  //Set state to see which project user hovers over
  const [hoveredProject, setHoveredProject] = useState("")

  //Fetch user info
  useEffect(() => {
    fetch("/profile")
    .then(r => {
      if(r.ok) {
        return r.json()
      }
      throw r 
    })
    .then(profiles => setUserInfo(profiles))
  }, [])

  //Fetch known tech
  useEffect(() => {
    fetch("technologies")
    .then(r => {
      if(r.ok){
        return r.json()
      }
      throw r 
    })
    .then(technologies => setTechStack(technologies))
  }, [])

  return(
    <div
      style={{
        backgroundColor: "black",
      }}
    >
      <Home 
        userInfo={userInfo}

        techStack={techStack}
        setTechStack={setTechStack}
      />
    </div>
  )

  
}

export default App;
