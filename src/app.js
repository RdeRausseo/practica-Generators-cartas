import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  const cartas =  ["A", "2", "3", "4","5","6","7","8","9","10","J","Q","K"];
  const carta = cartas[Math.floor(Math.random() * 13)]; 
  const palos = ["♠","♥","♦","♣"]
  const palo = palos[Math.floor(Math.random() * 4)]; 
  let card = document.querySelector(".card"); 
  let numero = document.querySelector(".numero")
  numero.innerHTML = carta; 
  let paloArriba = document.querySelector(".palo") ;
  paloArriba.innerHTML = palo; 
  let paloAbajo = document.querySelector(".palo-Abajo");
  paloAbajo.innerHTML = palo; 
  if(palo === "♥" || palo === "♦"){
    paloArriba.style.color = "red"
    paloAbajo.style.color = "red"
  }
};
