import React from "react"
import Img from "gatsby-image"

export default function Project({orient, link, title, desc, stack, api, image}) {
  const classes = "project-card " + orient
  const usedapi = "API: " + api

  console.log(stack)

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
        <p style={{fontStyle: "italic"}}>
          {desc}
        </p>
        <div className="stack-item-wrapper">
          {
            stack.map((item) => (
              <div className="stack-item">
                <img src={`/logos/${item}`} alt=""/>
              </div>
            ))
          }
        </div>
        <small>
          {api && usedapi}
        </small>
      </div>
    </div>
  )
}
