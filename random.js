
//création des paramètres minimum et maximum 
function hasard(min, max) {
  var rdm = Math.floor(Math.random() * (max - min + 1) + min);
  return rdm;//le math.floor nous indique 
  // qu'on ne veut qu'un nombre entier. Le Math random nous permet de choisir un nombre aléatoire
  // entre le minimum et le maximum. 
}
var random = hasard(0, 1000); // On définit notre minimum et notre maximum
console.log(random);


var compt = 1;

do {
  var guess = prompt('choissisez un nombre'); // début du jeu. l'utilisateur doit deviner le nombre 
  // entre 1 et 1000
  if (guess - random <= -100) alert('vous etes largement en dessous'), compt++; // 
  // Si la différence entre le choix de l'utilisateur et le chiffre random est inférieur à -100
  // On indique à l'utilisateur qu'il est largement en dessous
  else if (guess - random >= 100) alert('vous êtes largement au dessus'), compt++;
  // Si la différence entre le choix de l'utilisateur et le chiffre random est supérieur à 100
  // On indique à l'utilisateur qu'il est largement au dessus
  else if (guess > random) alert('vous êtes au dessus'), compt++;
  // Si la différence entre le choix de l'utilisateur et le chiffre random est inférieur à 100
  // On indique à l'utilisateur qu'il est juste au dessus
  else if (guess < random) alert('vous êtes en dessous'), compt++;
  // Si la différence entre le choix de l'utilisateur et le chiffre random est supérieur à -100
  // On indique à l'utilisateur qu'il est juste en dessous
  else if (guess == random) alert('victoire en ' + compt + ' ' + 'tentatives');
  // On indique à l'utilisateur son nombre de tentatives. Avant le do on a crée une variable compt
  // Qui augment à chaque tentative de l'utilisateur
  else if (guess == 'triche') alert(random);
  // le mot triche permet à l'utilisateur d'avoir la réponse au jeu et à pouvoir l'insérer lui meme
}
while (guess != random);








