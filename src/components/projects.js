import React from "react"
import Project from "../components/cards/project"

export default function Projects() {
  return (
    <div className='page-section' id='projects'>
      <div className="heading"
        data-sal="fade"
        data-sal-easing="ease"
        data-sal-duration="1500"
      >
        <h1>Projects I've Developed</h1>
      </div>
      <div className="project-container">
        <Project
          orient="right"
          link="http://mezcalmtl.ca/"
          title="Mezcal Montreal"
          desc="Mezcal Montreal landing page"
          stack="Gatsby, Sass, and GraphQL for image loading"
          api="GetForm connected to Zapier and Google Docs for event registration"
          image="/images/projects/MezcalMTL.png"
          >
        </Project>
        <Project
          orient="left"
          link="http://www.dontdiefood.com/"
          title="Don't Die Food"
          desc="Mobile-first webapp for sharing food in local communities"
          stack="Ruby on Rails - Ruby, HTML, CSS, JS "
          api="Spoonacular for recipe generation"
          image="/images/projects/DDF.png"
          >
        </Project>
        <Project
          orient="right"
          link="https://blockwagon.herokuapp.com/"
          title="Blockwagon"
          desc="Online marketplace for VHS tapes"
          stack="Ruby on Rails - Ruby, HTML, CSS, JS "
          api="OMDB for generating video information"
          image="/images/projects/Blockwagon.png">>
        </Project>
        <Project
          orient="left"
          link="https://github.com/ehymowitz/Graphics-Projects"
          title="Interactive Animations"
          desc="Interactive graphics projects"
          stack="p5.js, initially written in Processing (Java)"
          api=""
          image="/images/projects/Graphics.png">>
        </Project>
      </div>
    </div>
  )
}
