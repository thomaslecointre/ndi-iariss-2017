$(document).ready(function () {

    let condition = $("#condition");
    let accident = $("#accident");
    let qualite = $("#qualite");
    let facteur = $("#facteur");
    let vehicule = $("#vehicule");
    let portes = $("#portes");
    let puissance = $("#puissance");
    let e1 = $("#e1");

    accident.hide();
    qualite.hide();
    facteur.hide();
    vehicule.hide();
    portes.hide();
    puissance.hide();
    e1.hide();

    let selectCondition = $("#select-condition");

    selectCondition.change(function () {
        if (selectCondition.val() == "accident") {
            accident.show();
            accident = null;
        }
    });

    let selectAccident = $("#select-accident");

    selectAccident.change(function () {
        if (selectAccident.val() != "null") {
            qualite.show();
            qualite = null;
        }
    });

    let selectQualite = $("#select-qualite");

    selectQualite.change(function () {
        if (selectQualite.val() != "null") {
            facteur.show();
            facteur = null;
        }
    });

    let selectFacteur = $("#select-facteur");

    selectFacteur.change(function() {
        if(selectFacteur.val() == "vitesse") {
            vehicule.show();
            vehicule = null;
            portes.show();
            portes = null;
            puissance.show();
            puissance = null;
        }
    });

    let selectPortes = $("#select-portes");

    selectPortes.change(function() {
        if(selectPortes.val() == "4") {
            e1.show();
            e1 = null;
        }
    });

    let e1Text = $(input[name="e1"]);
    
    $("#envoyer").click(function() {
        if(e1Text.val().toLowerCase().contains("voiture")) {
            $("#lancement-pedagogie").show();
        }
    });

})