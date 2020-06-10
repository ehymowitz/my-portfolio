import React, { useState, useCallback } from "react"
import Layout from "../../components/fixed/layout"
import Photography from "../../components/photography"
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Fixed from "../../components/fixed/fixed"

export default function PhotoCollection() {
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

  const photos = [
    {
      src: "/images/photos/collections/van2020/1.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/van2020/2.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/van2020/3.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/van2020/4.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/van2020/5.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/van2020/6.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/van2020/7.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/van2020/8.jpeg",
      width:3,
      height:4
    }
  ];

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
