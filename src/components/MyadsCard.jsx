import React , { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import Dots from './Dots';
import { CounterContext } from '../ContextApi/CounterContext';

const useStyles = makeStyles({
  root: {
    maxWidth:280,
    paddingRight:"30px",
    
    // margin:"0 auto",
    
    
  },
});

function MyadsCard({mainObj}) {
    let {Delete}=useContext(CounterContext)
  console.log(mainObj)

  const classes = useStyles();
  let [state,setState]=useState(false)
  let [check,setCheck]=useState("");
//   console.log(check)
    if(check=="remove"){
        Delete(mainObj.id)
    }
  return (
    <>
    <br />
    <Card className={classes.root} disableRipple >
      <CardActionArea disableRipple> 
        <div style={{display:"flex",justifyContent:"space-around"}}>

        <div style={{height:"20px",backgroundColor:"#ffce32",width:"60px",paddingTop:"2px",paddingLeft:"5px",paddingRight:"5px"}}>
           <h6 style={{fontSize:"10px",fontWeight:"700",color:"#002f34",position:"sticky",zIndex:"4"}}>FEATURED</h6>
          </div>
        <div style={{padding:"0 10px",width:"171px",marginLeft:"-20px"}}>

        <CardMedia
          component="img"
          alt="Contemplative Reptile"
        
          
          image={mainObj.image}
          title="Contemplative Reptile"
          />
          </div>
    <div style={{marginLeft:"-20px"}}>
        <Dots arham={setCheck} />
    </div>
         
          
          </div>
   
        <CardContent style={{borderLeft:"5px solid #ffce32"}}>
          <Typography gutterBottom variant="h5" component="h2">
           <span style={{fontWeight:"900",color:"#002f34"}}> RS {mainObj.price} </span>
          </Typography>
          <Typography  variant="body2" color="textSecondary" component="p" >
            {mainObj.detail.slice(0,40)+ "..."}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent >
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <Typography style={{fontSize:"10px",textTransform:"uppercase"}}>
        
          {mainObj.address} {mainObj.city}
     
         </Typography>
        
        <Typography style={{fontSize:"10px",textTransform:"uppercase"}}>
          TODAY
        </Typography>
        </div>   
        
      </CardContent>
  
    
    </Card>
    </>
  );
}

export default MyadsCard;