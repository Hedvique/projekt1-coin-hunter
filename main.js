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
let zvukMince = document.querySelector("#zvukmince")
let zvukFanfara = document.querySelector("#zvukfanfara")
let score = document.querySelector("#score")
let pricitacScore = 0


let pohyb = 10

panacek.style.top = parseInt(window.innerHeight / 2) + "px";
panacek.style.left = parseInt(window.innerWidth / 2) + 'px';
let panacekX = panacek.style.left
let panacekY = panacek.style.top
let panacekVyska = 70;
let panacekSirka = 64;

let minceX = Math.floor((Math.random() * window.innerWidth) + 1);
let minceY = Math.floor((Math.random() * window.innerHeight) + 1);
let minceSirka = 36;
let minceVyska = 36;

function startovniPozice() {
	panacek.style.top 
	panacek.style.left 
	mince.style.left = minceX + "px";
	mince.style.top = minceY + "px";
}

function startovniPoziceMince(){
	minceX = Math.floor((Math.random() * window.innerWidth) + 1);
	minceY = Math.floor((Math.random() * window.innerHeight) + 1);
	mince.style.left = minceX + "px";
	mince.style.top = minceY + "px";
}

function vyhra(){
	if(pricitacScore >= 5){
		hudba.pause()
		zvukFanfara.play()
		alert("Vyhrál jsi! Chceš hrát znovu?")
		window.location.reload()
	}
}

function panacekSebralMinci(){
	startovniPoziceMince()
	zvukMince.play()
	pricitacScore++
	score.textContent = pricitacScore
	vyhra()
}


function pohybPanacka(event) {
	panacekX = parseInt(panacek.style.left);
	panacekY = parseInt(panacek.style.top);
	
	if (event.key === "ArrowDown" && (panacekY + pohyb) <= window.innerHeight) {
		panacek.src = 'obrazky/panacek.png';
		hudba.play()
		panacek.style.top = panacekY + pohyb + "px";
	} if (event.key === "ArrowUp" && panacekY - pohyb >= 0) {
		panacek.src = '/obrazky/panacek-nahoru.png';
		panacek.style.top = panacekY - pohyb + "px";
		hudba.play()
	} if (event.key === "ArrowRight" && panacekX + pohyb <= window.innerWidth) {
		panacek.src = '/obrazky/panacek-vpravo.png';
		panacek.style.left = panacekX + pohyb + "px";
		hudba.play()
	} if (event.key === "ArrowLeft" && panacekX - pohyb >= 0) {
		panacek.src = '/obrazky/panacek-vlevo.png';
		panacek.style.left = panacekX - pohyb + "px"
		hudba.play()
	} 
	if (!(panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
		// panacek a mince se prekryvaji
		panacekSebralMinci()
	}
}

