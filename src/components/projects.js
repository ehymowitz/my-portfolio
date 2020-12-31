import React from "react"
import { useInView } from "react-intersection-observer"
import colorChange from "../../color-change"
import { document } from "browser-monads"
import Project from "../components/cards/project"
import { useStaticQuery, graphql } from "gatsby"

export default function Projects() {

  const photos = useStaticQuery(query)

  const [ref, inView] = useInView({
    threshold: 0.9,
  })

  const github = document.querySelector("#github > a > svg")

  if (inView) {
    colorChange(github, "rgba(112, 66, 193, 0.3)")
  }

  return (
    <div className='page-section' id='projects' >
      <div className="heading"
        data-sal="fade"
        data-sal-easing="ease"
        data-sal-duration="1500"
      >
        <h1 ref={ref} >Personal Projects</h1>
        <small>Contact me to see other projects I've worked on!</small>
      </div>
      <div className="project-container">
        <Project
          orient="right"
          link="https://set-sharer.vercel.app/"
          title="Set Sharer"
          desc="For creating and sharing music sets"
          stack={["Next.png", "MongoDB.svg", "Sass.png", "Vercel.png"]}
          api="Many, for grabbing and displaying song information"
          image={photos.setsharer.edges[0].node.childImageSharp.fluid}
        />
        <Project
          orient="left"
          link="https://vibrant-dubinsky-2bb5fe.netlify.app/#/"
          title="Sampler Sequencer"
          desc="MPC3000 / TR808 inspired webapp"
          stack={["React.svg", "Firebase.png", "Sass.png", "Netlify.png"]}
          api="Tone.js for synthesizer sounds, CitizenDJ for sample sounds"
          image={photos.sequencer.edges[0].node.childImageSharp.fluid}
        />
        <Project
          orient="right"
          link="http://hymowitz.org/"
          title="This very website"
          desc="My portfolio! Where I get to show off my superpowers"
          stack={["Gatsby.png", "GraphQL.svg", "Sass.png", "Netlify.png"]}
          api=""
          image={photos.portfolio.edges[0].node.childImageSharp.fluid}
        />
      </div>
    </div>
  )
}

const query = graphql`
  query projectsQuery {
    setsharer: allFile(filter: {absolutePath: {regex: "/SetSharer/"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid(fit: COVER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    sequencer: allFile(filter: {absolutePath: {regex: "/Sequencer/"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid(fit: COVER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    mezcal: allFile(filter: {absolutePath: {regex: "/MezcalMTL/"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid(fit: COVER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    portfolio: allFile(filter: {absolutePath: {regex: "/Portfolio/"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid(fit: COVER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    DDF: allFile(filter: {absolutePath: {regex: "/DDF/"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid(fit: COVER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
