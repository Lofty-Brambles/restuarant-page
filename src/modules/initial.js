import homeLoad from "./home";
import menuLoad from "./menu";
import contactsLoad from "./contacts";
import BackgroundImage from "./../assets/background.jpg";
import ImageOne from "./../assets/rest-logo.webp";
import DiscordLogo from "./../assets/discord.webp";
import GithubLogo from "./../assets/github.png";

function createHeader() {
	const header = document.createElement("header");
	const imgLogo = document.createElement("img");
	const headText = document.createElement("div");

	headText.textContent = "Morninz'";
	imgLogo.classList.add("block");
	imgLogo.src = ImageOne;
	header.appendChild(headText);
	header.appendChild(imgLogo);

	return header;
}

function createNav() {
	const nav = document.createElement("nav");
	const homeBtn = document.createElement("button");
	const menuBtn = document.createElement("button");
	const contBtn = document.createElement("button");
	const navArray = [homeBtn, menuBtn, contBtn];

	homeBtn.innerHTML = `<span class="material-icons">home</span>Home`;
	homeBtn.classList.add("home-btn");
	homeBtn.addEventListener("click", e => {
		if (e.target.classList.contains("active")) return;
		activateBtn(homeBtn);
		homeLoad();
	});
	menuBtn.innerHTML = `<span class="material-icons">menu</span>Menu`;
	menuBtn.classList.add("menu-btn");
	menuBtn.addEventListener("click", e => {
		if (e.target.classList.contains("active")) return;
		activateBtn(menuBtn);
		menuLoad();
	});
	contBtn.innerHTML = `<span class="material-icons">call</span>Contacts`;
	contBtn.addEventListener("click", e => {
		if (e.target.classList.contains("active")) return;
		activateBtn(contBtn);
		contactsLoad();
	});
	navArray.forEach(btn => {
		btn.classList.add("nav-btn");
		nav.appendChild(btn);
	});

	return nav;
}

function createBody() {
	const main = document.createElement("main");
	main.style.flexGrow = 1;
	return main;
}

function createFooter() {
	const foot = document.createElement("footer");
	const discord = document.createElement("a");
	const github = document.createElement("a");
	const footTxt = document.createElement("div");
	const footArr = [discord, footTxt, github];

	footTxt.textContent = `Made with ♥ by Lofty Brambles`;
	footArr.forEach((ele, i) => {
		if (i !== 1) {
			const image = document.createElement("img");
			if (i === 0) {
				ele.href = " https://discord.com/users/740094143379800156";
				image.src = DiscordLogo;
				image.alt = "discord";
			} else {
				ele.href = "https://github.com/Lofty-Brambles/restuarant-page";
				image.src = GithubLogo;
				image.alt = "github";
			};
			ele.appendChild(image);
		};
		foot.appendChild(ele);
	});

	return foot;
}

function activateBtn(btn) {
	const navBtn = document.querySelectorAll(".nav-btn");
	navBtn.forEach(button => {
		button.classList.remove("active");
	});
	btn.classList.add("active");
}

function initializeWebsite() {
	const body = document.body;
	const head = document.head;

	body.appendChild(createHeader());
	body.appendChild(createNav());
	body.appendChild(createBody());
	body.appendChild(createFooter());

	const link = document.createElement("link");
	link.setAttribute("rel", "stylesheet");
	link.setAttribute("href", "https://fonts.googleapis.com/icon?family=Material+Icons");
	head.appendChild(link);

	const homeBtn = document.querySelector(".home-btn");
	homeBtn.click();
}

export default initializeWebsite;