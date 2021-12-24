import React, { useEffect, useState } from "react";
import style from "./HistoryPart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectCartList } from "../../features/cartSlice";
import { selectCustomer } from "../../features/customerSlice";
import { getHistory } from "../../api/cartAPI";
import HistorySection from "./HistorySection";

function HistoryPart() {

  const [products, setProducts] = useState([]);
  const customerState = useSelector(selectCustomer);

  useEffect(() => {
    getHistory(`http://localhost:3001/cart/history?id=${customerState.ID}`).then(
      (res) => {

        const listCarts = res.doneCarts;
        let productDoneList = [];

        for (let i = 0; i < listCarts.length; i++) {
          productDoneList = productDoneList.concat(listCarts[i].products);
        }

        setProducts(productDoneList);
      }
    );
  }, []);

  console.log("products: ", products);

  return (
    <div className={style.container}>
      <h1 className={style.h1}>Billing History</h1>
      <hr />
      {products.length === 0 && <p>There is no products that you bought</p>}
      {products.length !== 0 && <HistorySection historyList={products} />}
    </div>
  );
}

export default HistoryPart;
