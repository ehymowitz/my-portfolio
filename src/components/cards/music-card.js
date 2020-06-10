import React from "react"

export default function MusicCard(props) {
  return(
    <div className="music-card">
      <iframe src={props.link} frameBorder="0"></iframe>
      <div className="music-text">
        <h2>
          {props.title}
        </h2>
        <h3>
          {props.band}
        </h3>
      </div>
    </div>
  )
}
