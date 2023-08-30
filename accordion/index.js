const showButtonEl = document.querySelector("details > summary > button");
// console.log(showButtonEl);
const detail = document.getElementsByTagName("details");
// console.log(detailEL[0]);
showButtonEl.addEventListener("click", () => {
	const detailEL = detail[0];
	if (detailEL.hasAttribute("open")) {
		detailEL.removeAttribute("open");
		showButtonEl.innerText = "open";
		showButtonEl.style.color = "black";
		console.log("close", detailEL.clientHeight);
	} else {
		detailEL.setAttribute("open", true);
		showButtonEl.style.color = "black";
		showButtonEl.innerText = "close";
		console.log("open", detailEL.clientHeight);
	}
});

//---------------------------------------------------------
const showButtonEl2 = document.querySelector("#title > button");
// console.log(showButtonEl);
const ul = document.querySelector("#accordion > ul");
showButtonEl2.addEventListener("click", () => {
	console.log("clicked2");
	//!!!!!!!!!!!	not working
	if (ul.classList.contains("hideul")) {
		console.log("oooo");
		ul.classList.remove("hideul");
		ul.classList.add("showul");
		// ul.style.height = "auto";
		// ul.style.visibility = "visible";

		showButtonEl2.innerText = "close";
		showButtonEl2.style.color = "black";
	} else if (ul.classList.contains("showul")) {
		console.log("aaaa");
		ul.classList.remove("showul");

		ul.classList.add("hideul");

		// ul.style.height = "0";
		// ul.style.visibility = "hidden";
		showButtonEl2.innerText = "open";
		showButtonEl2.style.color = "black";
	}
});
//---------------------------------------------------------
const showButtonEl3 = document.querySelector("#title2 > button");
// console.log(showButtonEl);
const ul2 = document.querySelector("#accordion2 > ul");
showButtonEl3.addEventListener("click", () => {
	console.log("clicked2");
	if (ul2.classList.contains("hideul2")) {
		console.log("oooo");
		ul2.classList.remove("hideul2");
		ul2.classList.add("showul2");
		// ul.style.height = "auto";
		// ul.style.visibility = "visible";

		showButtonEl3.innerText = "close";
		showButtonEl3.style.color = "black";
	} else if (ul2.classList.contains("showul2")) {
		console.log("aaaa");
		ul2.classList.remove("showul2");

		ul2.classList.add("hideul2");

		// ul.style.height = "0";
		// ul.style.visibility = "hidden";
		showButtonEl3.innerText = "open";
		showButtonEl3.style.color = "black";
	}
});
