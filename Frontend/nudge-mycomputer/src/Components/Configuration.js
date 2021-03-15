import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TotalPrice from './TotalPrice';
import axios from 'axios';

const tiers = [
  {
    memory: [
    ],
    harddisk: [
    ],
    colour: [
    ],      
  }
];

export default function Configuration({productPrice,productName}) {
  const [ramPrice, setmemoryPrice] = useState(0);
  const [harddiskPrice, setharddiskPrice] = useState(0);
  const [colourPrice, setcolourPrice] = useState(0);
  const [totalPrice, settotalPrice] = useState(null);
  const [memoryData, setmemoryData] = useState({ memory: [] });
  const [harddiskData, setharddiskData] = useState({ harddisk: [] });
  const [colourData, setcolourData] = useState({ colour: [] });
  const [fetchCondition, setfetchCondition] = useState(false);
  useEffect(() => {
    let newPrice = calculateTotal(productPrice, ramPrice, harddiskPrice , colourPrice).toFixed(2);
    settotalPrice(newPrice);
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://localhost:44325/api/Computer/Configurations',
      );
      setmemoryData({ memory: result.data.memory });
      setharddiskData({ harddisk: result.data.harddisk });
      setcolourData({ colour: result.data.colour });
      setfetchCondition(true);
    };
 
    fetchData();
  }, []);

  function calculateTotal(number1, number2, number3, number4) {
    return Number(number1) + Number(number2) + Number(number3) + Number(number4);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" component="main">
        <Grid container alignItems="flex-end">
        <h1>Customise your {productName}</h1>
          {fetchCondition &&
          tiers.map((tier) => (
            <Grid item key={tier.title} md={12}>
              <Card>
                <CardContent>
                <RadioGroup>
                <h2>Memory</h2>
                <p>How much memory is right for you?</p>
                {memoryData.memory.map((line) => (
                    <div>
                    <FormControlLabel value={line.title} onClick={() => setmemoryPrice(line.cost)} control={<Radio />} label={line.title + " £" + line.cost} />
                    </div>
                ))}
                </RadioGroup>
                <RadioGroup >
                <h2>Harddisk</h2>
                <p>How much storage is right for you??</p>
                {harddiskData.harddisk.map((line) => (
                    <div>
                    <FormControlLabel value={line.title} onChange={() => setharddiskPrice(line.cost)} control={<Radio />} label={line.title + " £" + line.cost} />
                    </div>
                ))}
                </RadioGroup>
                <RadioGroup>
                <h2>Colour</h2>
                <p>Which colour is right for you?</p>
                {colourData.colour.map((line) => (
                    <div>
                    <FormControlLabel value={line.title} onChange={() => setcolourPrice(line.cost)} control={<Radio />} label={line.title + " £" + line.cost} />
                    </div>
                ))}
                </RadioGroup>
                </CardContent>
              </Card>
            </Grid>
          ))}
      <TotalPrice totalPrice = {totalPrice}/>
        </Grid>
      </Container>
    </React.Fragment>
  );
}