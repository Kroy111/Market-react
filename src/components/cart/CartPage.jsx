import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import styles from "./CartPage.module.css";
import Button from "../Button";
import CartItem from "./CartItem";
import CartCheckout from "./CartCheckout";

export default function Cart() {
	const { cart, itemsList, setCart, deleteItem } = useOutletContext();
	const isEmptyCart = Object.keys(cart).length === 0;
	const [itemsInCart, setItemsInCart] = useState(0);
	const [totalCheck, setTotalCheck] = useState(0);

	useEffect(() => {
		//sum of all items in cart.
		const totalItemsInCart = Object.values(cart).reduce(
			(acc, current) => acc + current.count,
			0,
		);
		//sum all items price in cart.
		const check = isTotalCheck(cart, itemsList);

		setItemsInCart(totalItemsInCart);
		setTotalCheck(check);
	}, [cart, itemsList]);

	return (
		<>
			{/* test block */}
			<Button
				onClick={() => {
					setCart({
						1: { count: 4, removing: false },
						4: { count: 1, removing: false },
						2: { count: 1, removing: false },
					});
				}}
			>
				test for cart
			</Button>
			<Button onClick={() => totalCheck(cart, itemsList)}>total check</Button>
			{/* -------------- */}

			<div className="headerComponent">
				<h1>Cart</h1>
				<p>{itemsInCart}</p>
			</div>
			{!isEmptyCart && (
				<div className={styles.container}>
					<div className={styles.cardsContainer}>
						{Object.entries(cart).map(([itemId, itemCount]) => {
							if (!cart) return null;

							return (
								<CartItem
									key={itemId}
									obj={findItem(itemsList, itemId)}
									count={itemCount.count}
									isRemoving={cart[itemId].removing}
									isDeleteItem={deleteItem}
								/>
							);
						})}
					</div>

					<CartCheckout itemsInCart={itemsInCart} totalCheck={totalCheck} />
				</div>
			)}
		</>
	);
}

function findItem(items, itemId) {
	return items.find((item) => item.id === Number(itemId));
}

function isTotalCheck(cart, productList) {
	const cartItemsArr = Object.entries(cart); // [index, count];

	const totalCheck = cartItemsArr.reduce((acc, el) => {
		const itemsCount = el[1].count; // work
		// console.log(el);
		const currentItemPrice = findItem(productList, el[0]).price; //work
		return acc + currentItemPrice * itemsCount;
	}, 0);

	// console.log("Total check: ", totalCheck.toFixed(2));
	return totalCheck.toFixed(2);
}
