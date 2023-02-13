const flight = document.getElementById("flight-btn");
const hotels = document.getElementById("hotels-btn");
const rent = document.getElementById("rent-btn");

const flightBody = document.getElementById("flight");
const hotelsBody = document.getElementById("hotels");
const rentBody = document.getElementById("rent");

flight.addEventListener("click", (eo) => {
  flight.style.background = "#fff";
  hotels.style.background = "#ddd";
  rent.style.background = "#ddd";

  flightBody.classList.add("visible");
  flightBody.classList.remove("hidden");
  hotelsBody.classList.add("hidden");
  hotelsBody.classList.remove("visible");
  rentBody.classList.add("hidden");
  rentBody.classList.remove("visible");
});
hotels.addEventListener("click", (eo) => {
  flight.style.background = "#ddd";
  hotels.style.background = "#fff";
  rent.style.background = "#ddd";

  flightBody.classList.add("hidden");
  flightBody.classList.remove("visible");
  hotelsBody.classList.add("visible");
  hotelsBody.classList.remove("hidden");
  rentBody.classList.add("hidden");
  rentBody.classList.remove("visible");
});

const star3 = document.getElementById("three-stars");
const star4 = document.getElementById("four-stars");
const star5 = document.getElementById("five-stars");
const stars3Rent = document.getElementById("stars3-rent");
const stars4Rent = document.getElementById("stars4-rent");
const stars5Rent = document.getElementById("stars5-rent");

star3.addEventListener("click", (eo) => {
  flight.style.background = "#ddd";
  hotels.style.background = "#ddd";
  rent.style.background = "#fff";
  flightBody.classList.add("hidden");
  flightBody.classList.remove("visible");
  hotelsBody.classList.add("hidden");
  hotelsBody.classList.remove("visible");
  rentBody.classList.add("visible");
  rentBody.classList.remove("hidden");

  stars3Rent.classList.add("visible");
  stars3Rent.classList.remove("hidden");

  stars4Rent.classList.add("hidden");
  stars4Rent.classList.remove("visible");
  stars5Rent.classList.add("hidden");
  stars5Rent.classList.remove("visible");
});
star4.addEventListener("click", (eo) => {
  flight.style.background = "#ddd";
  hotels.style.background = "#ddd";
  rent.style.background = "#fff";
  flightBody.classList.add("hidden");
  flightBody.classList.remove("visible");
  hotelsBody.classList.add("hidden");
  hotelsBody.classList.remove("visible");
  rentBody.classList.add("visible");
  rentBody.classList.remove("hidden");
  stars3Rent.classList.add("hidden");
  stars3Rent.classList.remove("visible");

  stars4Rent.classList.add("visible");
  stars4Rent.classList.remove("hidden");

  stars5Rent.classList.add("hidden");
  stars5Rent.classList.remove("visible");
});
star5.addEventListener("click", (eo) => {
  flight.style.background = "#ddd";
  hotels.style.background = "#ddd";
  rent.style.background = "#fff";
  flightBody.classList.add("hidden");
  flightBody.classList.remove("visible");
  hotelsBody.classList.add("hidden");
  hotelsBody.classList.remove("visible");
  rentBody.classList.add("visible");
  rentBody.classList.remove("hidden");
  stars3Rent.classList.add("hidden");
  stars3Rent.classList.remove("visible");
  stars4Rent.classList.add("hidden");
  stars4Rent.classList.remove("visible");

  stars5Rent.classList.add("visible");
  stars5Rent.classList.remove("hidden");
});

$(function () {
  $("#datepicker").datepicker({
    dateFormat: "dd MM yy",
  });
});
