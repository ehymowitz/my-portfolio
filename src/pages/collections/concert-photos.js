import React from "react";
import Layout from "../../components/fixed/layout";
import Photography from "../../components/photography";
import Fixed from "../../components/fixed/fixed";
import { graphql } from "gatsby";
import Img from "gatsby-image"
import Masonry from 'react-masonry-css'
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const options = {
  buttons: {
    showDownloadButton: false,
    showAutoplayButton: false,
  },
}

export default function PhotoCollection({ data }) {
  const photos = data.allFile.nodes.map( p => p)

  const items = photos.map((item, i) => {
    return (
      <Img
        className="picture"
        fluid={item.childImageSharp.fluid}
        key={i}
      />
    )
  });

  const breakpointColumnsObj = {
    default: 3,
    1200: 2,
    770: 1,
  };

  return(
    <Layout>
      <Fixed>
      </Fixed>
      <SimpleReactLightbox>
        <div className="gallery">
          <SRLWrapper options={options}>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
              >
                {items}
            </Masonry>
          </SRLWrapper>
          <Photography
            heading="Other Collections">
          </Photography>
        </div>
      </SimpleReactLightbox>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/photos\\/collections\\/concert/"}}, sort: {fields: relativePath, order: ASC}) {
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
