import { useOutletContext } from "react-router";
import style from "./ItemAddControl.module.css";

export default function ItemControl({ item }) {
	const { cart, addItem, decreaseItem } = useOutletContext();

	const count = cart[item.id];
	const isCart = cart[item.id] > 0;

	return (
		<div className={style.cardControl}>
			{!isCart ? (
				<button
					type="button"
					onClick={() => {
						addItem(item);
					}}
				>
					Add cart
				</button>
			) : (
				<div className={style.cardItemsControl}>
					<button type="button" onClick={() => decreaseItem(item)}>
						-
					</button>
					<p>{count}</p>
					<button type="button" onClick={() => addItem(item)}>
						+
					</button>
				</div>
			)}
		</div>
	);
}
