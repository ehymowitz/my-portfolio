import React from "react"
import Layout from "../components/layout"
import TopNav from "../components/topnav"
import UpcomingShows from "../components/upcomingshows"


export default function Home() {
  return (
    <Layout>
      <TopNav>
      </TopNav>
      <UpcomingShows>
      </UpcomingShows>
	    <h1 className = "center-text">Hi, I'm Elie</h1>
	    <h2 className = "center-text">I like making things</h2>
    </Layout>
  )
}
