import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import ServiciosGaleriaMollar from './FotosHoteles';
import { GaleriaSanLorenzo, GaleriaAzucena } from './FotosHoteles';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
  },

  section1: {
    display: 'flex',
    boxShadow: '5px 5px 10px -06px black',
    '@global': {
      '*::-webkit-scrollbar': {
        width: '0.2em',
      },
      '*::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
      },
      '*::-webkit-scrollbar-thumb': {
        outline: '1px solid orange',
        borderRadius: '20px',
      },
    },
  },

  card: {
    height: '210px',
  },

  card2: {
    display: 'flex',
    flexDirection: 'column',

    borderRight: '3px solid orange',
    borderRadius: '10px',
    height: '210px',
  },

  titulo: {
    fontFamily: 'Helvetica',
    fontWeight: '800',
    borderBottom: '2px solid ',
    backgroundColor: 'orange',
    color: 'white',
    fontSize: '3vw',
  },

  subtitulo: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontFamily: 'Trebuchet MS',
    fontWeight: '800',
  },

  texto: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    fontFamily: 'Trebuchet MS',
    fontWeight: '300',
    paddingBottom: theme.spacing(3),
    overflow: 'auto',
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
            <Typography variant="h5" align="center" className={classes.titulo}>
              MOLLAR
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              className={classes.subtitulo}
            >
              San Miguel de Tucumán, Tucumán
            </Typography>
            <Typography
              variant="body2"
              align="center"
              className={classes.texto}
            >
              Ofrecemos a nuestros afiliados un lugar donde pueden disfrutar de
              pileta climatizada, paddle, futbol 5, etc
              <br />
              {'Numero de contacto: 382248788 '}
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
            <Typography variant="h5" align="center" className={classes.titulo}>
              San Lorenzo
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              className={classes.subtitulo}
            >
              San Lorenzo, Salta
            </Typography>
            <Typography
              variant="body2"
              align="center"
              className={classes.texto}
            >
              Ofrecemos a nuestros afiliados un lugar donde pueden disfrutar de
              pileta climatizada, paddle, futbol 5, etc
              <br />
              {'Numero de contacto: 255755784 '}
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
            <Typography variant="h4" align="center" className={classes.titulo}>
              CLUB AZUCENA
            </Typography>
            <Typography
              variant="subtitle2"
              align="center"
              className={classes.subtitulo}
            >
              Sarmiento 480, Yerba Buena, Tucumán - Tel:{' '}
              <a href="https://wa.me/+5493816844462" target="_blank">
                <WhatsAppIcon style={{ fontSize: '20px', color: '#25D366' }} />
              </a>
              / 381 435-2805
            </Typography>
            <Typography variant="body2" align="left" className={classes.texto}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
              <br />{' '}
              {
                'printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic                printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic                printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic'
              }
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
