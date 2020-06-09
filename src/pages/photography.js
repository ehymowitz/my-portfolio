import React from "react"
import Collection from "../components/cards/collection"

export default function Photography() {
  return (
    <div className='page-section' id='photography'>
      <div className="heading">
        <h1>Photos I've Taken</h1>
      </div>
      <div className="photo-collections">
        <Collection
          cover="/images/thumbs/Quavo.png"
          title="Montreal Summer 2020"
          camera="Nikon D300"
        >
        </Collection>
        <Collection
          cover="/images/thumbs/Quavo.png"
          title="Concert Photography"
          camera="Nikon D300"
        >
        </Collection>
        <Collection
          cover="/images/thumbs/Quavo.png"
          title="Montreal Winter 2020"
          camera="Nikon D300, Film"
        >
        </Collection>
        <Collection
          cover="/images/thumbs/Quavo.png"
          title="Vancouver 2020"
          camera="Nikon D300, Film"
        >
        </Collection>
        <Collection
          cover="/images/thumbs/Quavo.png"
          title="Belize 2019"
          camera="Nikon D300, Film"
        >
        </Collection>
      </div>
    </div>
  )
}
