let paires = [
   [0, ""],
   [0, "0"],
   [0, false],
   ["", false],
   [null, undefined],
   [null, false],
   [NaN, NaN],
   [1, "1"],
   [" \t\n ", 0]
];
let compteur = 0
for (let i = 0; i < paires.length; i++) {
    let a = paires[i][0];
    let b = paires[i][1];
    let egalite = (a == b);
    let strictEgalite = (a === b);
    if (egalite && !strictEgalite) { 
        compteur++;}
        console.log( a + " == " + b + "\t_->" + egalite + "  |  " + a + " === " + b + "\t->" + strictEgalite);
}
    console.log( '---');
    console.log(compteur + " paires(s) ou == et === donnent des résultats différents.");