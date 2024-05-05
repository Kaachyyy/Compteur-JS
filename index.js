const moins = document.getElementById("btn_moins");
const plus = document.getElementById("btn_plus");
const reset_btn = document.getElementById("btn_reset");
const countLabel = document.getElementById("count_label");

let conteur = 0; //Par défaut le compteur est à 0


moins.onclick = function(){
    conteur--;
    countLabel.textContent=conteur;
}

plus.onclick = function(){
    conteur++;
    countLabel.textContent=conteur;

}
reset_btn.onclick = function(){
    conteur=0;
    countLabel.textContent=conteur;

}

