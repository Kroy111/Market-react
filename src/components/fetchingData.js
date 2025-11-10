export default async function fetchingData(url) {
	//   fetch('https://fakestoreapi.com/products')
	// .then(response => response.json())
	// .then(data => console.log(data));
	try {
		const data = await fetch(url);
		if (!data.ok) throw new Error(`Server error: ${data.status}`);
		const dataJson = await data.json();
		return dataJson;
	} catch (err) {
		console.error("Fetching failed", err);
		throw err;
	}
}
