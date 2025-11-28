import { newsArray } from "./news";
import NewsTemplate from "../../components/news/NewsTemplate";
import style from "./News.module.css";

export default function News() {
	console.log(newsArray);
	return (
		<>
			<div className="headerComponent">
				<h1>News</h1>
			</div>

			<div className={`${style.container}`}>
				{newsArray.map((el) => (
					<NewsTemplate
						key={el.id}
						title={el.title}
						news={el.news}
            link={el.id}
						props={el.img}
					/>
				))}
			</div>
		</>
	);
}
