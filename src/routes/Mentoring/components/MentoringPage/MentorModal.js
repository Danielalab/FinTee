import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { MENTOR_NAME, MENTEE_NAME  } from 'constants/paths'


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 40,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
  button: {
    backgroundColor: "#A64D78",
    color: "#ffffff",
    margin: "3px",
    width: '100%'
  },
  title: {
    color: '#f1c131',
    fontFfamily: 'Righteous'
  }
});

function MentorModal ({ classes, open , handleClose, next }) {
  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={getModalStyle()} className={classes.paper}>
          <Typography variant="h6" id="modal-title" className={classes.title}>
            Code of conduct
          </Typography>
          <Typography variant="subtitle1" id="simple-modal-description">
          - Detail your profile. <br></br>
          - Be consistent and follow up. <br></br>
          - Be responsible with the availability of others
          </Typography>
          <Button
            type="button"
            className={classes.button}
            component={Link} to={next}
          >
            I agree
          </Button>
          <MentorModalWrapped />
        </div>
      </Modal>
    </div>
  );
}

MentorModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const MentorModalWrapped = withStyles(styles)(MentorModal);

export default MentorModalWrapped;