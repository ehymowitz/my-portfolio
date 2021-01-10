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

const fade = window.matchMedia("(min-width: 770px)").matches

export default function Home() {
  return (
    <Layout>
      <Fixed/>
      <Top />
      <Projects
        fade={fade}
      />
      <Music
        fade={fade}
      />
      <Photography
        heading = "Photos I've Taken"
        fade={fade}
      />
      </Layout>
  )
}
