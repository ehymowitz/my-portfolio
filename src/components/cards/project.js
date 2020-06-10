import React from "react"

export default function Project({orient, link, title, desc, stack, api, image}) {
  const classes = "project-card " + orient
  const usedapi = "API: " + api
  return (
    <div className={classes}>
        <a href={link} target="_blank" rel="noreferrer">
          <img src= {image} alt={title}/>
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
