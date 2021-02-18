import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { Carousel, CarouselItem, } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Login = () => {
    let history=useHistory();

    return (
        <>
        <br />
            <Carousel>
                <Carousel.Item  >

                    <div style={{ textAlign: "center" }}>

                        <div>
                            <img width="200px" src="https://statics.olx.com.pk/external/base/img/loginEntryPointPost.webp" alt="" />
                        </div>
                        <div className="mb-5">
                            <p >Help make OLX safer place to buy and sell</p>
                        </div>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ textAlign: "center" }}>

                        <div>
                            <img width="200px" src="https://statics.olx.com.pk/external/base/img/loginEntryPointFavorite.webp" alt="" />
                        </div>
                        <div className="mb-5">
                            <p>Contacts and close Deals faster</p>
                        </div>
                    </div>

                </Carousel.Item>

                <Carousel.Item>
                    <div style={{ textAlign: "center" }}>

                        <div>
                            <img width="200px" src="https://statics.olx.com.pk/external/base/img/loginEntryPointChat.webp" alt="" />
                        </div>
                        <div className="mb-5">
                            <p>Save your all items in one place</p>
                        </div>
                    </div>

                </Carousel.Item>

            </Carousel>
            <br />
            <div style={{textAlign:"center"}}>

            <Button style={{width:"90%",marginBottom:"10px",border:"2px solid #002f34" ,color:"#002f34",backgroundColor:"#fff",fontSize:"12px",fontWeight:"bolder",padding:"10px 0"}} disableRipple disableFocusRipple  variant="contained">Continue With Google</Button>
            <Button style={{width:"90%",marginBottom:"10px",border:"2px solid #002f34" ,color:"#002f34",backgroundColor:"#fff",fontSize:"12px",fontWeight:"bolder",padding:"10px 0"}} disableRipple disableFocusRipple  variant="contained">Continue With Facebook</Button>
                <Button style={{width:"90%",marginBottom:"10px",border:"2px solid #002f34" ,color:"#002f34",backgroundColor:"#fff",fontSize:"12px",fontWeight:"bolder",padding:"10px 0"}} disableRipple disableFocusRipple  variant="contained" onClick={()=>history.push("/loginuser")}>Continue With Email</Button>
                
            </div>
            <br />
            <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
            <div style={{margin:"0 auto"}}>
            <Typography variant="caption">
            We won't share your personal details with anyone
            </Typography>

            </div>
            
            <div style={{margin:"0 auto"}}>

            <Typography variant="caption">
            <span style={{color:"rgba(0,47,52,.64)"}}>If you continue,you are accepting</span> <span style={{color:"blue"}}>OLX Terms and Conditions and Privacy Policy</span>
            </Typography>
            </div>
            </div>
       

        </>
    )
}

export default Login;