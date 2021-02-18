import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const Show = () => {
    let history=useHistory();
    return (
        <>
            <div style={{textAlign:"center"}} className="mt-5">
                <div>
                    <img width={220} src="https://statics.olx.com.pk/external/base/img/no-publications.webp" />
                </div>
                <div className="mt-1">
                    <h6 style={{ color: "rgba(0,47,52,.64)", fontWeight: "bolder" }}>You haven't listed anything yet</h6>
                </div>
                <div className="mt-2" style={{ width: "15%",margin:"0 auto" }}>
                    <p style={{ color: "rgba(0,47,52,.36)" }} >Let go of what you don't use anymore</p>
                </div>
                <div>
                    

                    <Button disableRipple onClick={() => history.push("/post")} variant="outlined" style={{color:"#002f34",border:"4px solid #002f34"} } >
                        <span style={{textTransform:"lowercase",fontWeight:"700",color:"#002f34"}}>start selling</span>
                    </Button>
                    
                </div>
            </div>
        </>
    )
}

export default Show;