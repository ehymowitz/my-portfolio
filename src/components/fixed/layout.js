import React from "react"
import Helmet from "react-helmet"

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <title>Elie Hymowitz</title>
      </Helmet>
      {children}
    </>
  )
}
