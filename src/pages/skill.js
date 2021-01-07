import React from "react"
import Skillbar from "../components/skill-bar"
export default function Skill({ className, showContent = true }) {
  const skills = [
    {
      label: "C#",
      level: "3",
    },
    {
      label: "Javascript",
      level: "1",
    },
    {
      label: "C++",
      level: "2",
    },
  ]
  return (
    <div className={className + " bg-skill flex flex-col justify-center"}>
      {showContent && <Skillbar skills={skills} className="mx-auto"></Skillbar>}
    </div>
  )
}
