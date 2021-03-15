  
import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

export default function TotalPrice({totalPrice}) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" component="footer" className="footer">
        <Grid container justify="space-evenly">
        <Grid item md={12} sm={12}>
            <ul>
                <li>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                    <h1>Your bag total : £{totalPrice}</h1>
                    </Link>
                </li>
            </ul>
        </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}