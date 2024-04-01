import React from 'react'
import ProductCard from "../../Components/ProductCardComponent/ProductCard";

export default function ProductCardPage ()  {
    // const products = null
    const products = [
        {
            productColor: "Black",
            productName: "Fossil",
            productDescription: "Fossil Men’s Chronograph Quartz Silver Stainless Steel Black Dial 44mm Watch FS5236",
            productPrice: "$100",
            productImg: "https://royalwrist.pk/wp-content/uploads/2022/03/1-331-600x600.jpg",
        },

        {
            productColor: "#D36B00",
            productName: "Guess",
            productDescription: "Guess Men’s Quartz Gold Stainless Steel Black Dial 44mm Watch W1315G2",
            productPrice: "$100",
            productImg: "https://royalwrist.pk/wp-content/uploads/2022/12/W1315G2-600x600.jpg",
        },


        {
            productColor: "silver",
            productName: "Citizen",
            productDescription: "Citizen Armani Men’s Quartz Stainless Steel Beige Dial 43mm Watch AR11352",
            productPrice: "$100",
            productImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4oyWsdJynRpQvKEzGDrmkSPpLA-7hf0ddWQ&usqp=CAU",
        },
    ]

    return (

        <div style={{   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',display:"flex-wrap", flexDirection:"column"}}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh', // Adjust the height as needed
            }}>
                {products && (products.length > 0) ?  (
                    products.map((prod, index) => {
                        return <ProductCard productColor={prod.productColor} productName={prod.productName} productDescription={prod.productDescription} productPrice={prod.productPrice} productImg={prod.productImg} key={index} />
                    })
                ) : <h1> No Products Found</h1>}

            </div>
        </div>
    );

}