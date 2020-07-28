import React from "react"
import ContactForm from "../form"
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
    backgroundColor: "#F5F5F5",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "10px",
    outline: 'none',
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
          <a onClick={handleOpen}>
            <AiOutlineMail />
          </a>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <ContactForm />
              </div>
            </Fade>
          </Modal>
        </li>
      </ul>
    </div>
  )
}
