function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.querySelector('div#foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        foto.innerHTML = '<img src="img/manha.png" alt="manha de sol"></img>'
        document.body.style.background = 'lightblue'
    }else if(hora >= 12 && hora < 18){
        foto.innerHTML = '<img src="img/tarde.png" alt="tarde"></img>'
        document.body.style.background = 'salmon'
    }else if(hora >= 18 && hora <= 23){
        foto.innerHTML = '<img src="img/noite.png" alt="noite"></img>'
        document.body.style.background = 'gray'
    } else {
        msg.innerHTML = '<strong>ERRO</strong> hora invalida'
        document.body.style.background = "red"
    }
}


