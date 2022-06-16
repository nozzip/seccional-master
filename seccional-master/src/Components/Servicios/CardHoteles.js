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
      '*::-webkit-scrollbar-track-piece:end': {
        background: 'transparent',
        marginBottom: '30px',
    },
    '*::-webkit-scrollbar-track-piece:start': {
      background: 'transparent',
      marginTop: '30px',
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
    margin: theme.spacing(0, 1, 2, 1),
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
              CABAÑAS WARMI
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              className={classes.subtitulo}
            >
              El Mollar, Tucumán - Cel:
              <a href="https://wa.me/+5493816844462" target="_blank" rel="noreferrer">
                <WhatsAppIcon style={{ fontSize: '20px', color: '#25D366' }} />
              </a>
              / Cel: 381 459-7971
            </Typography>
            <Typography
              variant="body1"
              align="left"
              className={classes.texto}
            >
              Ubicado entre medio de cerros y con una vista hermosa, nuestros afiliados y su familia pueden disfrutar y relajarse con la naturaleza durante todo el año
              <br />
              {'Tenemos cabañas para 4, 5 y 7 personas y cada una cuenta con las comodidades de cocina, calefacciòn, ropa de cama, wifi, asador.'}
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
              SAN LORENZO
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              className={classes.subtitulo}
            >
              San Lorenzo, Salta - Cel:
              <a href="https://wa.me/+5493874099071" target="_blank" rel="noreferrer">
                <WhatsAppIcon style={{ fontSize: '20px', color: '#25D366' }} />
              </a>
            
            </Typography>
            <Typography
              variant="body1"
              align="left"
              className={classes.texto}
            >
             Recientemente remodelado, el salon San Lorenzo, le ofrece un sitio ideal para nuestros afiliados y sus familias para disfrutar de reuniones sociales,
              <br />
              {''}
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
              Sarmiento 480, Yerba Buena, Tucumán - Cel:
              <a href="https://wa.me/+5493813545911" target="_blank" rel="noreferrer">
                <WhatsAppIcon style={{ fontSize: '20px', color: '#25D366' }} />
              </a>
              / Tel: 381 435-2805
            </Typography>
            <Typography variant="body1" align="left" className={classes.texto}>
              A través de años de reapropiación, condicionamiento y arduo trabajo, hoy podemos ofrecerles a nuestros afiliados y su familia un lugar de recreación y actividades deportivas.
              <br />{' '}
              {
                'El club cuenta con actividades deportivas como PILETA climatizada, canchas de PADDLE, SQUASH, fútbol 5. Como también la posibilidad de utilizar nuestro salón para eventos, y quinchos con asador para reuniones sociales'
              }
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
