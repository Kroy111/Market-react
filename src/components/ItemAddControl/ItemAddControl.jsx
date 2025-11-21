import { useOutletContext } from "react-router";
import Button from "../common/Button/Button";
import style from "./ItemAddControl.module.css";
import { Trash, Plus, Minus } from "lucide-react";

export default function ItemAddControl({ item }) {
	const { cart, addItem, decreaseItem, deleteItem } = useOutletContext();

	const ANIMATION_DURATION = 250;
	const count = cart[item.id]?.count;
	const isCart = count > 0;

	const decreaseOrDelete = () => {
		if (count > 1) {
			decreaseItem(item);
			console.log("item count Decrease");
		} else {
			//decrease item count and after delete item from cart.
			decreaseItem(item);

			setTimeout(() => {
				deleteItem(item);
			}, ANIMATION_DURATION);
		}
	};

	return (
		<div className={style.cardControl}>
			{!isCart ? (
				<Button
					onClick={() => {
						addItem(item);
					}}
					ariaLabel={"Add item in cart"}
				>
					<span>Add cart</span>
				</Button>
			) : (
				<div className={style.cardItemsControl}>
					<Button
						onClick={() => decreaseOrDelete()}
						ariaLabel={"Delete one item in cart"}
					>
						{count === 1 ? <Trash size={20} /> : <Minus size={20} />}
						{/* <span>-</span> */}
					</Button>
					<p className={style.pCount}>{count}</p>
					<Button
						onClick={() => addItem(item)}
						ariaLabel={"Add one item count in cart"}
					>
						<Plus size={20} />
					</Button>
				</div>
			)}
		</div>
	);
}
