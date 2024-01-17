document.getElementById('searchinput').addEventListener('input', function() {
  var searchTerm = this.value.toLowerCase();
  var games = document.getElementsByClassName('game');
  for (var i = 0; i < games.length; i++) {
    var gameTitle = games[i].innerText.toLowerCase();
    if (gameTitle.includes(searchTerm)) {
      games[i].style.display = 'block';
    } else {
      games[i].style.display = 'none';
    }
  }
});