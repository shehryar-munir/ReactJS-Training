import React , {useState} from "react";
import Rating from '@mui/material/Rating'
import  Button from '@mui/material/Button'
import {Typography} from "@mui/material";
export default function ProductCard({productImg, productName, productDescription, productPrice,productColor}) {
    const [value, setValue] = useState(4);


    return(

        <div style={{background:"white" ,color:"black", margin:"5%"}}>

            <div >


                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <img
                        height={"20%"}
                        width={"50%"}
                        src={productImg}
                        alt={"Image"}/>
                    <h1>
                        {productName}
                    </h1>

                    <Typography style={{margin:"5%"}} variant="body2" color="text.secondary">
                        {productDescription}
                    </Typography>

                    <h2 style={{color: productColor}}>
                        {productPrice}
                    </h2>

                    <Rating
                        name="simple-controlled"
                        value={value}
                        style={{padding: "2%"}}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                    <div>
                        <Button variant="contained" onClick={(e)=>        alert(`Product Name: ${productName} \nProduct Description: ${productDescription} \nProduct Price: ${productPrice}`)} style={{width: "500px", color: "white", background: productColor}}>Add
                            to Cart</Button>
                    </div>

                </div>
            </div>

        </div>
    );
}