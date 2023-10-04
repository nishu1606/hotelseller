import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import BedroomParentOutlinedIcon from '@mui/icons-material/BedroomParentOutlined';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';


const Hotels = ({menuData}) => {
    return (
        <>
        <section className='main-card'>
        {menuData.map((curElem) => {

            const{Image , Location,Name, Price, Room , Bed, Bath, SFT, Place} = curElem;
            return (
                <>
            <div className='card' >
                <img src={Image} className='image' alt='pic' />
                <button>For Rent</button>
                <FavoriteBorderIcon className='icon' style={{ fontSize: 80 }} />
                <div className='det2'>
                    <div className='det2-1'>
                        <PlaceOutlinedIcon style={{ fontSize: 50 }} />
                        <div className='p'>{Location} </div>
                    </div>
                </div>
                <div className='det3'>
                    <div className='det3-1'>
                        <h4>{Name}</h4>
                    </div>
                </div>
                <div className='pri'>
                    <div className='prices' style={{fontSize:40, fontWeight:"bold", marginLeft:2}}>{Price}</div>
                </div>
                <div className='det4'>
               
                    <div className='det4-1'>
                        <HomeWorkIcon style={{ fontSize: 35 }} />
                        <h4>{Room}</h4>
                        <div className='det4-2'>
                            <BedroomParentOutlinedIcon style={{ fontSize: 35 }} />
                            <h4>{Bed}</h4>
                            <div className='det4-3'>
                                <BathtubIcon style={{ fontSize: 35 }} />
                                <h4>{Bath}</h4>
                                <div className='det4-4'>
                                    <SquareFootIcon style={{ fontSize: 35 }} />
                                    <h4>{SFT}</h4>
                                    <div>
                                    </div>
                                    
                                </div>
                                
                                <div className='hr'>
                                        <button className='btnn' style={{backgroundColor:"white", color:"blue", paddingLeft:50, paddingRight:50, borderColor:"blue", borderRadius:30}}>Rent</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
                </>
            )

        })}
        </section>
        </>
        
        




    )
}

export default Hotels
