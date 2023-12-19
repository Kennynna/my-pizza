import React from "react";
import style from "./Cart.module.scss";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <h1 className={style.h1Text}>Корзина</h1>

      <p className={style.pText}>
        Ваша корзина пуста, пожалуйста добавьте товар в корзину чтобы оформить
        заказ{" "}
      </p>
      <p className={style.pText}>
        Your cart is empty, please add items to your cart to place an order.{" "}
      </p>
      <Link to="/">
        <p className={style.pAcc}>Показать ассортимент</p>
      </Link>
    </div>
  );
};
export default Cart;
