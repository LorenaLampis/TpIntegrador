const btncomprar = document.getElementById("comprartickets")

function gohome(){
    window.location.href = './pages/Comprar tickets.html'
}

btncomprar.onclick = (e) => {gohome(e)}