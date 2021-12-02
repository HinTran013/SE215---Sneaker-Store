import React from 'react'

import CartList from "./CartTableData"
import styleCartTable from "./CartTable.module.css"
import sneaker from "../../assets/images/ColoredSneaker.png"    //temp image


const CartTable = () => {
    return (
        <table className={styleCartTable.cartTable}>
            <thead>
                <tr className={styleCartTable.trHead}>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Total</th>
                </tr>
            </thead>

            <tbody className={styleCartTable.trProduct}>


                {CartList.map((item) => {
                    return (
                        <tr>
                            <th>
                                <div className={styleCartTable.mainInfo}>
                                    <img src={sneaker} alt="" />
                                    <div className={styleCartTable.nameProduct}>
                                        <p>{item.name}</p>
                                        <div className={styleCartTable.propsProduct}>
                                            <p>{item.detailColor}</p>
                                            <p>{item.detailSize}</p>
                                        </div>
                                        <div className={styleCartTable.propsProduct}>
                                            <p className={styleCartTable.newTotal}>Total {item.discount}</p>
                                        </div>

                                    </div>
                                </div>
                            </th>
                            <th className={styleCartTable.amount}>{item.price}</th>
                            <th className={styleCartTable.discount}>{item.discount}</th>
                            <th className={styleCartTable.amount}>{item.total}</th>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default CartTable;