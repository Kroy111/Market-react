import { useNavigate } from "react-router";
import Button from "../common/Button/Button";
import style from "./NavigationBar.module.css";
import { ShoppingBasket, Newspaper, Shirt } from "lucide-react";

//images

const navTemplate = {
	News: { nav: "/", icon: <Newspaper size={36} color="black" /> },
	Shop: { nav: "shop", icon: <Shirt size={36} color="black" /> },
	Cart: { nav: "cart", icon: <ShoppingBasket size={36} color="black" /> },
};

export default function NavigationBar({ itemCount }) {
	const navigator = useNavigate();

	return (
		<header>
			<nav className={style.nav}>
				<ul className={style.navList}>
					{Object.entries(navTemplate).map(([key, value]) => {
						// console.log(key, value);
						return (
							<>
								<div key={key} className={style.navLiWrapper}>
									<li>
										<Button
											onClick={() => navigator(value.nav)}
											variant="navBar"
											styleText={key}
										>
											{/* <Shirt size={38} /> */}
											{value.icon}
											{value.nav === "cart" && itemCount > 0 ? (
												<span className={style.iconSpan}>{itemCount}</span>
											) : null}
										</Button>
									</li>
								</div>
								<span className={style.navLiDot}>·</span>
							</>
						);
					})}
				</ul>
			</nav>
		</header>
	);
}
