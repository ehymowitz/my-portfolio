import React from "react"
import TopNav from "../components/topnav"
import SocialLinks from "../components/sociallinks"
import Resume from "../components/resume"


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
