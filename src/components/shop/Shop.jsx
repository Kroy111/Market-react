import { useOutletContext, Link, useNavigate } from "react-router";

import styles from "./Shop.module.css";
import ItemControl from "./ItemAddControl";
import Image from "../Image.jsx";

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

function Item({ item }) {
	return (
		<div className={`card sw fade-in ${styles.cardContainer}`}>
			<div className={styles.cardImage}>
				<Image item={item} />
				<Link to={`/shop/${item.id}`} className={styles.linkToItem}></Link>
			</div>

			<div className={styles.cardControl}>
				<h2>{item.title}</h2>
				<Link to={`/shop/${item.id}`}>Description</Link>

				<p>Price: {item.price}$</p>
				<ItemControl item={item} />
			</div>
		</div>
	);
}
