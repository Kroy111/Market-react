import { useEffect, useState } from "react";
import styles from "./Shop.module.css";
import { useOutletContext, Link, useNavigate } from "react-router";
import ItemControl from "./ItemAddControl";

export default function Shop() {
	//access to data from App.jsx
	//- items contains the all goods for shop
	const { items, cart, addItem, decreaseItem } = useOutletContext();

	const navigator = useNavigate();

	return (
		<>
			<div className="headerComponent">
				<button type="button" onClick={() => console.log(items)}>
					fetching data
				</button>
				<button type="button" onClick={() => console.log(cart)}>
					test
				</button>

				<h1>Shop</h1>
			</div>

			<div className="shopItems container">
				{items.map((el) => (
					<Item
						key={el.id}
						item={el}
						count={cart[el.id] ?? 0}
						handleAddItem={addItem}
						handleDecreaseItem={decreaseItem}
					/>
				))}
			</div>
		</>
	);
}

function Item({ item, count, handleAddItem, handleDecreaseItem }) {
	// console.log(item);
	//checking the cart for the presence of goods in it.
	// const isCart = count > 0;
	return (
		<div className={`card sw ${styles.cardContainer}`}>
			<div className={styles.cardImage}>
				<img src={item.image} alt={item.title} />
			</div>

			<div className={styles.cardControl}>
				<h2>{item.title}</h2>
				<Link to={`/shop/${item.id}`}>Description</Link>

				<p>Price: {item.price}$</p>
				{/* {!isCart ? (
					<button
						type="button"
						onClick={() => {
							handleAddItem(item);
						}}
					>
						Add cart
					</button>
				) : (
					<div className={styles.cardItemsControl}>
						<button type="button" onClick={() => handleDecreaseItem(item)}>
							-
						</button>
						<p>{count}</p>
						<button type="button" onClick={() => handleAddItem(item)}>
							+
						</button>
					</div>
				)} */}
				<ItemControl item={item} />
			</div>

			<Link to={`/shop/${item.id}`} className={styles.linkToItem}></Link>
		</div>
	);
}
