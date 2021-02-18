import React, { useContext, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';import BusinessIcon from '@material-ui/icons/Business';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { ExpandMoreOutlined } from '@material-ui/icons';
import GradientIcon from '@material-ui/icons/Gradient';
import TuneIcon from '@material-ui/icons/Tune';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import { CounterContext } from '../ContextApi/CounterContext';
import { useHistory } from 'react-router-dom';



const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const {login}=useContext(CounterContext)
  console.log(login)
  const [anchorEl, setAnchorEl] = React.useState(null);
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  let history=useHistory()
  const handleClose = () => {
    setAnchorEl(null);
  };
  // let [name,setName]=useState("");
  let a=JSON.parse(localStorage.getItem("curentUser"));
  // setName(a.name)

  return (
    <div>
      <div
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
       {a.name}  <ExpandMoreOutlined />
      </div>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        
       

        <StyledMenuItem>
        <ListItemIcon>
            <LibraryBooksIcon color="#002f34" fontSize="small" />
          </ListItemIcon>
          <ListItemText style={{marginLeft:"-22px" ,color:"#002f34"}} primary="My Ads" onClick={() => history.push("/myAds") } />
        </StyledMenuItem>
        <StyledMenuItem>
        <ListItemIcon>
            <BusinessIcon color="#002f34" fontSize="small" />
          </ListItemIcon>
          <ListItemText style={{marginLeft:"-22px" ,color:"#002f34"}} primary="Buy Bussiness Packages" />
        </StyledMenuItem>
        
        <StyledMenuItem>
        <ListItemIcon>
            <GradientIcon color="#002f34" fontSize="small" />
          </ListItemIcon>
          <ListItemText style={{marginLeft:"-22px" ,color:"#002f34"}} primary="Bought Packages & Billing" />
        </StyledMenuItem>
        <hr style={{marginTop:"-5px"}} />
        <div style={{marginTop:"-20px"}}>

        <StyledMenuItem>
        <ListItemIcon>
            <HelpOutlineIcon color="#002f34" fontSize="small" />
          </ListItemIcon>
          <ListItemText style={{marginLeft:"-22px" ,color:"#002f34"}} primary="Help" />
        </StyledMenuItem>
        <StyledMenuItem>
        <ListItemIcon>
            <TuneIcon color="#002f34" fontSize="small" />
          </ListItemIcon>
          <ListItemText style={{marginLeft:"-22px" ,color:"#002f34"}} primary="Settings" />
        </StyledMenuItem>
        </div>
        <hr style={{marginTop:"-5px"}} />
        <div style={{marginTop:"-20px"}}>
        <StyledMenuItem>
        <ListItemIcon>
            <GetAppOutlinedIcon color="#002f34" fontSize="small" />
          </ListItemIcon>
          <ListItemText style={{marginLeft:"-22px" ,color:"#002f34"}} primary="Install OLX Lite app"/>
        </StyledMenuItem>

        </div>
        <hr style={{marginTop:"-5px"}} />
        <div style={{marginTop:"-20px"}}>
        <StyledMenuItem>
        <ListItemIcon>
            <ExitToAppIcon color="#002f34" fontSize="small" />
          </ListItemIcon>
          <ListItemText style={{marginLeft:"-22px" ,color:"#002f34"}} primary="Logout" onClick={() => {
            
            login(false)
            localStorage.setItem("curentUser",null)
         }}/>
         
        </StyledMenuItem>

        </div>

      </StyledMenu>
    </div>
  );
}
