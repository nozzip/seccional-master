import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import ServiciosGaleriaMollar from './FotosHoteles';
import { GaleriaSanLorenzo, GaleriaAzucena } from './FotosHoteles';

const useStyles = makeStyles((theme) => ({
  container: {
    height:'100%',
  },

  section1: {
    display: 'flex',
    boxShadow: '5px 5px 10px -06px black',
  },

  card: {    
    height:'210px',
  },

  card2: {    
    display:'flex',
    flexDirection:'column',
    borderRight:'3px solid orange',
    borderRadius:'10px',
    height:'210px',   
    
  },

  titulo: {
    margin: theme.spacing(1),
    paddingTop: theme.spacing(3),
    fontFamily: 'Lato',    
    fontWeight: '800',
  },

  subtitulo:{
    margin: theme.spacing(1),
    fontFamily:'Lato',
    fontWeight: '800',
  },

  texto:{
    margin: theme.spacing(1),
    fontFamily:'Lato',    
    fontWeight: '800',
    paddingBottom: theme.spacing(3),
  },
}));

function Mollar() {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.section1}>
        <Grid item xs={4} md={4}>
          <Card className={classes.card}>
            <ServiciosGaleriaMollar />
          </Card>
        </Grid>
        <Grid item xs={8} md={8}>
          <Card className={classes.card2}>
            <Typography variant='h5' align='center' className={classes.titulo}>MOLLAR</Typography>
            <Typography variant='subtitle1'align='center' className={classes.subtitulo}>
              San Miguel de Tucumán, Tucumán
            </Typography>
            <Typography variant='body2'align="center" className={classes.texto}>
              Ofrecemos a nuestros afiliados un lugar donde pueden disfrutar de pileta climatizada, paddle, futbol 5, etc
              <br />
              {
                'Numero de contacto: 382248788 '
              }
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Mollar;

export function SanLorenzo() {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.section1}>
        <Grid item xs={4} md={4}>
          <Card className={classes.card}>
            <GaleriaSanLorenzo />
          </Card>
        </Grid>
        <Grid item xs={8} md={8}>
          <Card className={classes.card2}>
            <Typography variant='h5' align='center' className={classes.titulo}>San Lorenzo</Typography>
            <Typography variant='subtitle1' align='center' className={classes.subtitulo}>
              San Lorenzo, Salta
            </Typography>
            <Typography variant='body2' align="center" className={classes.texto}>
              Ofrecemos a nuestros afiliados un lugar donde pueden disfrutar de pileta climatizada, paddle, futbol 5, etc
              <br />
              {
                'Numero de contacto: 255755784 '
              }
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export function Azucena() {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.section1}>
        <Grid item xs={4} md={4}>
          <Card className={classes.card}>
            <GaleriaAzucena />
          </Card>
        </Grid>
        <Grid item xs={8} md={8}>
          <Card className={classes.card2}>
            <Typography variant='h5' align='center' className={classes.titulo}>AZUCENA</Typography>
            <Typography variant='subtitle1' align='center' className={classes.subtitulo}>
              AZUCENA
            </Typography>
            <Typography variant='body2' align="center" className={classes.texto}>
              Ofrecemos a nuestros afiliados un lugar donde pueden disfrutar de pileta climatizada, paddle, futbol 5, etc
              <br />
              {
                'Numero de contacto: 255755784 '
              }
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
