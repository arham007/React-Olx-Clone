import { FormControl, InputLabel, NativeSelect, FormHelperText, TextField, TextareaAutosize, Typography, Select } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import { useHistory } from 'react-router-dom';
import DisplayImage from '../components/DisplayImage';
import { CounterContext } from '../ContextApi/CounterContext';
import { v4 as uuidv4 } from 'uuid';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Space } from 'antd';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',

    },
    setting: {
        color:"green",
        textAlign:"center",
        
    }
}));

const Post = () => {
    let { Addproducts, myProfile } = useContext(CounterContext)
    let [arham, setArham] = useState("")
    let history = useHistory()
    let a = JSON.parse(localStorage.getItem("curentUser"));
    // console.log(a)
    console.log(arham)
    const classes = useStyles();
    let [post, setPost] = useState({
        category: "",
        title: "",
        detail: "",
        price: "",
        phoneNo: "",
        city: "",
        address: "",
        username:"",


    })
    let [open,setOpen]=useState(false)

    const inputEvent = (e) => {
        // console.log(e.target.value)
        // console.log(e.target.name)
        const { name, value } = e.target

        setPost((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })

    }
    function success() {
        Modal.success({
            mask:true,
            icon:<CheckCircleOutlineOutlinedIcon style={{fontSize:"100px"}} />,
            className:classes.setting,
          content: 'Your Ad has been posted successfully..',
        });
      }
      
    const adSubmit = () => {
        post.image = arham
        post.id = uuidv4();
        // console.log(post)
        Addproducts(post)
        myProfile(post)
        setOpen(true)
        setTimeout(() => {
            setOpen(false)
            success()
        },3000)
        
        post.category = ""
        post.title = ""
        post.detail = ""
        post.city = ""
        post.address = ""
        post.phoneNo = ""
        post.price = ""

        
    }

    let object = ((post.category) &&
        (post.title) &&
        (post.detail) &&
        (post.city) &&
        (post.address) &&
        (post.phoneNo) &&
        (post.price)) === ""
    console.log(object)
    return (
        <>

            <div style={{ width: "100%", height: "60px", backgroundColor: "rgba(0,47,52,.04)", display: "flex", alignItems: "center" }}>

                <div style={{ cursor: "pointer" }} onClick={() => history.push("/")}><ArrowBackIcon /></div>
                <div style={{ paddingLeft: "20px", fontSize: "20px", color: "#002f34" }}>Post your Ad</div>
            </div>
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ maxWidth: "600px", maxHeight: "100%", border: "1px solid rgba(0,47,52,.2)", borderRadius: "5px", padding: "5px 30px" }}>
                    <div><h6 style={{ fontWeight: "bolder", textTransform: "capitalize", marginTop: "5px", color: "#002f34" }}>Choose a Category</h6></div>
                    <div >


                        <FormControl className="w-75 text-center">
                            <InputLabel htmlFor="age-native-helper">Category</InputLabel>
                            <NativeSelect name="category" value={post.category} onChange={inputEvent}>
                                <option aria-label="None" value="" />
                                <option value="Mobile">Mobile Phone</option>
                                <option value="Vehicles">Vehicles</option>
                                <option value="Bikes">Bikes</option>
                                <option value="Electronics & Home Appliances ">Electronics & Home Appliances</option>
                                <option value="Animals">Animals</option>
                                <option value="Property For Rent">Property For Rent</option>
                                <option value="Property For Sale">Property For Sale</option>
                                <option value="Jobs">Jobs</option>
                                <option value="Fashion & Beauty">Fashion & Beauty</option>
                                <option value="Kids">Kids</option>

                            </NativeSelect>
                            <FormHelperText>SELECTED CATEGORY</FormHelperText>
                        </FormControl>
                    </div>

                    <hr />
                    <div>
                        <div><h6 style={{ fontWeight: "bolder", textTransform: "capitalize", color: "#002f34" }}>Ad Title</h6></div>


                        <TextField required id="standard-required" value={post.title} label="Ad title " fullWidth name="title" onChange={inputEvent} />
                        <TextareaAutosize className="w-100 mt-4" rowsMin={3} value={post.detail} aria-label="empty textarea" placeholder="Detail" name="detail" onChange={inputEvent} />
                    </div>
                    <hr />
                    <div><h6 style={{ fontWeight: "bolder", textTransform: "capitalize", color: "#002f34" }}>SET A PRICE</h6></div>
                    <TextField required id="standard-required" label="Price " type="number" fullWidth name="price" value={post.price} onChange={inputEvent} />

                    <hr className="mt-4" />
                    <div><h6 style={{ fontWeight: "bolder", color: "#002f34", textTransform: "capitalize" }}>UPLOAD A PHOTO</h6></div>
                    <DisplayImage imgUrl={setArham} />
                    <hr />

                    <div><h6 style={{ fontWeight: "bolder", textTransform: "capitalize", color: "#002f34" }}>CONFIRM YOUR LOCATION</h6></div>
                    <div><div style={{ display: "flex", justifyContent: "space-between" }}  ><Typography style={{ marginTop: "9px" }} >State</Typography> <TextField >state</TextField></div></div>
                    <hr />
                    <div ><div onChange={inputEvent} style={{ display: "flex", justifyContent: "space-between" }}><Typography style={{ marginTop: "9px" }}>City</Typography> <TextField value={post.city} name="city"></TextField></div></div>
                    <hr />
                    <div><div onChange={inputEvent} style={{ display: "flex", justifyContent: "space-between" }}><Typography style={{ marginTop: "9px" }}>Address</Typography> <TextField value={post.address} name="address"></TextField></div></div>
                    <hr />

                    <div><h6 style={{ fontWeight: "bolder", textTransform: "capitalize", color: "#002f34" }}>REVIEW YOUR DETAILS</h6></div>

                    {
                        a === null ?
                            <div />
                            :
                            <div style={{ display: "flex", justifyContent: "start" }}>
                                <div style={{ height: "50px", width: "50px", border: "2px solid #fff", color: "#fff", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "24px", fontWeight: "bolder", backgroundColor: "purple" }}>{a.name.slice(0, 1).toUpperCase()}</div>
                                <div style={{ marginLeft: "30px" }}>
                                    <form>
                                        <div style={{ display: "flex", flexDirection: "column", marginTop: "-5px" }}>

                                            <label for="fname" style={{ marginBottom: "-1px", fontSize: "14px" }}>Name*</label>
                                            <input type="text"  name="username" value={a.name}  style={{ borderRadius: "5px" }} onChange={inputEvent}  />
                                        </div>

                                    </form>
                                </div>

                            </div>


                    }

                    <br />
                    
                    <Backdrop className={classes.backdrop} open={open}>
                        <CircularProgress color="inherit" />
                    </Backdrop>
                    <div><h6 style={{ fontWeight: "bold", textTransform: "capitalize" }}>Let's verify your account</h6></div>
                    <Typography variant="body2">We will send you a confirmation code by sms on the next step.</Typography>
                    <br />
                    <form>
                        <div style={{ display: "flex", flexDirection: "column" }}>

                            <label for="fname" style={{ marginBottom: "-1px", fontSize: "14px" }}>Mobile Phone Number *</label>
                            <input type="number" id="fname" name="firstname" placeholder="03171070016" style={{ borderRadius: "5px" }} name="phoneNo" onChange={inputEvent} value={post.phoneNo} />
                        </div>
                        <Typography className="mt-2" variant="body1">Show my phone number on my ads</Typography>
                    </form>
                    <hr />
                    <div className="mb-2">
                        {
                            object ?
                            <Button disabled fullWidth> Post now</Button>
                            :
                            
                            <Space>

                                <Button variant="contained" color="primary" fullWidth onClick={adSubmit}>
                                    Post now
                    </Button>
                            </Space>
                        }
                    </div>

                </div>

            </div>
            <br /><br />
        </>
    )
}

export default Post;