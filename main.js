const getData = () => {
	return fetch("https://gist.githubusercontent.com/brendalong/ab2424b0069ed0dd56b01951462a109d/raw/716c0776c45adea089644cffa7eadab139f9f47c/womensday.json")
	.then(response => response.json())
}

const applicationElement = document.querySelector("main");

applicationElement.addEventListener("click", event => {
	console.log("you clicked on main", event)
})

// const learnMoreElement = document.getElementById("learnmore");
applicationElement.addEventListener("click", event => {
	if (event.target.id.startsWith("learnmore")){
		console.log("you clicked on learn more")
		const splitId = event.target.id.split("--");
		console.log("what is splitId", splitId);
		console.log("I want to learn more about id:", splitId[1])
	}
})


const womenInventors = () => {
	getData()
		.then(womenInventorsArray => {
			console.log("womenInventorsArray", womenInventorsArray);
			// declare variable to hold on to html representations
			let fullHMTL = ""
			
			womenInventorsArray.forEach((itemObj, taco) => {
				// console.log("what is index", taco)
				fullHMTL += `<hr />`
				fullHMTL += showWomenDetail(itemObj)
			});

			
			applicationElement.innerHTML += fullHMTL;
		})
}

const showWomenDetail = (detailObj) => {
	return `
		<article>
			
			<h2> ${detailObj.invention}</h2>
			<p>${detailObj.inventor}</p>
			<p><a href="${detailObj.moreDetails}">More Details</a></p>
			<button id="learnmore--${detailObj.id}">Learn More</button>
			<button id="delete--${detailObj.id}">Delete</button>
		</article>
	`
}

womenInventors();
