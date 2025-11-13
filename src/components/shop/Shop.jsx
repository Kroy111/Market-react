import { useEffect, useState } from "react";
import { ShoppingBasket } from "lucide-react";
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

function Item({ item }) {
	const [isLoading, setIsLoading] = useState(false);

	return (
		<div className={`card sw ${styles.cardContainer}`}>
			<div className={styles.cardImage}>
				{!isLoading && (
					<ShoppingBasket size={256} className={styles.cardImageSkeleton} />
				)}
				<img
					src={item.image}
					alt={item.title}
					onLoad={() => setIsLoading(true)}
					className={isLoading ? styles.imageVisible : styles.imageHidden}
				/>
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
