import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, makeStyles } from '@material-ui/core';
import dataCarusel from '../mockData';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  carousel: {
    borderRadius: '10px',
    

  },

  paper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    maxHeight: '750px',
  },
  img: {
    height: '500px',
  },
  title: {
    width: '150px',
  },
  text: {
    fontSize: '3vw',
    paddingBottom: '20px',
  },
}));

function Carusel(props) {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Carousel
        className={classes.carousel}
        spacing={1}
        autoPlay={true}
        navButtonsAlwaysVisible={false}
        navButtonsProps={{
          style: {
            backgroundColor: '#ff8b14',
            borderRadius: '40px',
          },
        }}
        indicators={true}
        animation="slide"
      >
        {dataCarusel.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Grid>
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <img className={classes.img} src={props.item.thumbnail} alt="imgfront" />
      {/* <img className={classes.title} src={props.item.title} />
      <Typography variant='body1' align="center"  className={classes.text}>
        {props.item.short_description}
      </Typography> */}
    </Paper>
  );
}

export default Carusel;
