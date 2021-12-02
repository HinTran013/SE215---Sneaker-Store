import React from 'react'

import styleCartInfo from "./CartCustomerInfo.module.css"

const CartCustomerInfo = () =>
{

    return (
        <div className={styleCartInfo.cartInfoDiv}>
            <h1 className={styleCartInfo.titleInfo}>Customer Information</h1>

            <div className={styleCartInfo.divSectionCal}>
                <div className={styleCartInfo.divInput}>
                    <div className={styleCartInfo.divInfo}>
                        <input 
                            className={styleCartInfo.input} 
                            type="text" 
                            placeholder="Name"
                            
                        />
                    </div>
                    <div className={styleCartInfo.divInfo}>
                        <input
                            className={styleCartInfo.input}
                            type="text" 
                            placeholder="Email"
                           
                        />
                    </div>
                    <div className={styleCartInfo.divInfo}>
                        <input 
                            className={styleCartInfo.input} 
                            type="text" 
                            placeholder="Address" 
                            
                        />
                    </div>
                    <div className={styleCartInfo.divInfo}>
                        <input 
                            className={styleCartInfo.input} 
                            type="text" 
                            placeholder="Phone Number" 
                            
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartCustomerInfo;