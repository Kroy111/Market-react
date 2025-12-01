import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import fetchingData from "./fetchingData";
import NavigationBar from "./navigationBar/NavigationBar";
import { addItem, deleteItem, decreaseItem } from "./utils/cartLogic";

const urlApi = "https://fakestoreapi.com/products";
// let fetchingCount

function App() {
	const [itemsList, setItemsList] = useState([]);
	const [cart, setCart] = useState({});
	const [itemCountInCart, setItemCountInCart] = useState(0);

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
		console.log("Data was fetched", cart);
		const itemsCount = Object.values(cart).reduce(
			(acc, item) => acc + item.count,
			0,
		);
		setItemCountInCart(itemsCount);
		console.log("APP items count", itemsCount, cart);
	}, [cart]);

	//Adding and increase item in cart
	const addItemToCart = (item) => {
		setCart((prev) => addItem(item, prev));
		console.log("Add item from App.jsx");
	};

	//Decrease item in cart
	const decreaseItemInCart = (item) => {
		setCart((prev) => decreaseItem(item, prev));
		console.log("Decrease item in car!");
	};

	//Delete item in cart
	const deleteItemFromCart = (item) => {
		setCart((prev) => deleteItem(item, prev));
		console.log("Delete item in cart");
	};

	return (
		<>
			<NavigationBar itemCount={itemCountInCart} />

			<Outlet
				context={{
					cart,
					itemsList,
					setCart,
					deleteItem: deleteItemFromCart,
					addItem: addItemToCart,
					decreaseItem: decreaseItemInCart,
				}}
			/>
		</>
	);
}

export default App;
