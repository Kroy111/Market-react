import { Link } from "react-router";
import style from "./NewsTemplate.module.css";
export default function NewsTemplate({ title, news, link, ...props }) {
	// console.log(props);
	return (
		<div className={`${style.news} card sw`}>
			<Link to={`/${link}`} className={style.linkToItem} />
			<div className={style.imgContainer}>
				<img src={props.props} alt="" />
			</div>

			<div className={style.textContainer}>
				<h2>{title}</h2>
			</div>
		</div>
	);
}
