const btncomprar = document.getElementById("comprartickets")

function gohome(){
    window.location.href = './ComprarTickets/Comprar tickets.html'
}

btncomprar.onclick = (e) => {gohome(e)}