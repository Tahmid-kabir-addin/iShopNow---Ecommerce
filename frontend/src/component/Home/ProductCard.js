import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import { addItemsToCart } from "../../actions/cartAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import './ProductCard.css'
import { AiOutlineShoppingCart} from 'react-icons/ai'
const ProductCard = ({ product }) => {
  const alert = useAlert();
  const dispatch = useDispatch()

  const addToCartHandler = () => {
    dispatch(addItemsToCart(product._id, 1));
    alert.success("Item Added To Cart");
  };
  // useEffect(() => {
  //   if (error) {
  //     alert.error(error);
  //     dispatch(clearErrors());
  //   }
  // }, [error, alert])
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <div className="productCard">
      <Link className="productCard" to={`/product/${product._id}`}>
        <img src={product.images[0].url} alt={product.name} />
        <p>{product.name}</p>
        <div>
          <Rating {...options} />{" "}
          <span className="productCardSpan">
            {" "}
            ({product.numOfReviews})
          </span>
        </div>
        <span>{`৳${product.price}`}</span>
        <p>
          Status:
          <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
            {product.Stock < 1 ? "OutOfStock" : "InStock"}
          </b>
        </p>
      </Link>
      {product.Stock >= 1 && <button
        disabled={product.Stock < 1 ? true : false}
        onClick={addToCartHandler}
        className="cartButton"
      >
        <AiOutlineShoppingCart />
        &nbsp; &nbsp; &nbsp;Add to Cart 
      </button>}
    </div>

  );
};

export default ProductCard;
