import React from "react"
import Layout from "../components/layout"
import Top from "./top"
import Projects from "./projects"
import Music from "./music"
import Photography from "./photography"

export default function Home() {
  return (
    <Layout>
      <div className='page-section'>
        <Top >
        </Top>
      </div>
      <div className='page-section'>
        <Projects >
        </Projects>
      </div>
      <div className='page-section'>
        <Music >
        </Music>
      </div>
      <div className='page-section'>
        <Projects >
        </Projects>
      </div>
    </Layout>
  )
}
