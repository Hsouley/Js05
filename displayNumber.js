function displayNumber() {
  // Crée un tableau "nombres" contenant les nombres de 1 à 10
  var nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // Affiche chaque élément du tableau à l'écran
  for (var i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
  }
}

// Appelle la fonction displayNumber
displayNumber();

module.exports = displayNumber;