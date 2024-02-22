const allSeat = document.getElementsByClassName('seat');

for(const seat of allSeat){
  seat.addEventListener('click', function(event){
    const seatName = event.target.parentNode.childNodes[1].innerText;
  })
}

const ticketPrice = document.getElementsByClassName('ticket-price');

for(const price of ticketPrice){
  price.addEventListener('click', function(event){
    const oneTicketPrice = event.target.parentNode.childNodes[0].innerText;
  })
}