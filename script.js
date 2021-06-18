const action = document.getElementById('clikeame');
const penguinArea = document.getElementById('penguin');
const heartArea = document.getElementById('heart');
const heart = document.getElementById('h');
const back = document.getElementById('back');
const texto = document.getElementById('mssg');
let h = [];
const pinguino = `<div class="penguin-bottom">
    <div class="right-hand animated"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>`

action.addEventListener('click', () => {
    penguin.innerHTML = pinguino;
    setTimeout(() => {
        heart.style.display = 'block';
    }, 2000);
    setTimeout(() => {
        back.style.display = 'block';
        heart.style.display = 'none';
        heartGenerator(30);
    }, 5000)
});

function heartGenerator(c) {
    for (let i = 0; i <= c; i++) {
        h.push(`<div class="smallHeart" style="animation-delay: ${i * 0.05}s; left: ${Math.random() * 100}%"></div>`);
    }
    back.style.display = 'none';
    heartArea.innerHTML = h;
    texto.innerHTML = '<h1>Te amo mi pingüinita hermosa <br> 16 Meses Increibles a tu lado'
}