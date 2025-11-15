import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import fetchingData from "./fetchingData";

const urlApi = "https://fakestoreapi.com/products";
// let fetchingCount

function App() {
	const navigate = useNavigate();
	const [itemsList, setItemsList] = useState([]);
	const [cart, setCart] = useState({});

	//fetching items.
	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchingData(urlApi);
				console.log("Fetching data: ", data);
				setItemsList(data);
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
			...prev, // тут идет копирование свойств на первом слое
			[item.id]: {
				//тут мы спускаемся ниже по айдишнику
				...prev[item.id], //опять копируем свойства которые есть на втором слое
				count: (prev[item.id]?.count ?? 0) + 1,
				removing: false,
			},
		}));
		console.log("add item from App.jsx");
	};

	//Decrease item in cart
	const decreaseItem = (item) => {
		setCart((prev) => {
			const currentCount = prev[item.id].count;

			if (currentCount <= 1) {
				markItemRemoving(item);
			}
			return {
				...prev,
				[item.id]: {
					...prev[item.id],
					count: prev[item.id].count - 1,
				},
			};
		});
	};

	const markItemRemoving = (item) => {
		setCart((prev) => ({
			...prev,
			[item.id]: {
				//ANCHOR not shure, but mb need use it
				...prev[item.id],
				removing: true,
			},
		}));
		console.log(cart[item.id]);
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
					itemsList,
					deleteItem,
					addItem,
					decreaseItem,
				}}
			/>
		</>
	);
}

export default App;
