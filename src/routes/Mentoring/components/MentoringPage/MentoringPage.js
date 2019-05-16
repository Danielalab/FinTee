import React from 'react';
import img from '../../../../static/networking.png';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'

import MentorModal from './MentorModal';
// import { LOGIN_PATH, SIGNUP_PATH, FAQ_PATH, ABOUT_PATH } from 'constants/paths'

const styles = () => ({
  list: {
    width: 250,
  },
  button: {
    border: "3px solid #A64D78",
    color: "#333",
    margin: "3px",
    fontWeight: 700,
    cursor: 'pointer'
  }
});

class MentoringPage extends React.Component {
  state = {
    open: false,
    next: null,
  };

  handleOpen = (next) => {
    this.setState({ open: true , next });
  };

  handleClose = () => {
    this.setState({ open: false, next: null });
  };

  render() {
    const { classes } = this.props;

  return(
    <section className="d-flex justify-content-center flex-column m-4">
      <div className="d-flex justify-content-center flex-column mt-2 mb-3">
        <figure className="d-flex justify-content-center rounded-circle">
          <img src={img} className="img-fluid maxh-40vh rounded-circle" alt="women"></img>
        </figure>
        <h2 className="text-center mb-2">
          <span className="title-logo">FinTee</span>
          <span className="title title-yellow"> + Mentoring</span>
        </h2>
        <p className="text-center">
          FinTee allows you to connect women entrepreneurs with a volunteer mentor depending
          on the skills you want to develop for your business.
        </p>
      </div>
      <div className="d-flex justify-content-center flex-column">
        <Button
          type="button"
          className={classes.button}
          onClick={()=> {this.handleOpen('/mentor')}}
        >
          I'm a Mentor
        </Button>
        <Button
          type="button"
          className={classes.button}
          onClick={()=> {this.handleOpen('/mentee')}}
        >
          I'm a Mentee
        </Button>
      </div>
      <MentorModal open={this.state.open} closeModal={this.handleClose}  next={this.state.next}/>
    </section>
  )}
}

export default withStyles(styles)(MentoringPage);