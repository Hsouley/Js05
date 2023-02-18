function displayOrder(numbers) {
  // Utiliser la méthode sort() pour trier le tableau par ordre croissant
  numbers.sort(function(a, b) {
    return a - b;
  });

  // Afficher l'ordre trié
  console.log(numbers);
}

const numbers = [5, 2, 9, 1, 3];
displayOrder(numbers); // Output: [1, 2, 3, 5, 9]
module.exports = displayOrder;