// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

let panacek = document.querySelector("img")


let startovniPozice = null

function test(event) {
	if (event.key === "ArrowDown") {
		panacek.src = '/obrazky/panacek.png'
		startovniPozice++;
		panacek.style.top = startovniPozice + 'px';
	} else if (event.key === "ArrowLeft") {
		panacek.src = '/obrazky/panacek-vlevo.png'
		startovniPozice--;
		panacek.style.left = startovniPozice + 'px';
	} else if (event.key === "ArrowUp") {
		panacek.src = '/obrazky/panacek-nahoru.png'
		startovniPozice--;
		panacek.style.top = startovniPozice + 'px';
	} else if(event.key === "ArrowRight") {
		panacek.src = '/obrazky/panacek-vpravo.png'
		startovniPozice++;
		panacek.style.left = startovniPozice + 'px';
	}
}


