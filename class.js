var P1_button = document.querySelector("#P1");
var P1_Score= Number(document.querySelector(".P1_Score").textContent);
var P2_button = document.querySelector("#P2");
var P2_Score= Number(document.querySelector(".P2_Score").textContent);
var Reset_button = document.querySelector("#rest")
var NumInput = document.querySelector("input[type=number]");

var winningScoreDisplay = document.querySelector(".Score_Dealine")

var WinnerSocre = Number(winningScoreDisplay.textContent);
P1_button.addEventListener("click", function(){
	if(P1_Score<WinnerSocre){
	P1_Score++;
              document.querySelector(".P1_Score").textContent = P1_Score;	
              if(P1_Score===WinnerSocre){
              	document.querySelector(".P1_Score").classList.add("winner");
              }
	}else{
	document.querySelector(".P1_Score").classList.add("winner");
	}
})

P2_button.addEventListener("click", function(){
	if(P2_Score<WinnerSocre){
	P2_Score++;
              document.querySelector(".P2_Score").textContent = P2_Score;	
              if(P2_Score===WinnerSocre){
              	document.querySelector(".P2_Score").classList.add("winner");
              }
	}else{
	document.querySelector(".P2_Score").classList.add("winner");
	}
})



Reset_button.addEventListener("click", function(){
	reset ();
})

function reset (){
	P1_Score = 0;
	P2_Score = 0;
	 document.querySelector(".P1_Score").textContent =0;	
	 document.querySelector(".P2_Score").textContent =0;	
	 document.querySelector(".P1_Score").classList.remove("winner");
	 document.querySelector(".P2_Score").classList.remove("winner");
}


NumInput .addEventListener("change", function(){
	winningScoreDisplay.textContent = Number(this.value);
	WinnerSocre = Number(this.value);
	reset ();
})




