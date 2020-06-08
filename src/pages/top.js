import React from "react"
import Carosel from "../components/cards/carosel"

export default function Top() {
  return (
    <div className='page-section'>
      <div className = 'upcomingshows-container'>
        <p>Upcoming Shows</p>
      </div>
      <div className = 'hello-text'>
        <h1>Hi, I'm Elie</h1>
        <h2>I like making things</h2>
      </div>
      <div className = 'recent-projects'>
        <h3>Recent Projects</h3>
        <ul className = 'projects-container'>
          <li>
            <Carosel
              title="Don't Die Food"
              desc="Mobile First Rails App"
              type="code"
              image='../../images/thumbs/DDF.png'
              link="http://www.dontdiefood.com/">
            </Carosel>
          </li>
          <li>
            <Carosel
              title="OAP Live Online"
              desc="with Andria Piperni"
              type="music"
              image="../../images/thumbs/Andria.png"
              link ="https://youtu.be/D78yEbn_03I">
            </Carosel>
          </li>
          <li>
            <Carosel
              title="Montreal Summer 2020"
              desc="Nikon D300"
              type="photo"
              image="../../images/thumbs/Quavo.png">
            </Carosel>
          </li>
        </ul>
      </div>
    </div>
  )
}
