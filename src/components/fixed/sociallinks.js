import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {
  FaFacebookF, FaInstagram, FaSpotify, FaLinkedinIn, FaGithub
} from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai"

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SocialLinks() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
