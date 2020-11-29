import React from "react"
import { useInView } from "react-intersection-observer"
import colorChange from "../../color-change"
import { document } from "browser-monads"
import MusicCard from "../components/cards/music-card"


export default function Music() {

  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  const instagram = document.querySelector("#instagram > a > svg")
  const spotify = document.querySelector("#spotify > a > svg")

  if (inView) {
    colorChange(instagram, "rgba(225, 48, 108, 0.3")
    colorChange(spotify, "rgba(30, 215, 96, 0.3")
  }

  return (
    <div className='page-section' id='music'>
      <div className="heading"
        data-sal="fade"
        data-sal-easing="ease"
        data-sal-duration="1500"
      >
        <h1>Music I've Played</h1>
      </div>
      <div ref={ref} className="music-container"
        data-sal="fade"
        data-sal-delay="200"
        data-sal-easing="ease"
        data-sal-duration="1500"
      >
        <MusicCard
          link="https://www.youtube.com/embed/a8sppGMn8gc?start=1045"
          title="Northern Touch Music Festival"
          band="Hansom Eli">
        </MusicCard>
        <MusicCard
          link="https://www.youtube.com/embed/D78yEbn_03I?start=960"
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
