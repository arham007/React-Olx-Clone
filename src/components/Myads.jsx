import React, { useContext } from 'react';
import Header from './Header';
import Categories from './Categories';
import Show from './Show';
import Footer from './Footer';
import { Container , Grid , Button } from '@material-ui/core';
import { CounterContext } from '../ContextApi/CounterContext';
import MyadsCard from './MyadsCard'
const Myads = () => {
    let {myAds}=useContext(CounterContext);
    console.log(myAds)

    return (
        <>
            <Header />
            <Categories />
           { 
                myAds[0] ?
                

               <Container>
            <Grid container spacing={3} >
                {
                    myAds.map((obj) => {
                        return (
                            <>
                            <Grid item xs>
                                <MyadsCard mainObj={obj} />
                            </Grid>
                           </>
                       )
                       
                    })
                  }

                </Grid>
            </Container >
            :
            <Show />
            
                }
            <Footer />
        </>
    )
}

export default Myads;