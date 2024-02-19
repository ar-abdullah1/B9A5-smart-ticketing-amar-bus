// ticket section
function scrollSection() {
  const ticketBooking = getElementsById("ticket-booking");
  ticketBooking.scrollIntoView();
}

const seatButton = getElementsByClassName(".seat");
const availableSeatText = getElementsInnerTextById("available-seat");
let availableSeat = parseInt(availableSeatText);
let totalPrice = 0;
let grandTotal = 0;
let seatCount = 0;
for (const button of seatButton) {
  button.addEventListener("click", function (e) {
    const buttonId = button.innerText;

    const selectedSeatText = getElementsInnerTextById("seat-count");
    const selectedSeat = parseInt(selectedSeatText);
    if (selectedSeat === 3) {
      removeElementsAttributeById("coupon-field", "disabled");
      removeElementsAttributeById("apply-btn", "disabled");
    }

    seatCount += 1;
    if (seatCount > 4) {
      alert("A maximum of 4 seats can be purchased.");
      return;
    }

    availableSeat = availableSeat - 1;
    setElementsInnerTextById("available-seat", availableSeat);

    setElementsInnerTextById("seat-count", seatCount);
    setElementsColorById(buttonId);
    setElementsAttributeById(buttonId, "disabled");

    const ticketPriceText = getElementsInnerTextById("ticket-price");
    const ticketPrice = parseFloat(ticketPriceText);
    appendTableDataById("tbody", buttonId, "Economy", ticketPriceText);

    totalPrice = totalPrice + ticketPrice;
    setElementsInnerTextById("total-price", totalPrice);
    grandTotal = totalPrice;
    setElementsInnerTextById("grand-total", grandTotal);
  });
}

const numberField = getElementsById("number-field");
numberField.addEventListener("keyup", function (e) {
  let phoneNumberText = e.target.value;
  const selectedSeatText = getElementsInnerTextById("seat-count");
  const selectedSeat = parseInt(selectedSeatText);
  if (selectedSeat > 0 && phoneNumberText.length === 11) {
    removeElementsAttributeById("next-btn", "disabled");
  } else {
    setElementsAttributeById("next-btn", "disabled");
  }
});
