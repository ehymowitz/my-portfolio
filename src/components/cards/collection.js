import React from "react"

export default function Collection(props) {
  return(
    <div className="collection-cover">
      <img src={props.cover} alt={props.title}/>
      <div className="collection-text">
        <h3>{props.title}</h3>
        <p>{props.camera}</p>
      </div>
    </div>
  )
}
