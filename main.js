// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

let panacek = document.querySelector("img")

panacek.style.top = parseInt(window.innerHeight / 2) + 'px';
panacek.style.left = parseInt(window.innerWidth / 2) + 'px';

let osaX = panacek.style.left;
let osaY = panacek.style.top;


let pohyb = null

function pohybPanacka(event) {
	if (event.key === "ArrowDown" && (parseInt(osaY) + pohyb) <= window.innerHeight) {
		panacek.src = '/obrazky/panacek.png';
		pohyb += 10;
		panacek.style.top = parseInt(osaY) + pohyb + "px";
	} else if (event.key === "ArrowUp" && (parseInt(osaY) - pohyb) <= window.innerHeight) {
		panacek.src = '/obrazky/panacek-nahoru.png';
		pohyb -= 10;
		panacek.style.top = parseInt(osaY) + pohyb + "px";
	} else if (event.key === "ArrowLeft" && (parseInt(osaX) - pohyb) <= window.innerWidth) {
		panacek.src = '/obrazky/panacek-vlevo.png';
		pohyb -= 10;
		panacek.style.left = parseInt(osaX) + pohyb + "px";
	} else if (event.key === "ArrowRight" && (parseInt(osaX) + pohyb) <= window.innerWidth) {
		panacek.src = '/obrazky/panacek-vpravo.png';
		pohyb += 10;
		panacek.style.left = parseInt(osaX) + pohyb + "px"
	}
}


