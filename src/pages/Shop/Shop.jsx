import { useOutletContext, Link, useNavigate } from "react-router";

import styles from "./Shop.module.css";
import ItemAddControl from "../../components/ItemAddControl/ItemAddControl.jsx";
import Image from "../../components/common/Image/Image.jsx";

export default function Shop() {
	//access to data from App.jsx
	//- itemsList contains the all goods for shop
	const { itemsList, cart } = useOutletContext();

	const navigator = useNavigate();

	return (
		<>
			<div className="headerComponent">
				<h1>Shop</h1>
			</div>

			<div className="shopItems container">
				{itemsList.map((el) => (
					<Item key={el.id} item={el} />
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

				<ItemAddControl item={item} />
			</div>
		</div>
	);
}
