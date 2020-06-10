import React from "react"
import { Link } from "gatsby"

export default function PhotoCover({ link, cover, title, camera }) {
  const photolink = "./collections/" + link
  return(
    <Link className="collection-cover" to={photolink}>
      <img src={cover} alt={title}/>
      <div className="collection-text">
        <h3>{title}</h3>
        <p>{camera}</p>
      </div>
    </Link>
  )
}
