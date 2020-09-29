import React from "react"
import { useInView } from "react-intersection-observer"
import colorChange from "../../color-change"
import { document } from "browser-monads"
import PhotoCover from "./cards/photo-cover"
import { useStaticQuery, graphql } from "gatsby"

export default function Photography({heading}) {
  const photos = useStaticQuery(query)

  const [ref, inView] = useInView({
    threshold: 0.2
  })

  const mail = document.querySelector("#mail > a > svg")

  if (inView) {
    colorChange(mail, "rgba(198, 198, 198, 0.3)")
  }

  return (
    <div className='page-section' id='photography' >
      <div className="heading"
        data-sal="fade"
        data-sal-easing="ease"
        data-sal-duration="1500"
      >
        <h1>{heading}</h1>
      </div>
      <div ref={ref} className="photo-collections"
        data-sal="fade"
        data-sal-delay="200"
        data-sal-easing="ease"
        data-sal-duration="1500"
      >
        <PhotoCover
          link="cottage2020"
          cover={photos.cottage.edges[0].node.childImageSharp.fluid}
          title="Cottage Trip 2020"
          camera="Nikon D300"
        />
        <PhotoCover
          link="montreal-summer2020"
          cover={photos.summer.edges[0].node.childImageSharp.fluid}
          title="Montreal Summer 2020"
          camera="Nikon D300"
        />
        <PhotoCover
          link="concert-photos"
          cover={photos.concert.edges[0].node.childImageSharp.fluid}
          title="Concert Photography"
          camera="Nikon D7000"
        />
        <PhotoCover
          link="montreal-winter2020"
          cover={photos.winter.edges[0].node.childImageSharp.fluid}
          title="Montreal Winter/ Spring 2020"
          camera="Nikon D300, Film"
        />
        <PhotoCover
          link="van2020"
          cover={photos.van.edges[0].node.childImageSharp.fluid}
          title="Vancouver 2020"
          camera="Nikon D300"
        />
        <PhotoCover
          link="belize2019"
          cover={photos.belize.edges[0].node.childImageSharp.fluid}
          title="Belize 2019"
          camera="Film, Cell Phone"
        />
      </div>
    </div>
  )
}

const query = graphql`
  query photographyQuery {
    summer: allFile(filter: {absolutePath: {regex: "/covers\/MTLSummer/"}}) {
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
    concert: allFile(filter: {absolutePath: {regex: "/covers\/Concert/"}}) {
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
    winter: allFile(filter: {absolutePath: {regex: "/covers\/MTLWinter/"}}) {
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
    van: allFile(filter: {absolutePath: {regex: "/covers\/Van/"}}) {
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
    belize: allFile(filter: {absolutePath: {regex: "/covers\/Belize/"}}) {
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
    cottage: allFile(filter: {absolutePath: {regex: "/covers\/Cottage/"}}) {
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
