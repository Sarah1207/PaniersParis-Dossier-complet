
/*CE CODE PERMET DE DEMANDER A L'UTILISATEUR DE SE CONNECTER OU DE CREER UN COMPTE AVANT DE PASSER A L'ACHAT - AFFICHAGE MODAL EN BAS DE PAGE*/
/*PAGE COMMANDE*/

var alertConnexionCommande = document.getElementById("alertConnexionCommande");
var closeAlertConnexionCommande = document.getElementById("closeAlertConnexionCommande");
var achat = document.getElementById ("achat");


achat.addEventListener("submit",function(e){

    e.preventDefault();

    if (alertConnexionCommande.style.display =="none"){
        alertConnexionCommande.style.display ="block";
    } else {alertConnexionCommande.style.display ="none";
    }
});


/*CE CODE PERMET DE FERMER LA MODAL EN CLIQUANT SUR LA CROIX*/
/*PAGE COMMANDE*/

closeAlertConnexionCommande.addEventListener("click",function(){
    alertConnexionCommande.style.display ="none";
});






