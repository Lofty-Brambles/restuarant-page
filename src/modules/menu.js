import burger from "./../assets/burger.png";
import doubleBurger from "./../assets/double-burger.png";
import sandwich from "./../assets/sandwich.png";
import frenchFries from "./../assets/french-fries.png";
import ribs from "./../assets/ribs.png";
import caesar from "./../assets/caesar-salad.png";

function makePage() {
	const title = document.createElement("div");
	title.classList.add("head");
	title.innerHTML = `<span class="material-icons md-48">
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
	image.src = imager(prop[0]);
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
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(" ");
}

function imager(name) {
	switch (name) {
		case "burger":
			return burger;
		case "double-burger":
			return doubleBurger;
		case "filled-sandwich":
			return sandwich;
		case "french-fries":
			return frenchFries;
		case "barbecue-ribs":
			return ribs;
		case "caesar-salad":
			return caesar;
	}
}

function menuLoad() {
	const main = document.querySelector("main");
	main.innerHTML = null;
	makePage().forEach(ele => {
		main.appendChild(ele);
	});
}

export default menuLoad;