import React from "react"

export default function Project(props) {
  const url = props.link
  const classes = "project-card " + props.orient
  const api = "API: " + props.api
  return (
    <div className={classes}>
        <div className="project-text">
          <h2>
            {props.title}
          </h2>
          <p>
            {props.desc}
          </p>
          <p>
            Stack: {props.stack}
          </p>
          <p>
            {props.api && api}
          </p>
        </div>
        <a href={props.link} target="_blank">
          <img src= {props.image} alt={props.title}/>
        </a>
    </div>
  )
}
