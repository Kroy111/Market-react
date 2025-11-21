//Adding and increase item in cart

export function addItem(item, prevCart) {
	const id = item.id;
	// console.log("add item from App.jsx");
	return {
		...prevCart, // тут идет копирование свойств на первом слое
		[id]: {
			//тут мы спускаемся ниже по айдишнику
			...prevCart[id], //опять копируем свойства которые есть на втором слое, а после добавляем новые свойства в объект.
			count: (prevCart[id]?.count ?? 0) + 1,
			removing: false,
		},
	};
}

//Decrease item in cart
export function decreaseItem(item, prevCart) {
	const id = item.id;
	const currentCount = prevCart[id].count;

	if (currentCount <= 1) {
		prevCart = markItemRemoving(item, prevCart);
	}
	return {
		...prevCart,
		[id]: {
			...prevCart[id],
			count: prevCart[id].count - 1,
		},
	};
}

function markItemRemoving(item, prevCart) {
	const id = item.id;
	return {
		...prevCart,
		[id]: {
			...prevCart[id],
			removing: true,
		},
	};
}

export function deleteItem(item, prevCart) {
	const id = item.id;
	const { [id]: _, ...rest } = prevCart;
	return rest;
}
