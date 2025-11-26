import style from "./NewsTemplate.module.css";
export default function NewsTemplate({ title, news, ...props }) {
	console.log(props);
	return (
		<div className={`${style.news} card sw`}>
			<div className={style.imgContainer}>
				<img src={props.props} alt="" />
			</div>

			<div className={style.textContainer}>
				<h2>{title}</h2>
				{/* <p>{news}</p> */}
			</div>
		</div>
	);
}
