import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import linkStyles from "../styles/components/layout.module.scss"

export default function Layout({ children }) {
  return (
    <div
      css = {css`
        margin: 3rem auto;
        maxWidth: 650;
      `}
    >
      <ul>
        <Link className= {linkStyles.link} to="/projects">Projects</Link>
        <Link className= {linkStyles.link} to="/music/">Music</Link>
        <Link className= {linkStyles.link} to="/photography/">Photography</Link>
      </ul>
      {children}
    </div>
  )
}
