function average() {
  const notes = [20, 12, 8, 9];
  let sum = 0;

  // Parcourir le tableau notes et calculer la somme des notes
  for (let i = 0; i < notes.length; i++) {
    sum += notes[i];
  }

  // Calculer la moyenne en divisant la somme par le nombre de notes
  const avg = sum / notes.length;

  // Afficher la moyenne
  console.log(avg);
}

average(); // Output: 12.25

module.exports = average;