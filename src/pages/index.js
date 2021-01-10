import React from "react"
import Layout from "../components/fixed/layout"
import Top from "../components/top"
import Projects from "../components/projects"
import Music from "../components/music"
import Photography from "../components/photography"
import Fixed from "../components/fixed/fixed"
import useMediaQuery from '@material-ui/core/useMediaQuery';

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

export default function Home() {
  const matches = useMediaQuery('(min-width:770px)');

  return (
    <Layout>
      <Fixed/>
      <Top />
      <Projects
        fade={matches}
      />
      <Music
        fade={matches}
      />
      <Photography
        heading = "Photos I've Taken"
        fade={matches}
      />
      </Layout>
  )
}
