import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import linkStyles from "../styles/components/topnav.module.scss"

export default function TopNav() {
  return (
    <div
        css={css`
        text-align: center;
      `}
    >
      <ul>
        <Link className= {linkStyles.link} to="/projects">Projects</Link>
        <Link className= {linkStyles.link} to="/music/">Music</Link>
        <Link className= {linkStyles.link} to="/photography/">Photography</Link>
      </ul>
    </div>
  )
}
