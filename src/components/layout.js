import React from "react"
import TopNav from "../components/topnav"
import SideNav from "../components/sidenav"
import SocialLinks from "../components/sociallinks"


export default function Layout({ children }) {
  return (
      <div>
        <TopNav>
        </TopNav>
        <SideNav>
        </SideNav>
        {children}
        <SocialLinks>
        </SocialLinks>
      </div>
    )
}
