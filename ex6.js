let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;
const defaut = "valeur par défaut";
console.log("nom  ->", nom ?? defaut);
console.log("age  ->", age ?? defaut);
console.log(`ville  ->, "${ville ?? defaut}"`);
console.log("score  ->", score ?? defaut);
console.log("actif  ->", actif ?? defaut);

console.log("opérateur || ===");
console.log("nom  ->", nom || defaut);
console.log("age  ->", age || defaut);
console.log("ville  ->", ville || defaut);
console.log("score  ->", score || defaut);
console.log("actif  ->", actif || defaut);

console.log("opérateur || ===");
console.log("nom  ->", nom || defaut);
console.log("age  ->", age || defaut);
console.log("ville  ->", ville || defaut);
console.log("score  ->", score || defaut);
console.log("actif  ->", actif || defaut);

console.log("comparaison  ===");
function comparer(nomVar, valeur) {
    const resNullish = valeur ?? defaut;
    const resOr = valeur || defaut;
    if (resNullish === resOr) {
        console.log(nomVar, ": ?? et || -> même résultat ->");
    } else {
        console.log(nomVar, ": ?? et || -> résultats différents ->");
    }
}
comparer("nom", nom);
comparer("age", age);
comparer("ville", ville);
comparer("score", score);
comparer("actif", actif);
