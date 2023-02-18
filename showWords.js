function showWords() {
  const mots = ["Niger", "Niamey", "Sadore", "Codeloccol"];

  // Parcourir le tableau mots et afficher chaque élément à l'aide de la boucle for
  for (let i = 0; i < mots.length; i++) {
    console.log(mots[i]);
  }
}

showWords(); // Output: Niger \n Niamey \n Sadore \n Codeloccol
module.exports = showWords;