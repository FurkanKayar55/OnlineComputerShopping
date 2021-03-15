  
import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ComputerIcon from '@material-ui/icons/Computer';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import CardMedia from '@material-ui/core/CardMedia';
import Hp from './hp.png';
import Configuration from './Configuration';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(3, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(6),
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const footers = [
  {
    title: 'Nudge Digital',
    description: ['Home'],
  }
];

export default function Products() {
  const classes = useStyles();
  const [condition, setcondition] = useState(false);
  const [fetchCondition, setfetchCondition] = useState(false);
  const [productPrice, setproductPrice] = useState(0);
  const [productName, setproductName] = useState(0);
  const [data, setData] = useState({ computers: [] });

  function _onClick(productPrice,productName) {
    setcondition(true);
    setproductPrice(productPrice);
    setproductName(productName);
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://localhost:44325/api/Computer/Index',
      );
      setData({ computers: result.data });
      setfetchCondition(true);
    };
 
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
        <ComputerIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
             Nudge Digital
          </Typography>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
          <ShoppingBasketIcon className={classes.icon} />
            Basket
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
            Choose your new Computer
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {fetchCondition &&
          data.computers.map((entry) => (
            <Grid item key={entry.title} xs={12} md={4}>
              <Card>
                <CardHeader
                  title={entry.title}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardMedia
                  className={classes.media}
                  image={Hp}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      £{entry.cost}
                    </Typography>
                  </div>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="contained" onClick={() => _onClick(entry.cost,entry.title,entry.configurations)} color="primary">
                    Select
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
          {condition && <Configuration productPrice={productPrice} productName ={productName}/>}

        </Grid>
      </Container>
    </React.Fragment>
  );
}