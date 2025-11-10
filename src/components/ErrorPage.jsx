import { useNavigate, useRouteError } from "react-router";

export default function ErrorPage() {
	const error = useRouteError();
	const nav = useNavigate();
	console.error(error);
	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>

			<button type="button" onClick={() => nav("/")}>
				Back to main
			</button>
		</div>
	);
}
