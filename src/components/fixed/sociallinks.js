import React from "react"
import {
  FaFacebookF, FaInstagram, FaSpotify, FaLinkedinIn, FaGithub
} from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai"

export default function SocialLinks() {
  return (
    <div className='social-links'>
      <ul>
        <li>
          <a href='https://www.facebook.com/ElieHymowitz' target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/elie.s.h/' target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href='https://open.spotify.com/playlist/2ieh5fIUHEdPw5dnwS2wcp?si=Q7GnR3flREOSEcb3ME6HzA' target="_blank" rel="noreferrer">
            <FaSpotify />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/eliehymowitz/' target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a href='https://github.com/ehymowitz' target="_blank" rel="noreferrer">
            <FaGithub /></a>
        </li>
        <li>
          <a href='https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=ehymowitz@gmail.com' target="_blank" rel="noreferrer">
            <AiOutlineMail /></a>
        </li>
      </ul>
    </div>
  )
}
