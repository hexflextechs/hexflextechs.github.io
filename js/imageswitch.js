document.querySelector('.logo').addEventListener('mouseover', function() {
    document.getElementById('large-header').style.backgroundImage = "url('../img/hexhelmet.png')";
});

document.querySelector('.logo').addEventListener('mouseout', function() {
    document.getElementById('large-header').style.backgroundImage = "url('../img/hexhelmet1.png')";
});
