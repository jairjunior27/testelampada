let lamp = document.getElementById('lamp')
let turnOn = document.getElementById('turnOn')
let turnOf = document.getElementById('turnOf')
let music = document.getElementById('music')

let botao = document.getElementById('btn')


function isLampBrooken(){
    return lamp.src.indexOf('quebrada')>-1
}
function ligar(){
    if(!isLampBrooken()){
    lamp.src= './img/ligada.jpg'; 
    }
   
}

turnOn.addEventListener('click',ligar)
lamp.addEventListener('mouseover',ligar)


function desligar(){
    if(!isLampBrooken()){
        lamp.src ='./img/desligada.jpg'
    }
 
}
turnOf.addEventListener('click',desligar)
lamp.addEventListener('mouseout',desligar)
function quebrar(){
    lamp.src ='./img/quebrada.jpg';
    music.src ='lampada quebrando.mp3'
}
lamp.addEventListener('dblclick',quebrar)
