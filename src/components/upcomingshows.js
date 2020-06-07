import React from "react"
import { css } from "@emotion/core"

export default function UpcomingShows({ children }) {
  return (
    <div
      css={css`
        position: absolute;
        right: 10%;
      `}
    >
      <p>Upcoming Shows</p>
    </div>
  )
}
