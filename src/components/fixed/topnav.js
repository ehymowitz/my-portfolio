import React from "react"
import { Link } from "gatsby"

export default function TopNav() {
  return (
    <div className= 'topnav-container'>
      <a className='top-link' href={'/#top'}>
        EH
      </a>
      <ul>
        <Link className= 'topnav-link' to='/#projects'>
          <h2>Projects</h2>
        </Link>
        <Link className= 'topnav-link' id='middle-link' to='/#music'>
          <h2>Music</h2>
        </Link>
        <Link className= 'topnav-link' to='/#photography'>
          <h2>Photo</h2>
        </Link>
      </ul>
    </div>
  )
}
