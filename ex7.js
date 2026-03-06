let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = "PROMO10"; // ou null si pas de code promo
let reductionPourecentage = 10;
let estMembre = true;
let soldeCompte = 250;
let sousTotal = prix * quantite;
console.log("Sous-total:", sousTotal, "MAD");
let reduction = 0;
if ((codePromo ?? null) !== null && estMembre) {
    reduction = sousTotal * (reductionPourecentage / 100);
}
console.log("Réduction:", reduction, "MAD");
let total = sousTotal - reduction;
console.log("Total final:", total, "MAD");
let statut = "";
if ( soldeCompte >= total) {
    statut = "Paiement accepté";
} else {
    statut = "Paiement insuffisant";
}
console.log("Statut :", statut);
let nouveauSolde = soldeCompte;
if (statut === "Paiement accepté") {
    nouveauSolde = soldeCompte - total;
    console.log("Nouveau solde:", nouveauSolde, "MAD");
}
console.log("\n===== RÉCAPITULATIF =====");
console.log("Produit     :", nomProduit);
console.log("Quantité    :", quantite);
console.log("Prix unit   :", prix, "MAD");
console.log("Sous-total  :", sousTotal.toFixed(2), "MAD");
console.log("Réduction   :", reduction, "MAD");
console.log("Total       :", total.toFixed(3), "MAD");
console.log("Statut      :", statut);
console.log("Solde     :", nouveauSolde.toFixed(3), "MAD");
console.log("===========================");
