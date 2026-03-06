const nombres =[ 0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];
for (const valeur of nombres) {
    let type;
    if (Number.isNaN(valeur)) {
        type = "INVALIDE";
    } else if (valeur === Infinity || valeur === -Infinity) {
        type = "INFINI";
    } else if (Object.is(valeur, -0)) {
        type = "ZERO NEGATIF";
    } else if (Number.isInteger (valeur) && Number.isSafeInteger(valeur)) {
        type = "ENTIER SUR";
    } else if (Number.isInteger(valeur) && !Number.isSafeInteger(valeur)) {
        type = "ENTIER HORS LIMITES"; 
     } else {
        type = "DECIMAL";
    }
    console.log(valeur + "-> " + type);
}