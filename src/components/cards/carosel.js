import React from "react"
import { GiFClef } from "react-icons/gi";
import { BsCodeSlash } from "react-icons/bs"
import { RiCamera3Line } from "react-icons/ri"

export default function Carosel(props) {
  const icon = props.type
  const Background = '../../../../static/images/DDF.png'
  return(
    <div className="carosel-card">
      <div className="icon">
        {icon === "code" && <BsCodeSlash/> }
        {icon === "music" && <GiFClef/> }
        {icon === "photo" && <RiCamera3Line/> }
      </div>
      <div
        className="image"
        style = {{ backgroundImage: `url(${Background})` }}>
      </div>
      <div className="text-container">
        <p>{props.title}</p>
        <small>{props.desc}</small>
      </div>
    </div>
  )
}
