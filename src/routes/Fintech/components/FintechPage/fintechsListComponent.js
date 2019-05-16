import React from 'react';
import { countries } from 'countries-apec';
import { businessList } from 'routes/Financing/fintechs';
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
    height: 'auto',
    width: '100%',
  },
  button: {
    border: "3px solid #A64D78",
    color: "#333",
    margin: "3px",
    fontWeight: 700,
    cursor: 'pointer',
    borderRadius: 16,
  }
};

function BusinessItem(businessData, classes) {
  return(
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="140"
          image={ businessData.img }
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" style={{ fontWeight: 700 }}>
            S/. {businessData.amount}
          </Typography>
          <Typography component="p">
            { businessData.reason }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a  target="_blank"
          href={ businessData.linkedin}
        >
        <Button className={classes.button} >
          Ask for a loan
        </Button>
        </a>
      </CardActions>
    </Card>
  )
}

class BusinessListComponent extends React.Component {
  state = {
    data: []
  }
  handleSelectCountry = (countryName) => {
    this.setState({ data: [] })
    const dataCountry = businessList.filter((fintech) => fintech.country === countryName)
    this.setState({ data: dataCountry })
  }
  render() {
    console.log(" Bravo llegaste  hasta here")
    console.log(businessList)
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
          { this.state.data.map(business => {
            return (
              <ListItem className="my-2" key={ business.id }>
                {BusinessItem(business, this.props.classes)}
              </ListItem>
            )
          }) }
        </List>
      </div>
    )
  }
}

export default withStyles(styles)(BusinessListComponent);