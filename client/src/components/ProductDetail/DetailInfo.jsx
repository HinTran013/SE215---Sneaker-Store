import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { OneProduct } from "./ProductData"; //temp imgs
import style from "./DetailInfo.module.css";
import { getOneProduct } from "../../api/productAPI";
import { selectCustomer } from "../../features/customerSlice";
import ToastMessage from "../ToastMessage/ToastMessage";
import { selectCartList, addCartItemToRedux } from "../../features/cartSlice";
import { CircularProgress } from "@material-ui/core";

function DetailInfo({ id }) {
  const cartList = useSelector(selectCartList) || []; //get current cart list

  const [color, setColor] = useState(0);
  const [sizeChoose, setSizeChoose] = useState("");
  const [product, setProduct] = useState(null);
  const [favorite, setFavorite] = useState(false);

  const changeColor = (index) => {
    setColor(index);
  };

  const changeSize = (index) => {
    setSizeChoose(index);
  };

  const handleAddToCart = () => {
    if (sizeChoose === "") {
      ToastMessage("error", "Please choose a size!");
      return;
    } else {
      ToastMessage("success", "Add to cart successfully!");
      return;
    }
  };

  const handleAddToFavorite = () => {
    ToastMessage("success", "Favourite added successfully!");
    setFavorite(!favorite);
  };

  const hanleRemoveFromFavorite = () => {
    ToastMessage("success", "Favourite removed successfully!");
    setFavorite(!favorite);
  };

  const isInCart = () => {
    if (cartList.includes(product._id)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    getOneProduct(id).then((res) => {
      setProduct(res);
    });
  }, []);

  return (
    <>
      {product !== null && (
        <div className={style.container}>
          <h4 className={style.path}>Product / beautiful sneaker</h4>

          <div className={style.infoContainer}>
            <div className={style.imgWrapper}>
              <div className={style.mainImg}>
                <img src={OneProduct.src[color]} alt="sneaker" />
              </div>

              <div className={style.colorThumb}>
                {OneProduct.src.map((item, index) => (
                  <div
                    className={
                      index === color
                        ? `${style.colorItem} ${style.colorActive}`
                        : style.colorItem
                    }
                    key={index}
                    onClick={() => changeColor(index)}
                  >
                    <img src={item} />
                  </div>
                ))}
              </div>
            </div>

            <div className={style.divide}></div>

            <div className={style.infoWrapper}>
              <div className={style.info}>
                <h2 className={style.name}>Beautiful Sneaker</h2>
                <h4 className={style.brand}>Nike</h4>
                <p className={style.price}>$200</p>
                <p className={style.description}>
                  Journey off the beaten path and into wet weather with the
                  Puma.It's made with the same cushioned comfort you love, plus
                  tough traction and improved midfoot construction for secure,
                  neutral support.
                </p>

                <h4 className={style.sizeText}>Size</h4>
                <div className={style.sizeContainer}>
                  {OneProduct.size.map((item, index) => (
                    <div
                      className={
                        index === sizeChoose
                          ? `${style.sizeItem} ${style.sizeActive}`
                          : style.sizeItem
                      }
                      key={index}
                      onClick={() => changeSize(index)}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <button
                  className={style.btnAddToCart}
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
                <button
                  className={
                    favorite ? style.btnFavouriteActive : style.btnFavourite
                  }
                  onClick={() => {
                    // add if not favourite, remove if favourite
                    if (favorite) {
                      hanleRemoveFromFavorite();
                    } else {
                      handleAddToFavorite();
                    }
                  }}
                >
                  {favorite ? "Remove from favourite" : "Add to favourite"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {product === null && (
        <div className={style.progressContainer}>
          <CircularProgress />
        </div>
      )}
    </>
  );
}

export default DetailInfo;
