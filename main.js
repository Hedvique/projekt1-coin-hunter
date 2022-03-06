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

let pohyb = 10
let panacekX = panacek.style.left;
let panacekY = panacek.style.top;



panacek.style.top = parseInt(window.innerHeight / 2) + 'px';
panacek.style.left = parseInt(window.innerWidth / 2) + 'px';

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
	}
}





