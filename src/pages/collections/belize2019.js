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
      src: "/images/photos/collections/Belize2019/1.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/Belize2019/2.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/Belize2019/3.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/Belize2019/4.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/Belize2019/5.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/Belize2019/6.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/Belize2019/7.jpeg",
      width:5,
      height:7
    },
    {
      src: "/images/photos/collections/Belize2019/8.jpeg",
      width:4,
      height:2
    },
    {
      src: "/images/photos/collections/Belize2019/9.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/Belize2019/10.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/Belize2019/12.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/Belize2019/13.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/Belize2019/14.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/Belize2019/15.jpeg",
      width:2,
      height:3
    },
    {
      src: "/images/photos/collections/Belize2019/16.jpeg",
      width:3,
      height:2
    },
    {
      src: "/images/photos/collections/Belize2019/17.jpeg",
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
