import App from "../components/App.jsx";
import News from "../pages/News/News.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import Shop from "../pages/Shop/Shop.jsx";
import Cart from "../pages/Cart/Cart.jsx";
import ItemDetail from "../components/shop/ItemDetail.jsx";

export const routers = [
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				// path: "news",
				element: <News />,
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
