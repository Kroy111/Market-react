import style from "./NewsDetail.module.css";

import { newsArray } from "../../pages/News/news";
import { useParams, useNavigate } from "react-router";

export default function NewsDetail() {
	// const { itemsList, cart } = useOutletContext();
	const { id } = useParams();
	const currentNews = newsArray.find((el) => el.id === Number(id));
	const navigation = useNavigate();

	// if (!item) {
	// 	navigation(-1);
	// 	return null;
	// }
	console.log(newsArray, currentNews, id);

	return (
		<div className={`fade-in sw ${style.card}`}>
			<div className={style.imageContainer}>
				{/* <img src={item.image} alt={item.title} /> */}
				<img src={currentNews.img} alt={currentNews.title} />
			</div>

			<div className={style.infoContainer}>
				<div>
					<h1 className={style.title}>{currentNews.title}</h1>

					<div className={style.itemInfo}>
						<p>{currentNews.news}</p>
					</div>
				</div>
				<button type="button" onClick={() => navigation(-1)}>
					Back
				</button>
			</div>
		</div>
	);
}
