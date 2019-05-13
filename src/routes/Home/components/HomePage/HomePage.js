import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  ACCOUNT_PATH,
  LIST_PATH,
  LOGIN_PATH,
  SIGNUP_PATH
} from 'constants/paths'
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import RecipeReviewCard from './card';
import defaultEmpatiaImageUrl from 'static/empatia.png'
import networkingImage from 'static/networking.png'
import profesionalImage from 'static/profesional.png'
import socialImage from 'static/social-care.png'
import sororityImage from 'static/sorority.jpg'
import mentorImage from 'static/me.jpg'

function Home({ classes }) {
  return (
    <div className={classes.root}>
      <div className="flex-row-center">
        {/* <div className={classes.sizeImage}>
          <img  className={classes.image} src={sororityImage} />
        </div> */}
        <div>
          <Typography component="h2" variant="h1" gutterBottom>
              Fintee
          </Typography>
          <Typography component="h2" variant="h4" gutterBottom>
            Creciendo juntas rseremos masss \:)
          </Typography>
        </div>
      </div>
      <div className="flex-row-center">
        <div className={classes.section}>
          <p>
            Loren immmmmm................
          </p>
        </div>

        <div className={classes.section}>
          <h1>WE LEAD. WE GROW.  WE TRANSFORM.</h1>
        </div>

        <div className={classes.section}>
          <Grid container spacing={24} className={classes.grid}>
            <Grid item xs={6}>
              <RecipeReviewCard />
            </Grid>
            <Grid item xs={6}>
              <RecipeReviewCard />
            </Grid>
          </Grid>
        </div>

        <div className={classes.section}>
          <div className={classes.section}>
            <h1>NUESTROS VALORES</h1>
          </div>
          <Grid container spacing={24} className={classes.grid}>
            <Grid item xs={4}>
              <RecipeReviewCard
                src={profesionalImage}
                name='Profesionalismo'
              />
            </Grid>
            <Grid item xs={4}>
              <RecipeReviewCard
                src={socialImage}
                name='Sororidad'
              />
            </Grid>
            <Grid item xs={4}>
              <RecipeReviewCard
                src={defaultEmpatiaImageUrl}
                name='Pasión'
              />
            </Grid>
            <Grid item xs={4}>
              <RecipeReviewCard
                src={defaultEmpatiaImageUrl}
                name='Empatía'
              />
            </Grid>
            <Grid item xs={4}>
              <RecipeReviewCard
                src={networkingImage}
                name='Colaborción'
              />
            </Grid>
            <Grid item xs={4}>
              <RecipeReviewCard
                src={defaultEmpatiaImageUrl}
                name='Corage'
              />
            </Grid>
          </Grid>
        </div>
        <div className={classes.footer}>
          {/* <ListItem className={classes.list}>
            <ListItemIcon>
              <Avatar>S</Avatar>
            </ListItemIcon>
            <ListItemText primary="Sorority" />
          </ListItem>
          <ListItem className={classes.list}>
            <ListItemIcon>
              <Avatar>f</Avatar>
            </ListItemIcon>
            <ListItemText primary="Facebook" />
          </ListItem>
          <ListItem className={classes.list}>
            <ListItemIcon>
              <Avatar>in</Avatar>
            </ListItemIcon>
            <ListItemText primary="Linkedin" />
          </ListItem>
          <ListItem className={classes.list}> */}
            {/* <ListItemIcon>
              <Avatar>t</Avatar>
            </ListItemIcon>
            <ListItemText primary="twitter" />
          </ListItem> */}
        </div>
      </div>
    </div>
  )
}

Home.proptypes = {
  classes: PropTypes.object.isRequired // from enhancer (withStyles)
}

export default Home
