import { useOutletContext } from "react-router";
import Button from "../Button";
import style from "./ItemAddControl.module.css";
import { Trash, Plus, Minus } from "lucide-react";

export default function ItemControl({ item }) {
	const { cart, addItem, decreaseItem } = useOutletContext();

	const count = cart[item.id];
	const isCart = cart[item.id] > 0;

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
					<Button onClick={() => decreaseItem(item)}>
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
