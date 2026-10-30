import React from 'react'
import OurStory from '../../components/AboutSections/OurStory'
import StatCards from '../../components/AboutSections/StatCards'
import TeamMembers from '../../components/AboutSections/TeamMembers'
import ServicePolicy from '../../components/AboutSections/ServicePolicy'

const About = () => {
  return (
    <div className='about-page-container'>
      <OurStory/>
      <StatCards/>
      <TeamMembers/>
      <ServicePolicy/>
    </div>
  )
}

export default About