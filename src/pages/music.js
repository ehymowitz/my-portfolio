import React from "react"
import MusicCard from "../components/cards/music-card"

export default function Music() {
  return (
    <div className='page-section' id='music'>
      <div className="heading">
        <h1>Music I've Played</h1>
      </div>
      <div className="music-container">
        <MusicCard
          link="https://www.youtube.com/embed/D78yEbn_03I"
          title="OAP Live Online"
          band="Andria Piperni">
        </MusicCard>
        <MusicCard
          link="https://www.youtube.com/embed/LIs5VFrIQmQ"
          title="Say Something [Live at Artjam]"
          band="Andria Piperni">
        </MusicCard>
        <MusicCard
          link="https://www.youtube.com/embed/LJVebBmJKI8"
          title="Disco Yes by Tom Misch [Live at Blue Dog]"
          band="Cooler Than Freezing">
        </MusicCard>
        <MusicCard
          link="https://www.youtube.com/embed/pei4ttxVYXs"
          title="Wooden Sphere [Live Studio]"
          band="Aquarius Dreams">
        </MusicCard>
        <MusicCard
          link="https://www.youtube.com/embed/Q0QxADdTedk"
          title="Mystery of Love [Live Studio]"
          band="Aquarius Dreams">
        </MusicCard>
        <MusicCard
          link="https://www.youtube.com/embed/vxTMA7L_Ckg"
          title="Bound by the Sea [Live Studio]"
          band="Aquarius Dreams">
        </MusicCard>
      </div>
    </div>
  )
}
