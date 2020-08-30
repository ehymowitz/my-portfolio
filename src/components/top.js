import React from "react"
import { useInView } from "react-intersection-observer"
import { document } from "browser-monads"
import Carousel from "./cards/carousel"
import { useStaticQuery, graphql } from "gatsby"

const colorChange = (logo, color) => {
  logo.style.boxShadow = `0px 0px 10px 8px ${color}`
  logo.style.backgroundColor = color
  setTimeout(() => {
      logo.style.backgroundColor = "rgba(0,0,0,0)"
      logo.style.boxShadow = `0px 0px 0px 0px ${color}`
    }, 500)
}

export default function Top() {

  const photos = useStaticQuery(query)

  const [ref, inView] = useInView({
    threshold: 0.9
  })

  const logo = document.querySelector("#linkedin > a > svg")

  if (inView) {
    colorChange(logo, "rgb(40,103,178)")
  }

  return (
    <div className='page-section' id='top' ref={ref}>
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
              image={photos.allFile.edges[0].node.childImageSharp.fluid}
              link="http://mezcalmtl.ca/">
            </Carousel>
          </li>
          <li>
            <Carousel
              title="OAP Live Online"
              desc="with Andria Piperni"
              type="music"
              image={photos.allFile.edges[1].node.childImageSharp.fluid}
              link ="https://youtu.be/D78yEbn_03I">
            </Carousel>
          </li>
          <li>
            <Carousel
              title="Montreal Summer 2020"
              desc="Nikon D300"
              type="photo"
              image={photos.allFile.edges[2].node.childImageSharp.fluid}
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
