import React from "react"
import Layout from "../../components/fixed/layout"
import Photography from "../../components/photography"
import Fixed from "../../components/fixed/fixed"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Masonry from 'react-masonry-css'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

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


export default function PhotoCollection({ data }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  var picture = data.allFile.nodes[1].childImageSharp.fluid

  const handleOpen = (event) => {
    let target = event.target.parentElement.parentElement.parentElement.dataset.id
    picture = data.allFile.nodes[target].childImageSharp.fluid
    console.log(picture)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const photos = data.allFile.nodes.map( p => p)

  const items = photos.map((item, i) => {
    return (
      <div onClick={handleOpen}
           onKeyPress={handleOpen}
           role="button"
           tabIndex="-1"
           key={i}
           className="picture-modal"
           data-id={i}
      >
        <Img
          fluid={item.childImageSharp.fluid}
        />
      </div>
    )
  });

  // TODO: Impliment modal

  const breakpointColumnsObj = {
    default: 3,
    1200: 2,
    770: 1,
  };

  return(
    <Layout>
      <Fixed>
      </Fixed>
      <div className="gallery">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
          >
          {items}
        </Masonry>
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
            <div>
              <Img fluid={picture} style={{width: "50vw" }}/>
            </div>
          </Fade>
        </Modal>
        <Photography
          heading="Other Collections">
        </Photography>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/photos\\/collections\\/belize/"}}, sort: {fields: relativePath, order: ASC}) {
      nodes {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
