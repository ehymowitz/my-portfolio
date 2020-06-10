import React from "react"
import { GiFClef } from "react-icons/gi";
import { BsCodeSlash } from "react-icons/bs"
import { RiCamera3Line } from "react-icons/ri"

export default function Carousel({title, desc, type, image, link}) {
  return(
    <div className="carousel-card">
      <a href= {link} target="_blank" rel="noreferrer">
              <div className="icon">
          {type === "code" && <BsCodeSlash/> }
          {type === "music" && <GiFClef/> }
          {type === "photo" && <RiCamera3Line/> }
        </div>
        <div
          className="image"
          style = {{ backgroundImage: `url(${image})` }}>
        </div>
        <div className="carousel-text">
          <p>{title}</p>
          <small>{desc}</small>
        </div></a>
    </div>
  )
}
