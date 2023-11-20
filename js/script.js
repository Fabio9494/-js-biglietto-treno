let km_da_percorrere= prompt("km da percorrere");
console.log("km da percorrere: " + km_da_percorrere);

let eta_passeggero= prompt("eta passeggero");
console.log("età passeggero: " + eta_passeggero);

let prezzo_biglietto=km_da_percorrere*0.21;

if(eta_passeggero<18){
    prezzo_biglietto-=prezzo_biglietto*0.20;
}

else if(eta_passeggero>65){
    prezzo_biglietto-=prezzo_biglietto*0.40;
}

console.log("il prezzo del biglietto è: " + prezzo_biglietto.toFixed(2) + " euro");

document.getElementById("prezzo_biglietto").innerHTML ="Il prezzo del biglietto è: " + prezzo_biglietto.toFixed(2) + " euro";