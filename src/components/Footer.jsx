import { Typography } from '@material-ui/core';
import React from 'react';

const Footer= () => {
return(
    <>
    <div className="mt-5" style={{display:"flex",justifyContent:"space-around",boxShadow:"rgba(0,0,0,0.9)"}}>
        <div >
            <img width="300" src="https://statics.olx.com.pk/external/base/img/phone-app.webp" />
        </div>
        <div style={{marginTop:"30px"}}>
            
            <h2 style={{fontWeight:"bolder",color:"#002f34"}}>TRY THE OLX APP</h2>
            <div className="ml-3" style={{color:"#002f34",fontWeight:"900"}}>
                <Typography>
                Buy, sell and find just about <br /> anything using the app on your mobile.
                </Typography>
            </div>
            
        </div>
        <div style={{width:"25%",marginTop:"25px",display:"flex",flexDirection:"column"}}>
            <div>
            <p style={{fontSize:"12px",color:"#002f34",fontWeight:"bolder"}}>GET YOUR APP TODAY</p>

            </div>
            <div style={{display:"flex"}}>

            <div className="mt-1">
                <img width="120px" height="35px" src="https://statics.olx.com.pk/external/base/img/appstore_2x.webp" />
            </div>
            <div className="mt-1">
                <img width="120px" height="35px" src="https://statics.olx.com.pk/external/base/img/playstore_2x.webp" />
            </div>
            </div>

        </div>
    
    </div>
    <div className="mt-2 mb-3" style={{display:"flex",width:"100%",border:"2px solid #fff",boxShadow:"-moz-initial"}}>
        <div style={{width:"22%"}}>
            <h6 style={{fontSize:"12px",fontWeight:"bolder",color:"#002f34"}}>POPULAR CATEGORIES</h6>
            <div style={{display:"flex",flexDirection:"column"}}>
                <div className="arham">Cars</div>
                <div className="arham">Flats for rent</div>
                <div className="arham">Jobs</div>
                <div className="arham">Mobile Phones</div>
               

            </div>
        </div>

        <div style={{width:"22%"}}>
            <h6 style={{fontSize:"12px",fontWeight:"bolder",color:"#002f34"}}>TRENDING SEARCHES</h6>
            <div style={{display:"flex",flexDirection:"column"}}>
                <div className="arham">Bikes</div>
                <div className="arham">Watches</div>
                <div className="arham">Books</div>
                <div className="arham">Dogs</div>
               

            </div>
        </div>

        <div style={{width:"22%"}}>
            <h6 style={{fontSize:"12px",fontWeight:"bolder",color:"#002f34"}}>ABOUT US</h6>
            <div style={{display:"flex",flexDirection:"column"}}>
                <div className="arham">About OLX Group</div>
                <div className="arham">OLX Blog</div>
                <div className="arham">Contact US</div>
                <div className="arham">OLX for Bussinesses</div>
               

            </div>
        </div>


        <div style={{width:"22%"}}>
            <h6 style={{fontSize:"12px",fontWeight:"bolder",color:"#002f34"}}>OLX</h6>
            <div style={{display:"flex",flexDirection:"column"}}>
                <div className="arham">Help</div>
                <div className="arham">Sitemap</div>
                <div className="arham">Legal & Privacy Information</div>
            
               

            </div>
        </div>

        <div style={{width:"25%"}}>
            
            <h6 style={{fontSize:"12px",fontWeight:"bolder",color:"#002f34"}}>FOLLOW US</h6>
            <div style={{display:"flex",flexDirection:"row"}}>
            <div className="arham" style={{width:"20px",height:"20px",border:"2px solid black",textAlign:"center",borderRadius:"10px"}}><span  style={{color:"#002f34"}}>f</span></div>
            <div className="arham" style={{width:"20px",height:"20px",border:"2px solid black",textAlign:"center",borderRadius:"10px"}}><span  style={{color:"#002f34"}}>f</span></div>
            <div className="arham" style={{width:"20px",height:"20px",border:"2px solid black",textAlign:"center",borderRadius:"10px"}}><span  style={{color:"#002f34"}}>f</span></div>
            <div className="arham" style={{width:"20px",height:"20px",border:"2px solid black",textAlign:"center",borderRadius:"10px"}}><span  style={{color:"#002f34"}}>f</span></div>
            </div>
            
            <div className="mt-2" style={{display:"flex",flexDirection:"row"}}>
            <div><img  src="https://statics.olx.com.pk/external/base/img/appstore.webp" /></div>
            <div><img className="img-fluid" src="https://statics.olx.com.pk/external/base/img/playstore.webp" /></div>
            </div>

            
                
            
        </div>
    </div>
    <div style={{width:"100%",backgroundColor:"#002f34",height:"30px",marginBottom:"5px"}}>
        <div style={{display:"flex",justifyContent:"space-between"}}>

        <div style={{display:"flex"}}>
            <div className="mt-2 ml-4">
                <h3 style={{fontSize:"12px",fontWeight:"bolder",color:"#fff"}}>Other Countries</h3>
            </div>
            <div className="mt-2 ml-3">
                <h3 style={{fontSize:"12px",color:"#fff"}}> India - South Africa - Indonesia</h3>
            </div>
        </div>

        <div style={{display:"flex"}}>
            <div className="mt-2 ml-2">
                <h3 style={{fontSize:"12px",fontWeight:"bolder",color:"#fff"}}>Free Classifieds in Pakistan.</h3>
            </div>
            <div className="mt-2 ml-2 mb-3">
                <h3 style={{fontSize:"12px",color:"#fff"}}>© 2006-2021 OLX</h3>
            </div>
        </div>
        
        </div>
    </div>
    
    </>
)
}

export default Footer;