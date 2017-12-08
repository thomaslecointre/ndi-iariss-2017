$(document).ready(function () {

    let hide1 = $("#hide1");
    let hide2 = $("#hide2");
    let hide3 = $("#hide3");
    let hide4 = $("#hide4");
    let hide5 = $("#hide5");
    let hide6 = $("#hide6");
    let hide7 = $("#hide7");
    let hide8 = $("#hide8");
    let hide9 = $("#hide9");
    let hide10 = $("#hide10");
    let hide11 = $("#hide11");

    hide2.hide();
    hide3.hide();
    hide4.hide();
    hide5.hide();
    hide6.hide();
    hide7.hide();
    hide8.hide();
    hide9.hide();
    hide10.hide();
    hide11.hide();

    $("#pedagogie_reponsebonne3").hide();
    $("#pedagogie_reponsebonne6").hide();

    let goodAnswer = "";

    $("#pedagogie_reponsebonne1").click(function () {
        hide1.hide();
        hide2.show();
        goodAnswer = "pedagogie_reponse3";
    });

    $(".reponse1").click(function () {
        if (this.id == goodAnswer) {
            hide2.hide();
            hide3.show();
        } else
            $(this).hide();
    });

    $("#pedagogie_reponsebonne2").click(function () {
        hide3.hide();
        hide4.show();
        goodAnswer = "pedagogie_reponse2";
    });

    $(".reponse2").click(function () {
        if (this.id == goodAnswer) {
            hide4.hide();
            hide5.show();
        } else
            $(this).hide();
    });

    $("#e2-envoyer").click(function () {
        if ($("#e2-text").val().toLowerCase().includes("alcool")) {
            $("#e2").hide();
            $("#pedagogie_reponsebonne3").show();
        } else {

            ajouterJeu();
        }
    });

    

    $("#pedagogie_reponsebonne3").click(function () {
        hide5.hide();
        hide6.show();
        goodAnswer = "pedagogie_reponse4";
    });

    $(".reponse3").click(function () {
        if (this.id == goodAnswer) {
            hide6.hide();
            hide7.show();
        } else
            $(this).hide();
    });

    $("#pedagogie_reponsebonne4").click(function () {
        hide7.hide();
        hide8.show();
        goodAnswer = "pedagogie_reponse3";
    });

    $(".reponse4").click(function () {
        if (this.id == goodAnswer) {
            hide8.hide();
            hide9.show();
        } else
            $(this).hide();
    });

    $("#pedagogie_reponsebonne5").click(function () {
        hide9.hide();
        hide10.show();
        goodAnswer = "pedagogie_reponse2";
    });

    $(".reponse5").click(function () {
        if (this.id == goodAnswer) {
            hide10.hide();
            hide11.show();
        } else
            $(this).hide();
    });



    $("#pedagogie_reponsebonne6").click(function () {
        hide11.hide();
        $("body").html("<img src='photo_ndi.jpg' width='1200px'>");
    });

    $("#e3-envoyer").click(function () {
        if ($("#e3-text").val().toLowerCase().includes("véhicule")) {
            $("#e3").hide();
            $("#pedagogie_reponsebonne6").show();
        }
    });

    function ajouterJeu() {
        console.log("Konami");
        // KONAMI Code
        var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
            n = 0;
        $(document).keydown(function (e) {
            console.log(e.keyCode);
            if (e.keyCode === k[n++]) {
                if (n === k.length) {
                    $("body").html('<iframe src="https://cloudgames.com/games/html5/goblin-run-new-en-s-iga-cloud/index.html?pub=10" name="cloudgames-com" width="900" height="600" frameborder="0" scrolling="no"></iframe><div><a href="http://54.36.54.15/ndi/">Retourner au site</a></div>');
                    n = 0;
                    return false;
                }
            }
            else {
                n = 0;
            }
        });
    }
});