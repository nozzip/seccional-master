import {React, useEffect} from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Mollar, { SanLorenzo, Azucena } from './CardHoteles';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(15),
    padding: theme.spacing(6),
    height: '100%',
  },

  card1:{
    paddingTop:theme.spacing(2),
  },

}));

function Servicios() {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.card1}>
        <Azucena />
      </Grid>
      <Grid item xs={12} className={classes.card1}>
        <Mollar />
      </Grid>
      <Grid item xs={12} className={classes.card1}>
        <SanLorenzo />
      </Grid>
      <Grid item xs={12} className={classes.card1}>
        
      </Grid>
      <Grid item xs={12} className={classes.card1}>
        
      </Grid>
      <Grid item xs={12} className={classes.card1}>
        
      </Grid>
    </Grid>
  );
}

export default Servicios;

{
  /* <ServiciosGaleria /> */
}
