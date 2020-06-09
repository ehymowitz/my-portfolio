import React from "react"
import Layout from "../../components/fixed/layout"
import Gallery from "react-photo-gallery";

export default function PhotoCover(props) {
  const photos = [
    {
      src: "/images/photos/covers/MTLSummer2020.jpeg",
      width: 4,
      height: 3
    },
  ]

  const BasicRows = () => <Gallery photos={photos} />;

  return(
    <Layout>
      <BasicRows/>
    </Layout>
  )
}
