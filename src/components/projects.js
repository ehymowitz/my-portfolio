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
        <h1 ref={ref} >Projects I've Developed</h1>
      </div>
      <div className="project-container">
        <Project
          orient="right"
          link="https://set-sharer.vercel.app/"
          title="Set Sharer (In development)"
          desc="For creating and sharing music sets"
          stack={["Next.png", "MongoDB.svg", "Javascript.png", "Vercel.png", "Sass.png"]}
          api="Many, for grabbing and displaying song information"
          image={photos.setsharer.edges[0].node.childImageSharp.fluid}
        />
        <Project
          orient="left"
          link="https://vibrant-dubinsky-2bb5fe.netlify.app/#/"
          title="Sampler Sequencer"
          desc="MPC3000 / TR808 inspired webapp"
          stack={["React.svg", "Firebase.png", "Javascript.png", "MaterialUI.svg", "Sass.png"]}
          api="Tone.js for synthesizer sounds, CitizenDJ for sample sounds"
          image={photos.sequencer.edges[0].node.childImageSharp.fluid}
        />
        <Project
          orient="right"
          link="http://mezcalmtl.ca/"
          title="Mezcal Montreal"
          desc="Mezcal Montreal landing page"
          stack={["Gatsby.png", "MaterialUI.svg", "Sass.png", "GraphQL.svg", "Getform.svg"]}
          api="GetForm connected to Zapier and Google Docs for event registration"
          image={photos.mezcal.edges[0].node.childImageSharp.fluid}
        />
        <Project
          orient="left"
          link="http://hymowitz.org/"
          title="This very website"
          desc="My portfolio! Where I get to show off my superpowers"
          stack={["Gatsby.png", "GraphQL.svg", "Sass.png", "Netlify.png"]}
          api=""
          image={photos.portfolio.edges[0].node.childImageSharp.fluid}
        />
        <Project
          orient="right"
          link="http://www.dontdiefood.com/"
          title="Don't Die Food"
          desc="Mobile-first webapp for sharing food in local communities"
          stack={["Rails.svg", "Ruby.svg", "HTML5.svg", "CSS3.png", "Javascript.png"]}
          api="Spoonacular for recipe generation"
          image={photos.DDF.edges[0].node.childImageSharp.fluid}
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
