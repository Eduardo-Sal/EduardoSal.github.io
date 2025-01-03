import React from "react"

import IconGithub from './images/github'
import IconLinkedIn from './images/in'
import IconTwitter from './images/twitter'
import IconInstagram from './images/instagram'
import IconCodepen from './images/codepen'
import IconCodewars from './images/codewars'


const SocialIconLinks = ({ iconClasses }) => {

  return (
    <>
      <a href="https://github.com/Eduardo-Sal" target="_blank" rel="noopener noreferrer">
        <IconGithub classes={`${iconClasses}`} />
      </a>
      <a href="https://www.linkedin.com/in/eduardo-salinas-a2845120a/" target="_blank" rel="noopener noreferrer">
        <IconLinkedIn classes={`${iconClasses}`}  />
      </a>
      <a href="https://www.instagram.com/eddy.the.creator/" target="_blank" rel="noopener noreferrer">
        <IconInstagram classes={`${iconClasses}`}  />
      </a>
    </>
  )
}

export default SocialIconLinks
