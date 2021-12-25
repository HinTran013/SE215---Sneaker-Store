import React, { useEffect, useState } from "react";
import style from "./HistoryPart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectCartList } from "../../features/cartSlice";
import { selectCustomer } from "../../features/customerSlice";
import { getHistory } from "../../api/cartAPI";
import HistorySection from "./HistorySection";
import { CartItem } from "../Cart/CartTableData.js";

function HistoryPart() {

  const customerState = useSelector(selectCustomer);

  return (
    <div className={style.container}>
      <h1 className={style.h1}>Billing History</h1>
      <hr />
       <HistorySection historyList={CartItem} />
    </div>
  );
}

export default HistoryPart;
