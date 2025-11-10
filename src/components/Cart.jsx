import { useOutletContext } from "react-router";
import styles from "./Cart.module.css";

export default function Cart() {
	const { cart, items, deleteItem } = useOutletContext();

	return (
		<>
			<div className="headerComponent">
				<h1>Cart</h1>
			</div>
			<div className={styles.container}>
				{Object.entries(cart).map(([itemId, itemCount]) => {
					return (
						<Item
							key={itemId}
							obj={findItem(items, itemId)}
							count={itemCount}
							btnDelete={deleteItem}
						/>
					);
				})}
			</div>
		</>
	);
}

function Item({ obj, count, btnDelete }) {
	console.log(obj);
	return (
		<div className="card sw">
			<div className={styles.item}>
				<div className={styles.imageContainer}>
					<h1>ID:{obj.id}</h1>
				</div>
				<h2>{obj.title}</h2>
				<h2>x{count}</h2>
				<button type="button" onClick={() => btnDelete(obj)}>
					X
				</button>
			</div>
		</div>
	);
}

function findItem(items, itemId) {
	return items.find((item) => item.id === Number(itemId));
}
