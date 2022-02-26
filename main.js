// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

let panacek = document.querySelector("img")


let osaX = null;
let osaY = null;

function pohybPanacka(event) {
	if (event.key === "ArrowDown") {
		panacek.src = '/obrazky/panacek.png'
		osaY++;
		panacek.style.top = osaY + 'px';
	} else if (event.key === "ArrowUp") {
		panacek.src = '/obrazky/panacek-nahoru.png'
		osaY--;
		panacek.style.top = osaY + 'px';
	} else if (event.key === "ArrowLeft") {
		panacek.src = '/obrazky/panacek-vlevo.png'
		osaX--;
		panacek.style.left = osaX + 'px';
	}else if(event.key === "ArrowRight") {
		panacek.src = '/obrazky/panacek-vpravo.png'
		osaX++;
		panacek.style.left = osaX + 'px';
	}
}


