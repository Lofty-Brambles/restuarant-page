function makePage() {
	const title = document.createElement("div");
	title.classList.add("head");
	title.innerHTML = `<span class="material-icons">
	phone_callback</span> Contacts`;

	const addressPop = create("room", `1234, Merrywood Street,
		<br>Somewhere, Some-place.`);
	const timingsPop = create("schedule", `<span class="color">Monday - Friday: </span>
		4:00 a.m - 4:00 p.m<br>
		<span class="color">Saturday - Sunday</span>
		6:00 a.m - 6:00 p.m`);
	const phonePop = create("wifi_calling", "123-4567-8901");
	const mailPop = create("email", "morninz-care@gmail.com");
	const mapPop = makeMap("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.2188142686973!2d-118.33021078529964!3d34.089534523212464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf349a5b32d9%3A0x13908cbbfe7f53a0!2s1021%20Lillian%20Way%2C%20Los%20Angeles%2C%20CA%2090038%2C%20USA!5e0!3m2!1sen!2sin!4v1654507376604!5m2!1sen!2sin");

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
	item.classList.add("item-ctx");
	item.innerHTML = `<span class="material-icons block">
		${iconTxt}</span><div class="contact-item">${content}<div>`;
	return item;
}

function makeMap(address) {
	const map = document.createElement("iframe");
	map.src = address;
	map.width = "400px";
	map.height = "300px";
	map.loading = "lazy";
	map.referrerPolicy = "no-referrer-when-downgrade";
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