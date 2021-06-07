import React from "react"
import { useInView } from "react-intersection-observer"
import colorChange from "../../color-change"
import { document } from "browser-monads"
import MusicCard from "../components/cards/music-card"
import MusicData from "../data/musicdata"

export default function Music({ fade }) {
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
    <div className="page-section" id="music">
      <div
        className="heading"
        data-sal={fade ? "fade" : ""}
        data-sal-easing="ease"
        data-sal-duration="1500"
      >
        <h1>Music I've Played</h1>
      </div>
      <div
        ref={ref}
        className="music-container"
        data-sal-delay="200"
        data-sal={fade ? "fade" : ""}
        data-sal-easing="ease"
        data-sal-duration="1500"
      >
        {MusicData.map((musicItem, i) => {
          return (
            <MusicCard
              key={i}
              link={musicItem.link}
              title={musicItem.title}
              band={musicItem.band}
            />
          )
        })}
      </div>
    </div>
  )
}
