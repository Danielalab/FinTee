import React from 'react';
// import { makeStyles } from '@material-ui/styles';
import classnames from 'classnames';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';


const styles = () => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: '150px',
    paddingTop: '150px', // 16:9
  },
  responsive: {
    width: '100%',
    height: 'auto',
  }
});

function RecipeReviewCard({src, name}) {
  const classes = styles();
  return (
    <Card className={classes.card}>
      <div style={{ width: '150px', height: '150px' }} >
        <img style={{ width: '100%', height: 'auto' }}  src={src} />
      </div>
      <CardContent>
        <Typography variant="headline">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles) (RecipeReviewCard);