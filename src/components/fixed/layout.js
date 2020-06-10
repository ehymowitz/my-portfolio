import React from "react"
import TopNav from "./topnav"
import SocialLinks from "./sociallinks"
import Resume from "./resume"
import Helmet from "react-helmet"

export default function Layout({ children }) {
  return (
      <>
        <Helmet>
          <title>Elie Hymowitz</title>
        </Helmet>
        <div className='static-object'>
          <TopNav>
          </TopNav>
          {children}
          <SocialLinks>
          </SocialLinks>
          <Resume>
          </Resume>
      </div>
      </>
    )
}
