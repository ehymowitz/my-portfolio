import React from "react"
import { Link } from "gatsby"

export default function PhotoCover(props) {
  const link = "../../collections/" + props.link
  return(
    <Link className="collection-cover" to={link}>
      <img src={props.cover} alt={props.title}/>
      <div className="collection-text">
        <h3>{props.title}</h3>
        <p>{props.camera}</p>
      </div>
    </Link>
  )
}
