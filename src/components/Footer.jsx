import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';

const myStyles = makeStyles(theme => ({
    footer: {
        width: '100%',
        height: '70px',
        backgroundColor: '#000',
        marginTop: '530px'
    },

    list: {
        color: '#fff',
        textAlign: 'center',
        letterSpacing: '5px'
    },
    header: {
        position: 'relative',
        top: '30px'
    }

}))

const Footer = () => {
    const classes = myStyles()
  return (

      <div className={classes.footer}>
          <div className={classes.list}>
              <h6 className={classes.header}>All right reserved and has be made with love and joy</h6>
          </div>
      </div>
  )
}

export default Footer