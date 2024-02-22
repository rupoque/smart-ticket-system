function buttonClick(){
  document.getElementById('buy-tickets').addEventListener('click', function(){
    const ticketSection = document.getElementById('ticket-section');
    ticketSection.scrollIntoView({behavior: 'smooth'});
  });
}

