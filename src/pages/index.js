import React from "react"
import Layout from "../components/fixed/layout"
import Top from "../components/top"
import Projects from "../components/projects"
import Music from "../components/music"
import Photography from "../components/photography"
import Fixed from "../components/fixed/fixed"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

export default function Home() {
  return (
    <Layout>
      <Fixed>
      </Fixed>
      <Top>
      </Top>
      <Projects>
      </Projects>
      <Music>
      </Music>
      <Photography
        heading = "Photos I've Taken">
      </Photography>
    </Layout>
  )
}
