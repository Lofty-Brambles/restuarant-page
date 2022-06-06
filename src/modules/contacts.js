function makePage() {
	const title = document.createElement("div");
	title.classList.add("head");
	title.innerHTML = `<span class="material-icons">
	phone_callback</span> Contacts`;

	const addressPop = create("room", `1234, Merrywood Street,
		<br>Somewhere, Some-place.`);
	const timingsPop = create("schedule", `<span class="color">Monday - Friday: </span>
		4:00 a.m - 4:00 p.m
		<span class="color">Saturday - Sunday</span>
		6:00 a.m - 6:00 p.m`);
	const phonePop = create("wifi_calling", "123-4567-8901");
	const mailPop = create("email", "morninz-care@gmail.com");
	const mapPop = makeMap("");


	const contactList = document.createElement("div");
	contactList.classList.add("leaflet");
	const appendArr = [addressPop, timingsPop, phonePop, mailPop, mapPop];
	appendArr.forEach(ele => {
		contactList.appendChild(ele);
	})

	return [title, contactList];
}

function create(iconTxt, content) {
	const item = document.createElement("div");
	item.classList.add("item");
	item.innerHTML = `<span class="material-icons block">
		${iconTxt}</span><div class="contact-item">${content}<div>`;
	return item;
}

function makeMap(address) {
	const map = document.createElement("iframe");
	map.src = address;
	map.width = "25rem";
	map.height = "20.25rem";
	map.classList.add("map");
	return map;
}

function contactsLoad() {
	const main = document.querySelector("main");
	main.innerHTML = null;
	makePage().forEach(ele => {
		main.appendChild(ele);
	});
}

export default contactsLoad;