import { useOutletContext } from "react-router";
import Button from "../Button";
import style from "./ItemAddControl.module.css";
import { Trash, Plus, Minus } from "lucide-react";

export default function ItemControl({ item }) {
	const { cart, addItem, decreaseItem, deleteItem } = useOutletContext();

	// console.log(cart[item.id]?.count);
	const count = cart[item.id]?.count;
	const isCart = count > 0;

	const decreaseOrDelete = () => {
		if (count > 1) {
			decreaseItem(item);
		} else {
			deleteItem(item);
		}
	};

	return (
		<div className={style.cardControl}>
			{!isCart ? (
				<Button
					onClick={() => {
						addItem(item);
					}}
				>
					<span>Add cart</span>
				</Button>
			) : (
				<div className={style.cardItemsControl}>
					<Button onClick={() => decreaseOrDelete()}>
						{count === 1 ? <Trash size={20} /> : <Minus size={20} />}
						{/* <span>-</span> */}
					</Button>
					<p className={style.pCount}>{count}</p>
					<Button onClick={() => addItem(item)}>
						<Plus size={20} />
					</Button>
				</div>
			)}
		</div>
	);
}
