"use strict";

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  progress: {
    height: '100vh',
    position: 'fixed',
    zIndex: 999999,
    backgroundColor: 'rgba(255,255,255, 0.7)',
    transition: 'opacity 500ms',
  },
  loader: {
    color: '#00921A'
  }
});

class Spinner extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        {this.props.display ?
      <Grid item
        xs={12}
        className={classes.root} >

        <Grid
          container
          className={classes.progress}
          alignItems='center'
          direction='row'
          justify='center'
        >
          <CircularProgress className={classes.loader} />
        </Grid>

      </Grid> : null}
      </div>
    );
  }
}

export default connect(
  state => ({
    // display: state.loadScreen.loadScreen
  })
)(withStyles(styles)(Spinner));