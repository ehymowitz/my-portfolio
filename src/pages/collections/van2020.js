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
    src: "/images/photos/collections/MTLSummer2020/1.jpeg",
    width:3,
    height:2
  },
  {
    src: "/images/photos/collections/MTLSummer2020/2.jpeg",
    width:3,
    height:2
  },
  {
    src: "/images/photos/collections/MTLSummer2020/3.jpeg",
    width:3,
    height:2
  },
  {
    src: "/images/photos/collections/MTLSummer2020/4.jpeg",
    width:3,
    height:2
  },
  {
    src: "/images/photos/collections/MTLSummer2020/5.jpeg",
    width:3,
    height:2
  },
  {
    src: "/images/photos/collections/MTLSummer2020/6.jpeg",
    width:3,
    height:2
  },
  {
    src: "/images/photos/collections/MTLSummer2020/7.jpeg",
    width:3,
    height:2
  },
  {
    src: "/images/photos/collections/MTLSummer2020/8.jpeg",
    width:4,
    height:2
  },
  {
    src: "/images/photos/collections/MTLSummer2020/9.jpeg",
    width:3,
    height:2
  },
  {
    src: "/images/photos/collections/MTLSummer2020/10.jpeg",
    width:3,
    height:2
  },
  {
    src: "/images/photos/collections/MTLSummer2020/12.jpeg",
    width:3,
    height:2
  },
  {
    src: "/images/photos/collections/MTLSummer2020/13.jpeg",
    width:3,
    height:2
  },
  {
    src: "/images/photos/collections/MTLSummer2020/14.jpeg",
    width:3,
    height:2
  },
  {
    src: "/images/photos/collections/MTLSummer2020/15.jpeg",
    width:2,
    height:3
  },
  {
    src: "/images/photos/collections/MTLSummer2020/16.jpeg",
    width:3,
    height:2
  },
  {
    src: "/images/photos/collections/MTLSummer2020/17.jpeg",
    width:3,
    height:2
  },
  {
    src: "/images/photos/collections/MTLSummer2020/18.jpeg",
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
