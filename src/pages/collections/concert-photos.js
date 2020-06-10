import React, { useState, useCallback } from "react"
import Layout from "../../components/fixed/layout"
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";


export default function PhotoCover(props) {
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
      src: "/images/photos/collections/Concerts/1.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/Concerts/2.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/Concerts/3.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/Concerts/4.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/Concerts/5.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/Concerts/6.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/Concerts/7.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/Concerts/8.jpeg",
      width:4,
      height:2
    },
    {
      src: "/images/photos/collections/Concerts/9.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/Concerts/10.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/Concerts/12.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/Concerts/13.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/Concerts/14.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/Concerts/15.jpeg",
      width:2,
      height:3
    },
    {
      src: "/images/photos/collections/Concerts/16.jpeg",
      width:3,
      height:2
    }
  ];

  return(
    <Layout>
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
      </div>
    </Layout>
  )
}
