import React from "react"
import Layout from "../components/layout"
import { FaScroll } from "react-icons/fa"


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
      <div className="resume">
        <a href="" target="_blank">CV</a>
      </div>
    </Layout>
  )
}
