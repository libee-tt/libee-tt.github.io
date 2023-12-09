let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2000)
  .typeString('<span style="color: #F06292;"> Hago páginas web, fotitos y blogs para tus eventos :)</span>')
  .pauseFor(500)
  .deleteChars(10)
  .start();
