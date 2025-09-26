let ini = document.querySelector('input#txtIni')
let fim = document.querySelector('input#txtFim')
let pas = document.querySelector('input#txtPas')
let res = document.querySelector('div#res')

function contar(){
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML = "<strong>ERRO</strong> Impossivel contar, digite um valor!"
    }else{
        res.innerHTML = ''
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if(p == 0){
            window.alert('Impossivel contar de zero em zero, iremos considerar de 1 em 1')
            p = 1     
        }
        if(i < f){
            for(let c = i; c <= f ; c += p){
                res.innerHTML += ` \u{23ED} ${c}`
            }
        }else if(i > f){
            for(let c = i; c >= f ; c -= p){
                res.innerHTML += ` \u{23ED} ${c}`
            }
        }
    }
}