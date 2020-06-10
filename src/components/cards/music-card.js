import React from "react"

export default function MusicCard({link, title, band}) {
  return(
    <div className="music-card">
      <iframe src={link} frameBorder="0" title={title}></iframe>
      <div className="music-text">
        <h2>
          {title}
        </h2>
        <h3>
          {band}
        </h3>
      </div>
    </div>
  )
}
