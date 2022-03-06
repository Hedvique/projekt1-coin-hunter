// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

let panacek = document.querySelector("img");
let mince = document.querySelector("#mince");
let hudba = document.querySelector("#hudba")

panacek.style.width = "64px";
panacek.style.height = "70px";
mince.style.width = "36px";
mince.style.height = "36px";

let pohyb = 10
let panacekX = parseInt(window.innerWidth + "px");
let panacekY = parseInt(window.innerHeight + "px");
let minceX = Math.floor(Math.random() * window.innerWidth);
let minceY = Math.floor(Math.random() * window.innerHeight);
let panacekVyska = parseInt(panacek.style.height);
let panacekSirka = parseInt(panacek.style.width);
let minceSirka = parseInt(mince.style.width);
let minceVyska = parseInt(mince.style.width);
console.log()

function startovniPozice() {
	panacek.style.top = parseInt(window.innerHeight / 2) + "px";
	panacek.style.left = parseInt(window.innerWidth / 2) + 'px';
	mince.style.left = minceX + "px";
	mince.style.top = minceY + "px";
}


function pohybPanacka(event) {
	panacekX = panacek.style.left;
	panacekY = panacek.style.top;

	if (event.key === "ArrowDown" && (parseInt(panacekY) + pohyb) <= window.innerHeight) {
		panacek.src = '/obrazky/panacek.png';
		hudba.play()
		panacek.style.top = parseInt(panacekY) + pohyb + "px";
	} else if (event.key === "ArrowUp" && (parseInt(panacekY) - pohyb) >= 0) {
		panacek.src = '/obrazky/panacek-nahoru.png';
		panacek.style.top = parseInt(panacekY) - pohyb + "px";
		hudba.play()
	} else if (event.key === "ArrowRight" && (parseInt(panacekX) + pohyb) <= window.innerWidth) {
		panacek.src = '/obrazky/panacek-vpravo.png';
		panacek.style.left = parseInt(panacekX) + pohyb + "px";
		hudba.play()
	} else if (event.key === "ArrowLeft" && (parseInt(panacekX) - pohyb) >= 0) {
		panacek.src = '/obrazky/panacek-vlevo.png';
		panacek.style.left = parseInt(panacekX) - pohyb + "px"
		hudba.play()
	} else if (!(panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
		// panacek a mince se prekryvaji
		//mince.style.display = 'none'
		console.log(5)
	}
}




