import React, { useState } from "react"
import ContactForm from "../form"
import colorChange from "../../../color-change"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {
  FaInstagram, FaSpotify, FaLinkedinIn, FaGithub
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
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='social-links'>
      <ul>
        <li id="linkedin">
          <a href='https://www.linkedin.com/in/eliehymowitz/' target="_blank" rel="noreferrer">
            <FaLinkedinIn onMouseEnter={({target})=>{colorChange(target, "rgba(40, 103, 178, 0.3)")}}/>
          </a>
        </li>
        <li id="github">
          <a href='https://github.com/ehymowitz' target="_blank" rel="noreferrer">
            <FaGithub onMouseEnter={({target})=>{colorChange(target, "rgba(112, 66, 193, 0.3)")}}/></a>
        </li>
        <li id="instagram" >
          <a href='https://www.instagram.com/elie.s.h/' target="_blank" rel="noreferrer">
            <FaInstagram onMouseEnter={({target})=>{colorChange(target, "rgba(225, 48, 108, 0.3)")}}/>
          </a>
        </li>
        <li id="spotify">
          <a href='https://open.spotify.com/playlist/2ieh5fIUHEdPw5dnwS2wcp?si=Q7GnR3flREOSEcb3ME6HzA' target="_blank" rel="noreferrer">
            <FaSpotify onMouseEnter={({target})=>{colorChange(target, "rgba(30, 215, 96, 0.3)")}}/>
          </a>
        </li>
        <li id="mail">
          <a href="/#" onClick={handleOpen}>
            <AiOutlineMail onMouseEnter={({target})=>{colorChange(target, "rgba(198, 198, 198, 0.3)")}}/>
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
