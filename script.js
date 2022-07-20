function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if(hora>= 0 && hora< 12){
    img.src = 'img/fotomanha.png'
    document.body.style.background = '#f9c385'
    

} else if(hora>= 12 && hora< 18){
    img.src = 'img/fototarde.png'
    document.body.style.background = '#eea651'
  

} else{
    img.src = 'img/fotonoite.png'
    document.body.style.background = '#151d2c'

}
}