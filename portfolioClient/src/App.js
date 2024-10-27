import logo from './logo.svg';
import './App.css';

import {useEffect, useState} from "react"

import Home from './HomePg/Home';

function App() {
  //Set state for user info
  const [userInfo, setUserInfo] = useState([])

  //Set state for technologies
  const [techStack, setTechStack] = useState([])

  //Set state for projects
  const [projects, setProjects] = useState([])

  //Set state for emails
  const [allEmails, setAllEmails] = useState([])

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

  //Fetch projects
  useEffect(() => {
    fetch("/projects")
    .then(r => {
      if(r.ok){
        return r.json()
      }
      throw r 
    })
    .then(project => setProjects(project))
  }, [])

  useEffect(() => {
    fetch("/emails")
    .then(r => {
      if(r.ok){
        return r.json()
      }
      throw r 
    })
    .then(email => setAllEmails(email))
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

        projects={projects}
        setProjects={setProjects}

        allEmails={allEmails}
        setAllEmails={setAllEmails}
      />
    </div>
  )

  
}

export default App;
