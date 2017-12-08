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
        if(selectAccident.val() != "null") {
            qualite.show();
            qualite = null;
        }
    })
})