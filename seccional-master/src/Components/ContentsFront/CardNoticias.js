import React from 'react';
import {
  Grid,
  makeStyles,
  Card,
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import { dataNoticias } from '../mockData';

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
    flexWrap:'wrap', 
    justifyContent:'center',     
    padding: theme.spacing(0, 4, 0, 4),
    
          
  },

  card: {
    justifyContent:'center',
    alignContent:'center',
    width:'300px',    
    padding: theme.spacing(1),         
    height: 'auto',
  },

  cardmedia: {    
    height: '300px',
    objectFit: 'contain',
    
  },
  typo: {
    textAlign: 'center',
    alignItems: 'center',    
    fontFamily: 'Lato',
    fontWeight: 600,
    fontSize: '15px',
  },
}));

function CardNoticias(props) {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.grid}>
      {dataNoticias.slice(0, 4).map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Grid>
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <Grid container className={classes.card} >
      <Grid item xs={12} >
        <Link to="/Prensa" style={{ textDecoration: 'none' }}>
          <Card >
            <CardActionArea>
              <CardMedia
                className={classes.cardmedia}
                component="img"
                src={props.item.thumbnail}
              />
            </CardActionArea>
            <CardContent className={classes.cardcontent}>
              <Typography className={classes.typo}>
                {props.item.title}
                <Typography variant='h6'>{props.item.date}</Typography>
              </Typography>
              
            </CardContent>
          </Card>
        </Link>
      </Grid>
    </Grid>
  );
}

export default CardNoticias;
