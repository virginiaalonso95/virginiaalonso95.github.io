var app=document.getElementById('app');
var typewriter = new Typewriter(app, {
    loop: true
});
// Comentario
typewriter.typeString('Licenciada en Informática Administrativa.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Si lo puedes Imaginar lo puedes Programar!')
    .pauseFor(2500)
//   Números de caracteres que se borrarán
   
    .start();