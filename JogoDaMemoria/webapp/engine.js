/**
 * 
 */

const emojis = [
	
	"🫠",
	"🫠",
	"😴",
	"😴",
	"😜",
	"😜",
	"🥸",
	"🥸",
	"🥵",
	"🥵",
	"😶",
	"😶",
	"🤣",
	"🤣",
	"😍",
	"😍"	
];
let openCards = [];
let vitoria = 0;
let derrota = 0;


let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

//Desenha os elementos na tela 
for(let i = 0; i < emojis.length; i++) {
	let box = document.createElement
	("div");
	box.className = "item";
	box.innerHTML = shuffleEmojis[i];
	box.onclick  = handleClick;
	document.querySelector(".game").appendChild(box);
}

function handleClick() {
	if(openCards.length <2 ){
		this.classList.add("boxOpen");
		openCards.push(this);
		
	}
	if(openCards.length == 2) {
		setTimeout(checkMetch, 500);
	}
}


function checkMetch() {
	
	if(openCards[0].innerHTML === openCards[1].innerHTML) {
		openCards[0].classList.add("boxMatch");
		openCards[1].classList.add("boxMatch");
		vitoria++;
		document.getElementById("acerto").textContent = vitoria;
		
		
			console.log("qntd de acerto "+vitoria)
	}else {
		openCards[0].classList.remove("boxOpen");
		openCards[1].classList.remove("boxOpen");
		derrota++;
		document.getElementById("derrota").textContent = derrota;
	}
	openCards = [];
	if(document.querySelectorAll(".boxMatch").length === emojis.length){
		document.getElementById("fim").textContent = "Fim de jogo";
		
		
		
	}
}


















