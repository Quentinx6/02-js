/**
 * à partir d'un tableau de caractères, vous devez générer un mot de passe de 8 caractères
 * bonus : le mot de passe contient  minimum 1 majuscule, 1 caractère spécial & 1 nombre
 */
let mdp = [];
let tb = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
let chiffre = ['0','1','2','3','4','5','6','7','8','9',];
let cara = ["%", "#", ":", "$", "*",];
let maj = [];
// La boucle for me sert à définir ma variable maj pour éviter d'écrire un nouveau tableau
for (let i = 0; i < tb.length; i++){
    maj.push(tb[i].toUpperCase());
}
let tableau = tb.concat(chiffre, cara, maj);  // Concat permet d'avoir tous les tableaux en 1 tableau
                                // Fin de définition des tableaux
function Random (min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}
// Permet d'avoir un systéme de hasard utilisé juste ci-dessous
for (let pas = 0; pas < 5; pas++){
    mdp[pas] = tableau[Random(0, tableau.length)];
}
    mdp.push(chiffre[Random(0, chiffre.length)]);
    mdp.push(cara[Random(0, cara.length)]);
    mdp.push(maj[Random(0, maj.length)]);
    // Grâce au push on ajoute un caractère à la suite dans le tableau pour arrivé jusque 8
function shuffle(final) {
    return final.sort(() => Math.random() - 0.5);
}
//La fontion "shuffle" nous permet de melanger la chaîne de caractère
mdp = shuffle(mdp);
(mdp.length === 8) ? console.log(mdp.join("")) : console.log("8 caractères et c'est tout !