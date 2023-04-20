function iniciarJuego(){
    let botonMascota= document.getElementById('boton-mascota')
    botonMascota.addEventListener('click', seleccionarMascota)
}

function seleccionarMascota(){
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')

    if(inputHipodoge.checked){
        alert("seleccionaste a hipodoge")
    }else if(inputCapipepo.checked){
        alert("seleccionaste a Capipepo")
    }else if(inputRatigueya.checked){
        alert("seleccionaste a ratigueya")
    }else{
        alert("selecciona una mascota")
    }
}

window.addEventListener('load', iniciarJuego)