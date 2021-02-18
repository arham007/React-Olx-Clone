import { Container, Typography, Grid } from '@material-ui/core';
import React, { useContext , useState} from 'react';
import Banner from '../Banner';
import Cards from '../components/Cards'
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { CounterContext } from '../ContextApi/CounterContext';

const Home = () => {
    let {ads}=useContext(CounterContext)
    console.log(ads)
    
    return (
        <>
        <Header />
        <Categories />
        <Banner />
            <Container maxWidth="lg">
                <Typography style={{ color: "#002f34", fontSize: "24px", marginTop: "10px" }}>
                    Fresh recommendations
            </Typography>
                <br />
                <Grid container spacing={3} >
                {
                      ads.map((obj) => {
                       return (
                           <>
                            <Grid item xs>
                                <Cards mainObj={obj} />
                            </Grid>
                           </>
                       )

                      })
                  }
                </Grid>

            </Container>
           
            <br />
            <Footer />
        </>
    )
}

export default Home;