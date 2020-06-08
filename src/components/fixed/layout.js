import React from "react"
import TopNav from "./topnav"
import SocialLinks from "./sociallinks"
import Resume from "./resume"


export default function Layout({ children }) {
  return (
      <div className='static-object'>
        <TopNav>
        </TopNav>
        {children}
        <SocialLinks>
        </SocialLinks>
        <Resume>
        </Resume>
      </div>
    )
}
