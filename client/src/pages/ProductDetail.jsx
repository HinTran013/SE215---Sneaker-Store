import React from "react";
import BackGroundImg from '../components/ProductDetail/BackGroundImg'
import DetailInfo from '../components/ProductDetail/DetailInfo'
import { OneProduct } from "../components/ProductDetail/ProductData";
import SuggestProducts from '../components/ProductDetail/SuggestProducts'
import ProductItem from "../components/ProductItem/ProductItem";


function ProductDetail(props) {

     const id = props.match.params.id;

     return (
          <div >
               <BackGroundImg />

               <DetailInfo id={id}/>

               <h1 style={{fontSize: '2.2rem', fontWeight: '400', marginLeft: '100px'}}>Suggested Products</h1>
               <div style={{display: 'flex', margin: '30px', padding:'30px'}}>
               <ProductItem data={OneProduct} />
               <ProductItem data={OneProduct} />
               <ProductItem data={OneProduct} />
               <ProductItem data={OneProduct} />
               <ProductItem data={OneProduct} />
               </div>
               
               {/* <SuggestProducts /> */}
          </div>
     )
}

export default ProductDetail