function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtidade').value
    var res = document.querySelector('div#res')

    res.style.textAlign = 'center'

    if(fano.length == 0 || Number(fano) > ano || fano < ano - 125){
        res.innerHTML = '<strong>ERRO</strong> por favor insira uma data valida'
    }else{
        var idade = ano - fano
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = "Homem"
            
            if (idade <= 2 ){
                img.setAttribute('src', 'img/bebe-masc.png')
            }else if (idade > 2 && idade <= 12 ){
                img.setAttribute('src', 'img/crianca-masc.png')
            }else if (idade > 12 && idade < 18 ){
                img.setAttribute('src', 'img/ado-masc.png')
            }else if (idade >= 18 && idade < 60 ){
                img.setAttribute('src', 'img/homem.png')
            }else if (idade >= 60 && idade <= 125 ){
                img.setAttribute('src', 'img/idoso.png')
            }            
        }else if (fsex[1].checked){
            genero = "Mulher"
            if (idade <= 2 ){
                img.setAttribute('src', 'img/bebe-fem.png')
            }else if (idade > 2 && idade <= 12 ){
                img.setAttribute('src', 'img/crianca-fem.png')
            }else if (idade > 12 && idade < 18 ){
                img.setAttribute('src', 'img/ado-fem.png')
            }else if (idade >= 18 && idade < 60 ){
                img.setAttribute('src', 'img/mulher.png')
            }else if (idade >= 60 && idade <= 125 ){
                img.setAttribute('src', 'img/idosa.png')
            }
        } 
        res.innerHTML = `Detectamos ${genero} de <strong>${idade}</strong> anos!`
        res.appendChild(img)  
    }
}


