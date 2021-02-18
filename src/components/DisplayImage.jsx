import React, { useContext, useEffect, useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import Post from '../screens/Post';
import { CounterContext } from '../ContextApi/CounterContext';
const DisplayImage = (props) => {
    console.log(props.imgUrl)

    const [filelist, setFileList] = useState("");
    let [src, setSrc] = useState([]);

    const onChange = ({file : {thumbUrl}}) => {

        if (thumbUrl){
        //    console.log(thumbUrl) 
            setFileList(...src,thumbUrl);
            setSrc(thumbUrl)
        }
        
    };
    
    useEffect(() => {
        if(src){
            props.imgUrl(src)
            // console.log(src)
            
        }
        // let images=[];
        // images.push(src)
        // localStorage.setItem("image",JSON.stringify(images))
        
        // setFileList("")
        
    },[src])
    
   

    const onPreview = async file => {
        let src = file.url;

        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);

            });
        }
        // console.log(fileList)
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        // console.log(imgWindow)
        imgWindow.document.write(image.outerHTML);


    };


    return (

        <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            filelist={filelist}
            onChange={onChange}
            onPreview={onPreview}
            
        >
            <div style={{display:"flex",flexDirection:"column"}}>

         <div><AddAPhotoOutlinedIcon style={{fontSize:"20px",color:"#002f34"}} /> </div><div style={{textTransform:"capitalize",color:"#002f34"}}>add photo</div>
            </div>
        </Upload>

    );
};

export default DisplayImage;