import classes from "./CartItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const {
    itemName: title,
    cartItem: quantity,
    cartTotalPrice: total,
    cartItemPrice: price,
  } = useSelector((state) => state.cart);

  const addItemHandler = () => {
    dispatch(cartActions.incrementItem());
  };
  const removeItemHandler = () => {
    dispatch(cartActions.decrementItem());
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
