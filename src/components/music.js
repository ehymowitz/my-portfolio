import React from "react"
import { useInView } from "react-intersection-observer"
import MusicCard from "../components/cards/music-card"

const colorChange = (logo, color) => {
  logo.style.boxShadow = `0px 0px 10px 8px ${color}`
  logo.style.backgroundColor = color
  setTimeout(() => {
      logo.style.backgroundColor = "rgba(0,0,0,0)"
      logo.style.boxShadow = `0px 0px 0px 0px ${color}`
    }, 500)
}

export default function Music() {

  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  const logo1 = document.querySelector("#instagram > a > svg")
  const logo2 = document.querySelector("#spotify > a > svg")

  if (inView) {
    colorChange(logo1, "rgb(225, 48, 108")
    colorChange(logo2, "rgb(30, 215, 96")
  }

  return (
    <div className='page-section' id='music' ref={ref}>
      <div className="heading"
        data-sal="fade"
        data-sal-easing="ease"
        data-sal-duration="1500"
      >
        <h1>Music I've Played</h1>
      </div>
      <div className="music-container"
        data-sal="fade"
        data-sal-delay="200"
        data-sal-easing="ease"
        data-sal-duration="1500"
      >
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
