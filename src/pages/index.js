import React from "react"
import Layout from "../components/fixed/layout"
import Top from "./top"
import Projects from "./projects"
import Music from "./music"
import Photography from "./photography"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

export default function Home() {
  return (
    <Layout>
      <Top>
      </Top>
      <Projects>
      </Projects>
      <Music>
      </Music>
      <Photography>
      </Photography>
    </Layout>
  )
}
