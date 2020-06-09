import React from "react"

export default function MusicCard(props) {
  const classes = "music-card "
  return(
    <div className={classes}>
      <iframe src={props.link} frameborder="0"></iframe>
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
