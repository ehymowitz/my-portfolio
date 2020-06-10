import React from "react"

export default function TopNav() {
  return (
    <div className= 'topnav-container'>
      <a className='top-link' href={'/#top'}>
        EH
      </a>
      <ul>
        <a className= 'topnav-link' href={'/#projects'}>
          <h2>Projects</h2>
        </a>
        <h2>&#124;</h2>
        <a className= 'topnav-link' href={'/#music'}>
          <h2>Music</h2>
        </a>
        <h2>&#124;</h2>
        <a className= 'topnav-link' href={'/#photography'}>
          <h2>Photography</h2>
        </a>
      </ul>
    </div>
  )
}
