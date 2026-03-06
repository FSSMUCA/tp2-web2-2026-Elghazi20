let valeurs = [0, 1, "", "0",null, undefined, NaN, false, [], {},];
for (let i = 0; i < valeurs.length; i++) {
    let valeur = valeurs[i];
    let etat  ;
    if (valeur === "") {
        etat = "(chaine vide)";
    } else {
        etat = String(valeur);
    }
    if (valeur) {
    console.log(etat + " -> truthy");
    } else {
    console.log(etat + " -> falsy");
    }
}