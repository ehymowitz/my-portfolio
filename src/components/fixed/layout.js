import React from "react"
import Helmet from "react-helmet"

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <title>Elie Hymowitz</title>
        <meta name="description" content= "Elie Hymowitz's Web Portfolio. I'm a web developer and musician, and I take photos too."/>
      </Helmet>
      {children}
    </>
  )
}
