import { useState } from "react";
import { ShoppingBasket } from "lucide-react";
import styles from "./Image.module.css";

export default function Image({ item }) {
	const [isLoading, setIsLoading] = useState(false);
	return (
		<>
			{!isLoading && (
				<ShoppingBasket size={256} className={styles.cardImageSkeleton} />
			)}
			<img
				src={item.image}
				alt={item.title}
				onLoad={() => setIsLoading(true)}
				className={`${isLoading ? styles.imageVisible : styles.imageHidden}`}
			/>
		</>
	);
}
