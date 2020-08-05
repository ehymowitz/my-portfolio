import React from "react"
import Carousel from "./cards/carousel"
import { useStaticQuery, graphql } from "gatsby"

export default function Top() {
  const photos = useStaticQuery(query)

  console.log(photos.allFile.edges[0].node.childImageSharp.fluid)

  return (
    <div className='page-section' id='top'>
      <div className = 'hello-text'>
        <h1>Hi, I'm Elie</h1>
        <h2>I'm a web developer / musician / maker of things.</h2>
        <h2>Born in Seattle, living in Montreal.</h2>
      </div>
      <div className = 'recent-projects'>
        <h3>Recent Projects</h3>
        <ul className = 'projects-container'>
          <li>
            <Carousel
              title="Mezcal MTL"
              desc="Lightweight Landing Page"
              type="code"
              image='/images/recent/Mezcal.png'
              link="http://mezcalmtl.ca/">
            </Carousel>
          </li>
          <li>
            <Carousel
              title="OAP Live Online"
              desc="with Andria Piperni"
              type="music"
              image="/images/recent/Andria.png"
              link ="https://youtu.be/D78yEbn_03I">
            </Carousel>
          </li>
          <li>
            <Carousel
              title="Montreal Summer 2020"
              desc="Nikon D300"
              type="photo"
              image="/images/recent/Quavo.png"
              link="/#photography">
            </Carousel>
          </li>
        </ul>
      </div>
    </div>
  )
}

const query = graphql`
  query recentQuery {
    allFile(filter: {absolutePath: {regex: "/recent/"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
