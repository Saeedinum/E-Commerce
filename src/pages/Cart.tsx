import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProducts } from "@store/Products/productsSlice";

import CartItem from "@components/ecommerce/CartItem/CartItem";

const Cart = () => {
const dispatch = useAppDispatch()
const {items } = useAppSelector((state) => state.cart)
useEffect(() => {
	dispatch(actGetProducts(/* pass the argument here */))
}, [dispatch])
  return (
		<>
			<CartItem />
			<CartItem />
			<CartItem />
			<CartItem />
			<CartItem />
			<CartItem />
			<CartItem />
			<CartItem />
			<CartItem />
			<CartItem />
			<CartItem />
			<CartItem />
		</>
	);
};

export default Cart;
