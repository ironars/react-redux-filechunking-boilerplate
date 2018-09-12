"use strict";

import React, { Component } from 'react';
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

class Loading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid item
          id= 'loadingGrid'
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
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Loading);