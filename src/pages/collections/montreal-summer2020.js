import React, { useState, useCallback } from "react"
import Layout from "../../components/fixed/layout"
import Photography from "../../components/photography"
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Fixed from "../../components/fixed/fixed"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/photos\\/collections\\/mtls/"}}, sort: {fields: relativePath, order: ASC}) {
      nodes {
        relativePath
        childImageSharp {
          original {
            src
            height
            width
          }
        }
      }
    }
  }
`

export default function PhotoCollection({ data }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photos = data.allFile.nodes.map ( p => {
    return {
      src: p.childImageSharp.original.src,
      height: p.childImageSharp.original.height,
      width: p.childImageSharp.original.width
    }
  })


  return(
    <Layout>
    <Fixed>
    </Fixed>
      <div className="gallery">
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
        <Photography
          heading="Other Collections">
        </Photography>
      </div>
    </Layout>
  )
}
