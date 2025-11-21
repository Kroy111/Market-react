import { useEffect, useState } from "react";
import styles from "./CartItem.module.css";
import ItemAddControl from "../ItemAddControl/ItemAddControl";
import Image from "../common/Image/Image";

export default function CartItem({ obj, count, isRemoving }) {
	const [isFadeOut, setIsFadeOut] = useState(false);

	useEffect(() => {
		if (isRemoving) {
			setIsFadeOut(true);
		}
	}, [isRemoving]);

	if (!obj) return null;
	return (
		<div
			className={`${styles.itemCard} sw ${isFadeOut ? "fade-out" : "fade-in"}`}
		>
			<div className={styles.itemImage}>
				<Image item={obj} />
			</div>

			<div className={styles.itemSummary}>
				<h3>{obj.title}</h3>
				{/* <p>x{count}</p> */}
				<br />
				<h2>{`${obj.price}＄`}</h2>
				<span className={styles.textColor}>
					Delivery is <span className={styles.highlightCategory}>Free</span>
				</span>
			</div>

			<div className={styles.itemControl}>
				<div className={styles.totalPrice}>
					<h2>{`${(count * obj.price).toFixed(2)}＄`}</h2>
				</div>

				<ItemAddControl item={obj} />
			</div>
		</div>
	);
}
