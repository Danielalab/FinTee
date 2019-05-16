import React from 'react';
import { mentorsList } from '../../../Mentoring/utils';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button'


const styles = (theme) => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'black',
  },
  chip: {
    margin: 2,
    fontSize: 10,
  },
  button: {
    border: "3px solid #A64D78",
    color: "#333",
    margin: "3px",
    fontWeight: 700,
    cursor: 'pointer',
    borderRadius: 16,
  }
});

function MentorItem(MentorData, classes) {
  return(
    <ListItem>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {MentorData.name.charAt(0)}
            </Avatar>
          }
          title={ MentorData.name }
          subheader={ MentorData.job }
        />
        <CardMedia
          className={classes.media}
          image={MentorData.image}
          title="Women entreprenauters"
        />
        <CardContent>
        <Typography component="p" style={{ fontWeight: 'bold' }}> Skills you would like to advise:</Typography>
          {MentorData.skills.map(item =>
            <Chip label={item} className={classes.chip} variant="outlined" />
          )}
          <Typography component="p">
            {MentorData.summary}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <Button
            type="button"
            className={classes.button}
          >
            Contact
          </Button>
        </CardActions>
      </Card>
    </ListItem>
  )
}

function MentorListPage ({ classes }) {
  return(
    <section className="d-flex justify-content-center flex-column m-4">
      <p className="text-center">
        Congratulations! your registration has been a success. <br/>
        We show you all the Mentor who made a match with you so that you can start
        promoting your business.
      </p>
      <List className={classes.root}>
        { mentorsList.map(Mentor => MentorItem(Mentor, classes)) }
      </List>
      {/* <p className="text-center">
        Congratulations! your registration has been a success. <br/>
        We show you all the mentors who made a match with you so that you can start
        promoting your business.
      </p>
      <ul>
        { mentorsList.map(mentor => MentorItem(mentor)) }
      </ul>; */}
    </section>
  )
}

export default withStyles(styles)(MentorListPage);