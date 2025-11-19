import App from "../components/App.jsx";
import News from "../pages/Home/News.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import Shop from "../pages/Shop/Shop.jsx";
import Cart from "../pages/Cart/Cart.jsx";
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
