import React from "react"
import { css } from "@emotion/core"

export default function Layout({ children }) {
  return (
      <div
        css={css`
          padding: 20px 10px;
        `}
      >
        {children}
      </div>
    )
}
