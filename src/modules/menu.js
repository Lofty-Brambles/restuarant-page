import homeLoad from "./home";

function makePage() {
	const title = document.createElement("div");
	title.classList.add("head");
	title.innerHTML = `<span class="material-icons">
		outdoor_grill</span> Menu`;

	const eleArray = [];
	addItem(eleArray, [
		"burger",
		"2.49",
		"Buns, patty, and our top secret recipe."
	]);
	addItem(eleArray, [
		"double-burger",
		"3.49",
		"Double the burger, double the pa(r)tty."
	]);
	addItem(eleArray, [
		"filled-sandwich",
		"2.49",
		"Grilled, toasted, cheese-ed with our special sauce."
	]);
	addItem(eleArray, [
		"gourmet-sandwich",
		"4.49",
		"Fresh brown bread sandwich, with veggies and munchies."
	]);
	addItem(eleArray, [
		"french-fries",
		"1.49",
		"Some light-hearted fries to enjoy your main dishes with."
	]);
	addItem(eleArray, [
		"barbecue-ribs",
		"8.49",
		"A special barbecue ribs with add-on of your choice and the day."
	]);
	addItem(eleArray, [
		"caesar-salad",
		"7.49",
		"Your everyday Caesar salad with dressings of the day!"
	]);

	const menuBook = document.createElement("div");
	menuBook.classList.add("leaflet");
	eleArray.forEach(element => {
		menuBook.appendChild(element);
	});

	return [title, menuBook];
}

function addItem(array, prop) {
	const item = document.createElement("div");
	item.classList.add("item");

	const image = document.createElement("img");
	image.classList.add("block");
	image.src = `./../assets/${prop[0]}.png`;
	image.alt = prop[0];

	const itemTitle = document.createElement("div");
	itemTitle.classList.add("item-title");
	itemTitle.innerHTML = `<div>${toTitle(prop[0])}</div><div>$${prop[1]}</div>`;
	const itemBody = document.createElement("div");
	itemBody.classList.add("item-body");
	itemBody.textContent = prop[2];

	const holder = document.createElement("div");
	holder.classList.add("holder");
	holder.appendChild(itemTitle);
	holder.appendChild(itemBody);

	item.appendChild(image);
	item.appendChild(holder);
	array.push(item);
}

function toTitle(string) {
	return string.split("-")
		.map(word => word.toUpperCase())
		.join(" ");
}

function menuLoad() {
	const main = document.querySelector("main");
	main.innerHTML = null;
	makePage().forEach(ele => {
		main.appendChild(ele);
	});
}

export default menuLoad;