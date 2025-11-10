import { useNavigate, useOutletContext, useParams } from "react-router";
import style from "./ItemDetail.module.css";

import ItemAddControl from "./ItemAddControl";

export default function ItemDetail() {
	const { items, cart } = useOutletContext();
	const { id } = useParams();
	const navigation = useNavigate();

	const item = items.find((el) => el.id === Number(id));

	if (!item) {
		navigation(-1);
		return null;
	}

	console.log(cart);
	return (
		<div className={`sw ${style.card}`}>
			<button
				type="button"
				className={style.btnClose}
				onClick={() => navigation(-1)}
			>
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					role="graphics-symbol img"
				>
					<path
						d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
						fill="currentColor"
					/>
				</svg>
			</button>
			{/* <button type="button" onClick={() => navigation(-1)}>
			</button> */}
			<div className={style.imageContainer}>
				<img src={item.image} alt={item.title} />
			</div>

			<div className={style.descriptionContainer}>
				<div>
					<h2>{item.title}</h2>
					{/* <hr /> */}
					{/* <h3>Description</h3> */}
					<br />
					<p>{item.description}</p>
				</div>
				<ItemAddControl item={item} />
			</div>
		</div>
	);
}
