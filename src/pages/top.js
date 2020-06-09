import React from "react"
import Carousel from "../components/cards/carousel"

export default function Top() {
  return (
    <div className='page-section' id='top'>
      <div className = 'hello-text'>
        <h1>Hi, I'm Elie</h1>
        <h2>I'm a web developer / musician / maker of things.</h2>
        <h2>Born in Seattle, living in Montreal.</h2>
      </div>
      <div className = 'recent-projects'>
        <h3>Recent Projects</h3>
        <ul className = 'projects-container'>
          <li>
            <Carousel
              title="Don't Die Food"
              desc="Mobile First Rails App"
              type="code"
              image='/images/recent/DDF.png'
              link="http://www.dontdiefood.com/">
            </Carousel>
          </li>
          <li>
            <Carousel
              title="OAP Live Online"
              desc="with Andria Piperni"
              type="music"
              image="/images/recent/Andria.png"
              link ="https://youtu.be/D78yEbn_03I">
            </Carousel>
          </li>
          <li>
            <Carousel
              title="Montreal Summer 2020"
              desc="Nikon D300"
              type="photo"
              image="/images/recent/Quavo.png">
            </Carousel>
          </li>
        </ul>
      </div>
    </div>
  )
}
