import React from "react"
import PhotoCover from "./cards/photo-cover"
import Layout from "./fixed/layout"

export default function Photography({heading}) {
  return (
    <Layout>
      <div className='page-section' id='photography'>
        <div className="heading"
          data-sal="fade"
          data-sal-easing="ease"
          data-sal-duration="1500"
        >
          <h1>{heading}</h1>
        </div>
        <div className="photo-collections"
          data-sal="fade"
          data-sal-delay="200"
          data-sal-easing="ease"
          data-sal-duration="1500"
        >
          <PhotoCover
            link="montreal-summer2020"
            cover="/images/photos/covers/MTLSummer2020.jpeg"
            title="Montreal Summer 2020"
            camera="Nikon D300"
          >
          </PhotoCover>
          <PhotoCover
            link="concert-photos"
            cover="/images/photos/covers/Concerts.jpeg"
            title="Concert Photography"
            camera="Nikon D7000"
          >
          </PhotoCover>
          <PhotoCover
            link="montreal-winter2020"
            cover="/images/photos/covers/MTLWinter2020.jpeg"
            title="Montreal Winter/ Spring 2020"
            camera="Nikon D300, Film"
          >
          </PhotoCover>
          <PhotoCover
            link="van2020"
            cover="/images/photos/covers/Van2020.jpeg"
            title="Vancouver 2020"
            camera="Nikon D300"
          >
          </PhotoCover>
          <PhotoCover
            link="belize2019"
            cover="/images/photos/covers/Belize2019.jpeg"
            title="Belize 2019"
            camera="Film, Cell Phone"
          >
          </PhotoCover>
        </div>
      </div>
    </Layout>
  )
}
