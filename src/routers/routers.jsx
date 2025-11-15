import App from "../components/App.jsx";
import News from "../components/News.jsx";
import ErrorPage from "../components/ErrorPage.jsx";
import Shop from "../components/shop/Shop.jsx";
import Cart from "../components/cart/CartPage.jsx";
import ItemDetail from "../components/shop/ItemDetail.jsx";
const arr = [1, 2, 3, 4, 5, 6, 7, 7];

export const routers = [
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				// path: "news",
				element: <News arr={arr} />,
			},
			{
				path: "shop",
				element: <Shop />,
			},
			{
				path: "shop/:id",
				element: <ItemDetail />,
			},
			{
				path: "cart",
				element: <Cart />,
			},
		],
	},
];
