import React from "react"
import Layout from "../components/layout"
import Resume from "../components/resumelink"


export default function Home() {
  return (
    <Layout>
      <div className = 'upcomingshows-container'>
        <p>Upcoming Shows</p>
      </div>
      <div className = 'hello-text'>
  	    <h1 className = 'primary'>Hi, I'm Elie</h1>
  	    <h2 className = 'secondary'>I like making things</h2>
      </div>
      <Resume>
      </Resume>
    </Layout>
  )
}
