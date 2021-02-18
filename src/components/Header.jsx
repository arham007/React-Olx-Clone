import React, { useContext, useState } from 'react';
import logo from '../images/logo.png';
import Sell from '../images/sell.png';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search';
import { Modal } from '@material-ui/core';
import Login from './Login';
import Post from '../screens/Post'
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { CounterContext } from '../ContextApi/CounterContext';
import Dropdown from '../components/Dropdown'




const Header = () => {
    
    let history = useHistory()
    let [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    }
    let { userLogged, login ,user } = useContext(CounterContext)
    const usr=JSON.parse(localStorage.getItem("loggedIn"));
    // console.log(user)
    let a=JSON.parse(localStorage.getItem("curentUser"));
    


    return (
        <>
            <div style={{ backgroundColor: "rgba(0,47,52,.03)", }}>
                <Container style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>

                    <div>
                        <img src={logo} alt="olx-logo" height={60} />
                    </div>

                    <div style={{ display: "flex" }}>
                        <input className="input" type="text" placeholder="Find Cars,Mobile Phones and more..." />
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "40px", width: "40px", backgroundColor: "#002f34", color: "#fff", cursor: "pointer", borderTopRightRadius: "5px", borderBottomRightRadius: "5px" }} >


                            <SearchIcon />
                        </div>
                    </div>
                    <div>
                        {
                            usr===true  ?
                                <>
                            
                                    <Chip size="medium" avatar={<Avatar style={{ backgroundColor: "blue" }}><span style={{ color: "#fff", fontWeight: "bolder", fontSize: "16px" }}>{(a!== "null") ? a.name.slice(0,1).toUpperCase() : <div></div> }</span></Avatar>} label={ <Dropdown /> } />
                                  
                                </>
                                :
                                <Button onClick={handleOpen} disableRipple style={{ textTransform: "capitalize", fontSize: "16px", fontWeight: "600", color: "#002f34" }}>Login</Button>
                        }


                        <Modal open={open}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                            onClose={() => { setOpen(false) }}>
                            <div style={{ backgroundColor: "#fff", height: "100%" }}>

                                <Login />
                            </div>
                        </Modal>

                    </div>

                    <div>
                        <Button onClick={() => history.push("/post")} disableRipple><img src={Sell} alt="olx-sell" /></Button>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Header;