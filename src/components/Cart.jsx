import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import styles from "./Cart.module.css";
import ItemAddControl from "./shop/ItemAddControl";
import Button from "./Button";
import Image from "./Image";

export default function Cart() {
	const { cart, items, setCart } = useOutletContext();
	const isEmptyCart = Object.keys(cart).length === 0;
	const [itemsInCart, setItemsInCart] = useState(0);
	const [totalCheck, setTotalCheck] = useState(0);

	useEffect(() => {
		//sum of all items in cart.
		const totalItemsInCart = Object.values(cart).reduce(
			(acc, current) => acc + current,
			0,
		);
		//sum all items price in cart.
		const check = isTotalCheck(cart, items);

		setItemsInCart(totalItemsInCart);
		setTotalCheck(check);
	}, [cart, items]);

	return (
		<>
			{/* test block */}
			<Button
				onClick={() => {
					setCart({ 1: 4, 4: 1, 2: 10 });
				}}
			>
				test for cart
			</Button>
			<Button onClick={() => totalCheck(cart, items)}>total check</Button>
			{/* -------------- */}

			<div className="headerComponent">
				<h1>Cart</h1>
				<p>{itemsInCart}</p>
			</div>
			{!isEmptyCart && (
				<div className={styles.container}>
					<div className={styles.cardsContainer}>
						{Object.entries(cart).map(([itemId, itemCount]) => {
							return (
								<Item
									key={itemId}
									obj={findItem(items, itemId)}
									count={itemCount}
								/>
							);
						})}
					</div>

					<Checkout itemsInCart={itemsInCart} totalCheck={totalCheck} />
				</div>
			)}
		</>
	);
}

function Item({ obj, count }) {
	const [isFadeOut, setIsFadeOut] = useState(false);

	return (
		<div
			className={`${styles.itemCard} sw ${isFadeOut ? "fade-out" : "fade-in"}`}
		>
			<div className={styles.itemImage}>
				<Image item={obj} />
			</div>

			<div className={styles.itemSummary}>
				<h3>{obj.title}</h3>
				{/* <p>x{count}</p> */}
				<br />
				<h2>{`${obj.price}＄`}</h2>
				<span className={styles.textColor}>
					Delivery is <span className={styles.highlightCategory}>Free</span>
				</span>
			</div>

			<div className={styles.itemControl}>
				<div className={styles.totalPrice}>
					<h2>{`${(count * obj.price).toFixed(2)}＄`}</h2>
				</div>

				<ItemAddControl item={obj} />
			</div>
		</div>
	);
}

function Checkout({ itemsInCart, totalCheck }) {
	return (
		<div className={`${styles.checkoutContainer} card sw`}>
			<div className={styles.checkoutInfo}>
				<div className={styles.checkoutInfoBlock}>
					<h2>Your cart</h2>
					<span className={styles.textColor}>{itemsInCart} items</span>
				</div>

				<div className={styles.checkoutInfoBlock}>
					<span className={styles.checkoutMainText}>{itemsInCart} Items</span>
					<span className={styles.textColor}>{totalCheck} ＄</span>
				</div>

				<div className={styles.checkoutInfoBlock}>
					<span className={styles.checkoutMainText}>Delivery</span>
					<span className={styles.highlightCategory}>Free</span>
				</div>

				<br />
			</div>

			<Button variant="checkout" onClick={() => alert("Order is done!")}>
				<span>Checkout</span>
			</Button>
		</div>
	);
}

function findItem(items, itemId) {
	return items.find((item) => item.id === Number(itemId));
}

function isTotalCheck(cart, productList) {
	const cartArr = Object.entries(cart); // [index, count];

	const totalCheck = cartArr.reduce((acc, el) => {
		const itemsCount = el[1]; // work
		const item = findItem(productList, el[0]); //work
		return acc + item.price * itemsCount;
	}, 0);

	// console.log("Total check: ", totalCheck.toFixed(2));
	return totalCheck.toFixed(2);
}
