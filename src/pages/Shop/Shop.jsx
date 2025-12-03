import { useOutletContext, Link } from "react-router";

import styles from "./Shop.module.css";
import ItemAddControl from "../../components/ItemAddControl/ItemAddControl.jsx";
import Image from "../../components/common/Image/Image.jsx";

export default function Shop() {
	//access to data from App.jsx
	//- itemsList contains the all goods for shop
	const { itemsList } = useOutletContext();

	return (
		<>
			<div className="headerComponent">
				<h1>Shop</h1>
			</div>

			<div className={`${styles.container}`}>
				{itemsList.map((el) => (
					<Item key={el.id} item={el} />
				))}
			</div>
		</>
	);
}

function Item({ item }) {
	return (
		<div className={`card ${styles.cardContainer} sw fade-in`}>
			<div className={styles.cardImage}>
				<Image item={item} />
				<Link to={`/shop/${item.id}`} className={styles.linkToItem}></Link>
			</div>

			<div className={styles.cardControl}>
				<h2>{item.title}</h2>
				<Link to={`/shop/${item.id}`}>Description</Link>

				<div className={styles.itemInfo}>
					<div className={styles.itemInfoContainer}>
						<span>Count:</span>
						<span>{item.rating.count}</span>
					</div>
					<div className={styles.itemInfoContainer}>
						<span>Price:</span>
						<span>{item.price}$</span>
					</div>
					{/* <p>Price: {item.price}$</p> */}
				</div>

				<ItemAddControl item={item} />
			</div>
		</div>
	);
}
