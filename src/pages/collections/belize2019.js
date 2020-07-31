import React from "react"
import Layout from "../../components/fixed/layout"
import Photography from "../../components/photography"
import Fixed from "../../components/fixed/fixed"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Masonry from 'react-masonry-css'

export default function PhotoCollection({ data }) {
  const photos = data.allFile.nodes.map( p => p.childImageSharp.fluid)

  const items = photos.map((item, i) => {
    return <Img
      fluid={item}
      key={i}
      style={{
        margin: "0px 10px 10px 0px"
      }}
    />
  });

  // TODO: Impliment modal

  const breakpointColumnsObj = {
    default: 3,
    1200: 2,
    770: 1,
  };

  return(
    <Layout>
      <Fixed>
      </Fixed>
      <div className="gallery">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
          >
          {items}
        </Masonry>
        <Photography
          heading="Other Collections">
        </Photography>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/photos\\/collections\\/belize/"}}, sort: {fields: relativePath, order: ASC}) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
