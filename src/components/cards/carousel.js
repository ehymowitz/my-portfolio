import React from "react"
import { GiFClef } from "react-icons/gi";
import { BsCodeSlash } from "react-icons/bs"
import { RiCamera3Line } from "react-icons/ri"

export default function Carousel(props) {
  const icon = props.type
  const background = props.image
  const url = props.link
  return(
    <div className="carousel-card">
      <a href= {url} target="_blank">
              <div className="icon">
          {icon === "code" && <BsCodeSlash/> }
          {icon === "music" && <GiFClef/> }
          {icon === "photo" && <RiCamera3Line/> }
        </div>
        <div
          className="image"
          style = {{ backgroundImage: `url(${background})` }}>
        </div>
        <div className="text-container">
          <p>{props.title}</p>
          <small>{props.desc}</small>
        </div></a>
    </div>
  )
}
