function formatAmount(n) {
  return n.toFixed(0).replace(/./g, function(c, i, a) {
    return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
  });
}

let seats = document.querySelector(".all-seats");
for (var i = 0; i < 80; i++) {
  let randint = Math.floor(Math.random() * 4);
  let booked = randint === 1 ? "booked" : "";
  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.name = "tickets";
  inputElement.id = "s" + (i + 2);
  inputElement.disabled = booked === "booked";

  let labelElement = document.createElement("label");
  labelElement.htmlFor = "s" + (i + 2);
  labelElement.className = "seat " + booked;

  seats.appendChild(inputElement);
  seats.appendChild(labelElement);
}

var ticket_price = 10000;
let tickets = seats.querySelectorAll("input");
let amount = document.querySelector(".amount").innerHTML;
let count = document.querySelector(".count").innerHTML;
tickets.forEach((ticket) => {
  ticket.addEventListener("change", () => {
    amount = Number(amount);
    count = Number(count);

    if (!ticket.disabled) {
      if (ticket.checked) {
        count += 1;
        amount += ticket_price;
        ticket.nextElementSibling.classList.add("selected-seat");
      } else {
        count -= 1;
        amount -= ticket_price;
        ticket.nextElementSibling.classList.remove("selected-seat");
      }
    } else {
      ticket.checked = false;
    }
    if(count >= 0 && amount >= 0){
      document.querySelector(".amount").innerHTML = formatAmount(amount);
      document.querySelector(".count").innerHTML = count;
    }else{
      count = 0; amount = 0;
      document.querySelector(".amount").innerHTML = "0";
      document.querySelector(".count").innerHTML = "0";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var xacNhanButton = document.getElementById("xac-nhan-button");
  xacNhanButton.addEventListener("click", function (event) {
    var selectedSeats = document.querySelectorAll(".selected-seat");
    if (selectedSeats.length === 0) {
      event.preventDefault();
      alert("Vui lòng chọn ghế!");
    }
  });
});

function resetPage() {
  let tickets = document.querySelectorAll("input[type='checkbox']:checked");
  tickets.forEach((ticket) => {
    ticket.checked = false;
  });
  document.querySelector(".amount").innerHTML = "0";
  document.querySelector(".count").innerHTML = "0";
}

document.addEventListener("DOMContentLoaded", function () {
  var xacNhanButton = document.getElementById("xac-nhan-button");
  xacNhanButton.addEventListener("click", function () {
    resetPage();
  });
});