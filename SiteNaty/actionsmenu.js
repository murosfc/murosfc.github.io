function openMenu() {
    var target = document.querySelector('.nav');
    var player = target.animate([
        {transform: 'translate(0,0)'},
        {transform: 'translate(280px, 0)'}
    ],500)
    player.addEventListener('finish', function () {
        target.style.transform = 'translate(280px,0)'
    })
}

function closeMenu() {
    var target = document.querySelector('.nav');
    var player = target.animate([
        {transform: 'translate(280px,0)'},
        {transform: 'translate(0, 0)'}
    ],500)
    player.addEventListener('finish', function () {
        target.style.transform = 'translate(0,0)'
    })
}