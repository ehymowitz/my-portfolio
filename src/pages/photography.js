import React from "react"
import PhotoCover from "../components/cards/photo-cover"

export default function Photography() {
  return (
    <div className='page-section' id='photography'>
      <div className="heading">
        <h1>Photos I've Taken</h1>
      </div>
      <div className="photo-collections">
        <PhotoCover
          cover="/images/photos/covers/MTLSummer2020.jpeg"
          title="Montreal Summer 2020"
          camera="Nikon D300"
        >
        </PhotoCover>
        <PhotoCover
          cover="/images/photos/covers/Concerts.jpeg"
          title="Concert Photography"
          camera="Nikon D300"
        >
        </PhotoCover>
        <PhotoCover
          cover="/images/photos/covers/MTLWinter2020.jpeg"
          title="Montreal Winter 2020"
          camera="Nikon D300, Film"
        >
        </PhotoCover>
        <PhotoCover
          cover="/images/photos/covers/Van2020.jpeg"
          title="Vancouver 2020"
          camera="Nikon D300"
        >
        </PhotoCover>
        <PhotoCover
          cover="/images/photos/covers/Belize2019.jpeg"
          title="Belize 2019"
          camera="Nikon D300, Film"
        >
        </PhotoCover>
      </div>
    </div>
  )
}
