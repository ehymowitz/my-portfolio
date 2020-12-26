import React from "react"
import { useInView } from "react-intersection-observer"
import colorChange from "../../color-change"
import { document } from "browser-monads"
import Carousel from "./cards/carousel"
import { useStaticQuery, graphql } from "gatsby"

export default function Top() {

  const photos = useStaticQuery(query)

  const [ref, inView] = useInView({
    threshold: 0.9
  })

  const linkedin = document.querySelector("#linkedin > a > svg")

  if (inView) {
    colorChange(linkedin, "rgba(40, 103, 178, 0.3)")
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
              title="Set Sharer"
              desc="For creating and sharing music sets"
              type="code"
              image={photos.code.edges[0].node.childImageSharp.fluid}
              link="https://set-sharer.vercel.app/"
            />
          </li>
          <li>
            <Carousel
              title="Christmastime"
              desc="with Andria Piperni"
              type="music"
              image={photos.music.edges[0].node.childImageSharp.fluid}
              link="https://www.youtube.com/watch?v=pjll0_TKvLQ"
            />
          </li>
          <li>
            <Carousel
              title="Cottage Trip 2020"
              desc="Nikon D300"
              type="photo"
              image={photos.photo.edges[0].node.childImageSharp.fluid}
              link="/#photography"
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

const query = graphql`
  query recentQuery {
    code: allFile(filter: {absolutePath: {regex: "/SetSharer/"}}) {
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
    music: allFile(filter: {absolutePath: {regex: "/xmastime/"}}) {
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
    photo: allFile(filter: {absolutePath: {regex: "/Cottage/"}}) {
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
