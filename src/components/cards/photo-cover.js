import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default function PhotoCover({ link, cover, title, camera }) {
  const photolink = "./collections/" + link
  return(
    <Link className="collection-cover" to={`/${photolink}`}>
      <Img fluid={cover} alt={title}/>
      <div className="collection-text">
        <h3>{title}</h3>
        <p>{camera}</p>
      </div>
    </Link>
  )
}
