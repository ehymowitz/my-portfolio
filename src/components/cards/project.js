import React from "react"
import Img from "gatsby-image"

export default function Project({orient, link, title, desc, stack, api, image}) {
  const classes = "project-card " + orient
  const usedapi = "API: " + api

  return (
    <div className={classes}
      data-sal="fade"
      data-sal-easing="ease"
      data-sal-duration="1500"
    >
      <a href={link} target="_blank" rel="noreferrer">
        <Img fluid={image} alt={title} className="project-image"/>
      </a>
      <div className="project-text">
        <h2>
          {title}
        </h2>
        <p>
          {desc}
        </p>
        <p>
          Stack: {stack}
        </p>
        <p>
          {api && usedapi}
        </p>
      </div>
    </div>
  )
}
