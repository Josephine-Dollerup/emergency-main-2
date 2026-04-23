// alert("nnvwvwo");
// solbrilllerne
document.querySelector("#Solbriller").addEventListener("mouseover", mosolbriller);
function mosolbriller() {
  console.log("mosolbriller");
  document.querySelector("#Solbriller").style.fill = "#ffc943";
}

document.querySelector("#Solbriller").addEventListener("mouseout", musolbriller);
function musolbriller() {
  console.log("musolbriller");
  document.querySelector("#Solbriller").style.fill = "#821b1c";
}

document.querySelector("#Solbriller").addEventListener("click", clicksolbriller);
function clicksolbriller() {
  console.log("clicksolbriller");
  document.querySelector(".info-text h2").textContent = "Solbrillernes funktion";
  document.querySelector(".info-text p").textContent = "Hamstere er et natdyr, men du flygter om dagen. Derfor skal bruge solbrillerne, da de giver dig nattesyn. Når du har solbrillerne på kan du navigere dig nemmere rundt, ved at få det skarpe natte syn om dagen.";
  document.querySelector(".info-text #efficiency").textContent = "Effekt: Giver natte syn";
  document.querySelector(".info-text #requirement").textContent = "Skarpere syn og kan navigere hurtigere og nemmere rundt.";
  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#requirement").classList.add("fadeIn");
}

//  sløjfen
document.querySelector("#Sloefje").addEventListener("mouseover", moSloefje);
function moSloefje() {
  console.log("moSloefje");
  document.querySelector("#Sloefje").style.fill = "#ffc943";
}

document.querySelector("#Sloefje").addEventListener("mouseout", muSloefje);
function muSloefje() {
  console.log("muSloefjer");
  document.querySelector("#Sloefje").style.fill = "#821b1c";
}

document.querySelector("#Sloefje").addEventListener("click", clickSloefje);
function clickSloefje() {
  console.log("clickSloefje");
  document.querySelector(".info-text h2").textContent = "Sløfje funktion";
  document.querySelector(".info-text p").textContent = "Din dyreelsker ejer har altid troet, at du et en pige. Du har derfor altid en sløjfe på hovedet. Sløjfen er til at tage af og på, men du vælger af den med. Den kan nemlig bindes op og bruges til at åbne de store døre for dig. Ved du slyger dens snor som en lasso.";
  document.querySelector(".info-text #efficiency").textContent = "Effekt: Kan åbne dørere for dig.";
  document.querySelector(".info-text #requirement").textContent = "Styrke: Kommer hurtigere videre og hjælper med udfordringer";
  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#requirement").classList.add("fadeIn");
}

// Guitaren
document.querySelector("#Guitar").addEventListener("mouseover", moGuitar);
function moGuitar() {
  console.log("moGuitar");
  document.querySelector("#Guitar").style.fill = "#ffc943";
}

document.querySelector("#Guitar").addEventListener("mouseout", muGuitar);
function muGuitar() {
  console.log("muGuitar");
  document.querySelector("#Guitar").style.fill = "#821b1c";
}

document.querySelector("#Guitar").addEventListener("click", clickGuitar);
function clickGuitar() {
  console.log("clickGuitar");
  document.querySelector(".info-text h2").textContent = "Guitarens funktion";
  document.querySelector(".info-text p").textContent = "Guitaren er dit vigtigste redskab. Den er blevet stillet som pynt i dit bur, men den har en vigtig styrke. Da din ejer er en kæmpe dyre elsker, vil du møde en masse dyr i huset. bl.a katten. Guitaren hjælper dig med at lave lyde som både kan distrahere og bruges imod dine modstandere. ";
  document.querySelector(".info-text #efficiency").textContent = "Effekt: Laver lyde og kan spille forskellige slags melodier";

  document.querySelector(".info-text #requirement").textContent = "Styrke: Bruges imod dine modstandere, så du kan komme ud af huset";
  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#requirement").classList.add("fadeIn");
}

// Effekt //

// Styrke //

// document.querySelector("#requirement").addEventListener("click", fadeIn);

// function fadeIn() {
//   document.querySelector("#hide").classList.remove("hide");
//   document.querySelector("#hide").classList.add("fadeIn");
// }

document.querySelector("#requirement").addEventListener("animationend", clear);

function clear() {
  console.log("clear");
  document.querySelector("#efficiency").classList.remove("fadeIn");
  document.querySelector("#requirement").classList.remove("fadeIn");
}
