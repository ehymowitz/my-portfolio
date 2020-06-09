import React from "react"
import Collection from "../components/cards/collection"

export default function Photography() {
  return (
    <div className='page-section' id='photography'>
      <div className="heading">
        <h1>Photos I've Taken</h1>
      </div>
      <div className="photo-collections">
        <Collection></Collection>
      </div>
    </div>
  )
}
