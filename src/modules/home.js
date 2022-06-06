function makePage() {
	const upperHero = create(
		"div",
		`<span class="color">Come along and 
		<strong>cherish</strong> some fresh breakfast!</span>`,
		"head"
	);
	const lowerHero = create(
		"h5",
		"Charming, cheap and choice!"
	);
	const hero = create("div");
	hero.appendChild(upperHero);
	hero.appendChild(lowerHero);

	const upperBox = create(
		"div",
		`<span class="block material-icons">room</span>
		<span class="block">1234, Merrywood Street,<br>
		Somewhere, Some-place.</span>`
	);
	const lowerBox = create(
		"div",
		`<span class="block material-icons">schedule</span>
		<span class="block">
		<span class="color">Monday - Friday: </span>
		4:00 a.m - 4:00 p.m
		<span class="color">Saturday - Sunday</span>
		6:00 a.m - 6:00 p.m</span>`
	);
	const box = create("div", "", "info");
	box.appendChild(upperBox);
	box.appendChild(lowerBox);

	return [hero, box];
}

function create(type, content, addCl) {
	const ele = document.createElement(type);
	if (content) {
		ele.innerHTML = content;
	}
	if (addCl) {
		ele.classList.add(addCl);
	}
	return ele;
}

function homeLoad() {
	const main = document.querySelector("main");
	main.innerHTML = null;
	makePage().forEach(ele => {
		main.appendChild(ele);
	});
}

export default homeLoad;