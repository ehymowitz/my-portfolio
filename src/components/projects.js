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

  const logo = document.querySelector("#github > a > svg")

  if (inView) {
    colorChange(logo, "rgba(112, 66, 193, 0.3)")
  }

  return (
    <div className='page-section' id='projects' >
      <div className="heading"
        data-sal="fade"
        data-sal-easing="ease"
        data-sal-duration="1500"
      >
        <h1 ref={ref} >Projects I've Developed</h1>
      </div>
      <div className="project-container">
        <Project
          orient="right"
          link="http://mezcalmtl.ca/"
          title="Mezcal Montreal"
          desc="Mezcal Montreal landing page"
          stack={["Gatsby.png", "MaterialUI.svg", "Sass.png", "GraphQL.svg", "Getform.svg"]}
          api="GetForm connected to Zapier and Google Docs for event registration"
          image={photos.mezcal.edges[0].node.childImageSharp.fluid}
          >
        </Project>
        <Project
          orient="left"
          link="http://hymowitz.org/"
          title="This very website"
          desc="My portfolio! Where I get to show off my superpowers"
          stack={["Gatsby.png", "GraphQL.svg", "Sass.png", "Netlify.png"]}
          api=""
          image={photos.portfolio.edges[0].node.childImageSharp.fluid}
          >
        </Project>
        <Project
          orient="right"
          link="http://www.dontdiefood.com/"
          title="Don't Die Food"
          desc="Mobile-first webapp for sharing food in local communities"
          stack={["Rails.svg", "Ruby.svg", "HTML5.svg", "CSS3.png", "Javascript.png"]}
          api="Spoonacular for recipe generation"
          image={photos.DDF.edges[0].node.childImageSharp.fluid}
          >
        </Project>
        <Project
          orient="left"
          link="https://blockwagon.herokuapp.com/"
          title="Blockwagon"
          desc="Online marketplace for VHS tapes"
          stack={["Rails.svg", "Ruby.svg", "HTML5.svg", "CSS3.png", "Javascript.png"]}
          api="OMDB for generating video information"
          image={photos.blockwagon.edges[0].node.childImageSharp.fluid}
          >
        </Project>
      </div>
    </div>
  )
}

const query = graphql`
  query projectsQuery {
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
    blockwagon: allFile(filter: {absolutePath: {regex: "/Blockwagon/"}}) {
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
