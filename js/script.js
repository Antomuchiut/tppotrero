
/* function vision() {
    document.body.style.background = "black";
    document.body.style.color = "white";
}  */

const modoNocheBtn = document.getElementById('modoNocheBtn');
  
modoNocheBtn.addEventListener('click', function() {
  document.body.classList.toggle('modo-noche');
  modoNocheBtn.classList.toggle('active');
});

function copy() {
    alert ("Autora: Lucia Antonela Muchiut - antomuchiut@gmail.com ")
}