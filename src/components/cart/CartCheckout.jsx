import Button from "../Button";
import styles from "./CartCheckout.module.css";

export default function CartCheckout({ itemsInCart, totalCheck }) {
	return (
		<div className={`${styles.checkoutContainer} card sw`}>
			<div className={styles.checkoutInfo}>
				<div className={styles.checkoutInfoBlock}>
					<h2>Your cart</h2>
					<span className={styles.textColor}>{itemsInCart} items</span>
				</div>

				<div className={styles.checkoutInfoBlock}>
					<span className={styles.checkoutMainText}>{itemsInCart} Items</span>
					<span className={styles.textColor}>{totalCheck} ＄</span>
				</div>

				<div className={styles.checkoutInfoBlock}>
					<span className={styles.checkoutMainText}>Delivery</span>
					<span className={styles.highlightCategory}>Free</span>
				</div>

				<br />
			</div>

			<Button
				variant="checkout"
				onClick={() => {
					alert(
						`Order is done! The ${itemsInCart} items will be delivery for ${totalCheck}$! Thank you.`,
					);
				}}
			>
				<span>Checkout</span>
			</Button>
		</div>
	);
}
