import React from "react"
import { Link } from "gatsby"
import Header1 from "../components/header1"
import Header2 from "../components/header2"


export default function Home() {
  return (
    <div>
	    <Link to="/projects/">Projects</Link>
	    <Link to="/projects/">Music</Link>
	    <Link to="/projects/">Photography</Link>

	    <Header1 header1Text="Hi, I'm Elie" />
	    <Header2 header2Text="I like making things" />
    </div>
  )
}