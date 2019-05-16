import React from 'react';
import { countries } from 'countries-apec';
import { fintechsList } from 'routes/Financing/fintechs';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

function FintechItem(fintechData, classes) {
  return(
    // <div className="card">
    //   <img src={ fintechData.img } className="img-fluid min-heigth-img" alt={ fintechData.nameFintech } />
    //   <div className="card-body">
    //     <h5 className="card-title">{ fintechData.nameFintech }</h5>
    //     <div className="text-center">
    //       <a href={ fintechData.webURL } className="btn btn-success">Ask for a loan</a>
    //     </div>
    //   </div>

      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            className={classes.media}
            height="140"
            image={ fintechData.img }
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              { fintechData.nameFintech }
            </Typography>
            <Typography component="p">
              { fintechData.sumary }
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary" >
            Learn More
          </Button> */}
          <a  type='button' target="_blank" href={ fintechData.webURL } className="btn btn-success">Ask for a loan</a>
        </CardActions>
      </Card>
    // </div>
  )
}

class FintechsListComponent extends React.Component {
  state = {
    data: []
  }
  handleSelectCountry = (countryName) => {
    this.setState({ data: [] })
    const dataCountry = fintechsList.filter((fintech) => fintech.country === countryName)
    this.setState({ data: dataCountry })
  }
  render() {
    return(
      <div>
        <form className="form" name="formLogin" role="form">
          <div className="form-group">
            <select onChange={(e) => { this.handleSelectCountry(e.target.value) }} id="country" className="form-control">
              <option selected value="select">Select your country</option>
              { countries.map(country => <option key={country.id}  value={country.name}>{ country.name }</option>) }
            </select>
          </div>
        </form>
        <List className={this.props.classes.root}>
          { this.state.data.map(fintech => {
            return (
              <ListItem className="my-2" key={ fintech.id }>
                {FintechItem(fintech, this.props.classes)}
              </ListItem>
            )
          }) }
        </List>
      </div>
    )
  }
}

export default withStyles(styles)(FintechsListComponent);