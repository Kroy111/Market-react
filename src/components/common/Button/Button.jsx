import style from "./Button.module.css";

export default function Button({
	children,
	onClick,
	variant = "primary",
	styleText,
	ariaLabel,
}) {
	const baseClass = style.btn;
	const typeClass = style[variant];

	return (
		<button
			type="button"
			className={`${baseClass} ${typeClass}`}
			onClick={onClick}
			style={styleText && { "--text": `"${styleText}"` }}
			aria-label={ariaLabel}
		>
			<span className={style.contentWrapper}>{children}</span>
			<div className={style["overlay-effect"]}></div>
		</button>
	);
}
