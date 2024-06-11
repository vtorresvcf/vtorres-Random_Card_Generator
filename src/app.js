/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Arrays de datos

  const crearCarta = () => {
    const simbolosPicas = ["♥", "♦", "♠", "♣"];
    const numCarta = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    let arrClases = ["hearth", "diamond", "spade", "club"];

    // Funcion para sacar los valores random de arrays
    const valRandom = arr => {
      return arr[Math.floor(Math.random() * arr.length)];
    };

    // Sacamos los datos random de los arrays
    let valRandomSimbolosPicas = valRandom(simbolosPicas);
    let valRandomNumCarta = valRandom(numCarta);

    // Recuperamos los datos
    let iconSuperior = document.querySelector(".icon");
    let iconInferior = document.querySelector(".icon-reverse");

    // Funcion para añadir las clases
    const addClasses = () => {
      if (valRandomSimbolosPicas === "♥") {
        iconSuperior.classList.add("hearth");
        iconInferior.classList.add("hearth");
      }
      if (valRandomSimbolosPicas === "♦") {
        iconSuperior.classList.add("diamond");
        iconInferior.classList.add("diamond");
      }
      if (valRandomSimbolosPicas === "♠") {
        iconSuperior.classList.add("spade");
        iconInferior.classList.add("spade");
      }
      if (valRandomSimbolosPicas === "♣") {
        iconSuperior.classList.add("club");
        iconInferior.classList.add("club");
      }
    };

    // Funcion para eliminar clases
    const removeClasses = () => {
      arrClases.forEach(element => {
        if (iconSuperior.classList.contains(element)) {
          iconSuperior.classList.remove(element);
          iconInferior.classList.remove(element);
        }
      });
    };
    // Funcion añadir los valores
    const addValoresRandomCard = () => {
      document.querySelector(".icon").innerHTML = valRandomSimbolosPicas;
      document.querySelector(
        ".icon-reverse"
      ).innerHTML = valRandomSimbolosPicas;
      document.querySelector(".number-icon").innerHTML = valRandomNumCarta;
    };

    // Evento generar otra carta
    document
      .querySelector("#botonNuevaCarta")
      .addEventListener("click", function(e) {
        removeClasses();
        crearCarta();
      });

    // Evento Generar carta automática
    setTimeout(() => {
      removeClasses();
      crearCarta();
    }, 10000);

    addValoresRandomCard();
    addClasses();
  };
  crearCarta();
};
