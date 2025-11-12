import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import fetchingData from "./fetchingData";

const urlApi = "https://fakestoreapi.com/products";
// let fetchingCount

function App() {
	const navigate = useNavigate();
	const [items, setItems] = useState([]);
	const [cart, setCart] = useState({});

	//fetching items.
	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchingData(urlApi);
				console.log("Fetching data: ", data);
				setItems(data);
			} catch (err) {
				console.error(err);
				setTimeout(fetchData, 5000);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		console.log(cart);
	}, [cart]);

	//Adding and increase item in cart
	const addItem = (item) => {
		setCart((prev) => ({
			...prev,
			[item.id]: (prev[item.id] ?? 0) + 1,
		}));
		console.log("add item from App.jsx");
	};

	//Decrease item in cart
	const decreaseItem = (item) => {
		if (cart[item.id] > 1) {
			setCart((prev) => ({
				...prev,
				[item.id]: prev[item.id] - 1,
			}));
		} else {
			deleteItem(item);
		}
		console.log("remove/decrease item from App.jsx");
	};

	const deleteItem = (item) => {
		setCart((prev) => {
			const { [item.id]: _, ...rest } = prev;
			return rest;
		});
	};
	return (
		<>
			<header>
				<nav>
					<button type="submit" onClick={() => navigate("/")}>
						News
					</button>
					<button type="submit" onClick={() => navigate("shop")}>
						Shop
					</button>
					<button type="submit" onClick={() => navigate("cart")}>
						Cart
					</button>
				</nav>
			</header>
			<h2>items in cart: {Object.keys(cart).length}</h2>

			<Outlet
				context={{
					cart,
					//FIXME - need to delete after finishing cart!
					setCart,
					//
					items,
					deleteItem,
					addItem,
					decreaseItem,
				}}
			/>
		</>
	);
}

export default App;
