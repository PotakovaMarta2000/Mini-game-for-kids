let cards = document.querySelectorAll(' .card'),
    player = document.querySelector(' .player');

cards.forEach(card => {
let width = card.offsetWidth;
let height = card.offsetHeight;

card.addEventListener('mousemove', Element => {
let xVal = Element.offsetX;
let yVal = Element.offsetY;

let xRotation = ((yVal - height / 2) / height) * -20;
let yRotation = ((xVal - width / 2) / width) * 20;

let css = 'perspective(500px) scale(1.03) rotateX('+ xRotation +'deg) rotateY('+ yRotation +'deg)';
Element.target.style.transform = css;
});
card.addEventListener('mouseout', Element => {
Element.target.style.transform = 'scale(1.03) rotateX(0) rotateY(0)';
});
card.addEventListener('click', Element =>{
let sound = Element.target.parentElement.dataset.sound;
player.setAttribute('src', `mp3/${sound}.mp3`);
player.play();
});
});


