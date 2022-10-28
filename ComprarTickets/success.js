const btnback = document.getElementById("back")

function backhome(){
    window.location.href = '../index.html'
}

btnback.onclick = (e) => {backhome(e)}