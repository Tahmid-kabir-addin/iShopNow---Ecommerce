import React, { useEffect } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { removeItemsFromCart } from '../../actions/cartAction'
import { useSelector, useDispatch } from "react-redux";

const OrderSuccess = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  useEffect(async () => {
    cartItems.forEach(element => {
      dispatch(removeItemsFromCart(element.product))
    });
  }, [])

  return (
    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Your Order has been Placed successfully </Typography>
      <Link to="/orders">View Orders</Link>
    </div>
  );
};

export default OrderSuccess;
