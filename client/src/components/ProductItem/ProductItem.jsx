import React, { useState } from 'react'
import style from './ProductItem.module.css'
import Nike1 from '../../assets/images/sneaker-transparent/nike-1.png'     //temp image
import ProductModal from '../ProductModal/ProductModal';
import {useHistory} from 'react-router-dom';

function ProductItem({ data }) {
     const history = useHistory();

     const [showModal, setShowModal] = useState(false);
    
     const openModal = (e) => {
          e.stopPropagation();
          setShowModal(prev => !prev);    
     }
     function handleNavClick(linkPath) {
          history.push(linkPath);
     }
  
     return (
          <>
          {showModal ? <ProductModal showModal={showModal} setShowModal={setShowModal}/> : null}
          <div className={style.card} onClick={() => handleNavClick(`/product/${data._id}`)}>
               <div className={style.imgBox}>
                    <img src={Nike1} />
               </div>
               
               <div className={style.popup}>
                    <div className={`${style.btn} ${style.btn1}`} onClick={openModal}>
                         <i className="fas fa-ellipsis-h"></i>
                    </div>
                    <div className={`${style.btn} ${style.btn2}`}>
                         <i className="fal fa-shopping-cart"></i>
                    </div>
                    <div className={`${style.btn} ${style.btn3}`}>
                         <i className="far fa-heart"></i>
                    </div>
               </div>

               <div className={style.content}>
                    <h2 className={style.name}>{data.name}</h2>
                    <h4 className={style.rating}>
                         <i className="fas fa-star"></i>
                         <i className="fas fa-star"></i>
                         <i className="fas fa-star"></i>
                         <i className="fas fa-star"></i>
                         <i className="far fa-star"></i>
                    </h4>
                    <p className={style.shortDesc}>{data.shortDescription}</p>
                    <h2 className={style.price}>{`$${data.price}`}</h2>
               </div>
          </div>
          </>
     )
}

export default ProductItem