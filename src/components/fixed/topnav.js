import React from "react"
import { Link } from "gatsby"

export default function TopNav() {
  return (
    <div className= 'topnav-container'>
      <ul>
        <Link className= 'topnav-link' to="/projects">
          <h2>Projects</h2>
        </Link>
        <h2>&#124;</h2>
        <Link className= 'topnav-link' to="/music/">
          <h2>Music</h2>
        </Link>
        <h2>&#124;</h2>
        <Link className= 'topnav-link' to="/photography/">
          <h2>Photography</h2>
        </Link>
      </ul>
    </div>
  )
}
