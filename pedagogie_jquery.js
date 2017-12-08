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
    });

    $("#e3-envoyer").click(function () {
        if ($("#e3-text").val().toLowerCase().includes("véhicule")) {
            $("#e3").hide();
            $("#pedagogie_reponsebonne6").show();
        }
    });


    /*
    let goodAnswer = "pedagogie_reponse1";
    let i = 0;
    let j = 0;
    let pedagogie_object1 = {
        picture:"img/pedagogie1.jpg",
        question:"Lors d'une balade dominicale, vous vous retrouvez dans cette situation :",
        reponse:"Aucun panneau n'indiquait un risque d'aquaplanning, je reste relax.",
        erreur1:"J'attends de croiser une autre voiture pour voir si c'est normal.",
        erreur2:"J'active mes essuie-glaces au plus vite.",
        erreur3:"Je file chez le carrossier car l'eau de mer attaque la peinture."
    };
    let pedagogie_object2 = {
        picture:"img/pedagogie2.jpg",
        question:"Je viens de doubler un tank et un homme tente de sauter sur ma voiture :",
        reponse:"Je klaxonne.",
        erreur1:"Je mets mon clignotant et me rabats dans le plus grand calme.",
        erreur2:"J'active mes feux de brouillard arrière.",
        erreur3:"Je freine sec pour que l'homme me dépasse et s'écrase."
    };
    let pedagogie_object3 = {
        picture:"img/pedagogie3.jpg",
        question:"Je suis sur l'autoroute. Un autostoppeur se présente sur le bas côté :",
        reponse:"Je klaxonne.",
        erreur1:"J'ouvre la portière droite afin de le moucher.",
        erreur2:"Je l'écrase de plein fouet en mettant les essuie-glaces.",
        erreur3:"Je le prends en stop pour mieux le jeter à 130 km/h."
    };
    let pedagogie_object4 = {
        picture:"img/pedagogie4.jpg",
        question:"Un agent de la force publique me fait signe de m'arrêter :",
        reponse:"Je klaxonne.",
        erreur1:"Je roule trop vite pour m'arrêter sur une distance raisonnable.",
        erreur2:"J'écrase l'agent. Personne n'arrête Sergio.",
        erreur3:"Je m'arrête afin de connaître mon record de vitesse."
    };
    let pedagogie_object5 = {
        picture:"img/pedagogie5.jpg",
        question:"Dans cette situation, je dois :",
        reponse:"Signaler à ce preux chevalier que son destrier est très bruyant et qu'il aurait tendance à faire de l'huile.",
        erreur1:"Garder mon sang-froid et ne pas chercher à contredire cet ami motard.",
        erreur2:"Saluer ce motard comme il le fait si gentiment.",
        erreur3:"Faire demi-tour et suivre ce motard. Il doit connapitre un bon bar dans le coin pour se torcher la gueule et se déguiser de la sorte."
    };
    
    
    
    $(".reponse").click(function() {
        
    //    if (this.id == goodAnswer)
    //        $("#pedagogie_reponses").html('<div id="pedagogie_reponsebonne">' + 'toto' + '<br/>Clique ici pour continuer</div>');
    //    else
    //        $(this).hide();
        
        switch (++j) {
        case 1:
            $("#pedagogie").html('<div id="pedagogie_image"><p><img src="' + pedagogie_object1.picture + '" title="image pour illustrer la pédagogie" alt="image pour illustrer la pédagogie"/></p></div><div id="pedagogie_question">Question : ' + pedagogie_object1.question + '</div><div id="pedagogie_reponses"><div id="pedagogie_reponsebonne">' + pedagogie_object1.reponse + '<br/>Clique ici pour continuer</div></div>');
            break;
        case 2:
            $("#pedagogie").html('<div id="pedagogie_image"><p><img src="' + pedagogie_object2.picture + '" title="image pour illustrer la pédagogie" alt="image pour illustrer la pédagogie"/></p></div><div id="pedagogie_question">Question : ' + pedagogie_object2.question + '</div><div id="pedagogie_reponses"><div id="pedagogie_reponsebonne">' + pedagogie_object2.reponse + '<br/>Clique ici pour continuer</div></div>');
            break;
        case 3:
            $("#pedagogie").html('<div id="pedagogie_image"><p><img src="' + pedagogie_object3.picture + '" title="image pour illustrer la pédagogie" alt="image pour illustrer la pédagogie"/></p></div><div id="pedagogie_question">Question : ' + pedagogie_object3.question + '</div><div id="pedagogie_reponses"><div id="pedagogie_reponsebonne">' + pedagogie_object3.reponse + '<br/>Clique ici pour continuer</div></div>');
            break;
        case 4:
            $("#pedagogie").html('<div id="pedagogie_image"><p><img src="' + pedagogie_object4.picture + '" title="image pour illustrer la pédagogie" alt="image pour illustrer la pédagogie"/></p></div><div id="pedagogie_question">Question : ' + pedagogie_object4.question + '</div><div id="pedagogie_reponses"><div id="pedagogie_reponsebonne">' + pedagogie_object4.reponse + '<br/>Clique ici pour continuer</div></div>');
            break;
        case 5:
            $("#pedagogie").html('<div id="pedagogie_image"><p><img src="' + pedagogie_object5.picture + '" title="image pour illustrer la pédagogie" alt="image pour illustrer la pédagogie"/></p></div><div id="pedagogie_question">Question : ' + pedagogie_object5.question + '</div><div id="pedagogie_reponses"><div id="pedagogie_reponsebonne">' + pedagogie_object5.reponse + '<br/>Clique ici pour continuer</div></div>');
            break;
        }
    });
    
    $("#pedagogie_reponsebonne").click(function() {
        switch (++i) {
        case 1:
            goodAnswer = "pedagogie_reponse3";
            $("#pedagogie").html('<div id="pedagogie_image"><p><img src="' + pedagogie_object1.picture + '" title="image pour illustrer la pédagogie" alt="image pour illustrer la pédagogie"/></p></div><div id="pedagogie_question">Question : ' + pedagogie_object1.question + '</div><div id="pedagogie_reponses"><div id="pedagogie_reponse_gauche"><div class="reponse" id="pedagogie_reponse1">Réponse 1 : ' + pedagogie_object1.erreur1 + '</div><div class="reponse" id="pedagogie_reponse2">Réponse 2 : ' + pedagogie_object1.erreur2 + '</div></div><div id="pedagogie_reponse_droite"><div class="reponse" id="pedagogie_reponse3">Réponse 3 : ' + pedagogie_object1.reponse + '</div><div class="reponse" id="pedagogie_reponse4">Réponse 4 : ' + pedagogie_object1.erreur3 + '</div></div></div>');
            break;
        case 2:
            goodAnswer = "pedagogie_reponse2";
            $("#pedagogie").html('<div id="pedagogie_image"><p><img src="' + pedagogie_object2.picture + '" title="image pour illustrer la pédagogie" alt="image pour illustrer la pédagogie"/></p></div><div id="pedagogie_question">Question : ' + pedagogie_object2.question + '</div><div id="pedagogie_reponses"><div id="pedagogie_reponse_gauche"><div class="reponse" id="pedagogie_reponse1">Réponse 1 : ' + pedagogie_object2.erreur1 + '</div><div class="reponse" id="pedagogie_reponse2">Réponse 2 : ' + pedagogie_object2.reponse + '</div></div><div id="pedagogie_reponse_droite"><div class="reponse" id="pedagogie_reponse3">Réponse 3 : ' + pedagogie_object2.erreur2 + '</div><div class="reponse" id="pedagogie_reponse4">Réponse 4 : ' + pedagogie_object2.erreur3 + '</div></div></div>');
            break;
        case 3:
            goodAnswer = "pedagogie_reponse4";
            $("#pedagogie").html('<div id="pedagogie_image"><p><img src="' + pedagogie_object3.picture + '" title="image pour illustrer la pédagogie" alt="image pour illustrer la pédagogie"/></p></div><div id="pedagogie_question">Question : ' + pedagogie_object3.question + '</div><div id="pedagogie_reponses"><div id="pedagogie_reponse_gauche"><div class="reponse" id="pedagogie_reponse1">Réponse 1 : ' + pedagogie_object3.erreur1 + '</div><div class="reponse" id="pedagogie_reponse2">Réponse 2 : ' + pedagogie_object3.erreur2 + '</div></div><div id="pedagogie_reponse_droite"><div class="reponse" id="pedagogie_reponse3">Réponse 3 : ' + pedagogie_object3.erreur3 + '</div><div class="reponse" id="pedagogie_reponse4">Réponse 4 : ' + pedagogie_object3.reponse + '</div></div></div>');
            break;
        case 4:
            goodAnswer = "pedagogie_reponse3";
            $("#pedagogie").html('<div id="pedagogie_image"><p><img src="' + pedagogie_object4.picture + '" title="image pour illustrer la pédagogie" alt="image pour illustrer la pédagogie"/></p></div><div id="pedagogie_question">Question : ' + pedagogie_object4.question + '</div><div id="pedagogie_reponses"><div id="pedagogie_reponse_gauche"><div class="reponse" id="pedagogie_reponse1">Réponse 1 : ' + pedagogie_object4.erreur1 + '</div><div class="reponse" id="pedagogie_reponse2">Réponse 2 : ' + pedagogie_object4.erreur2 + '</div></div><div id="pedagogie_reponse_droite"><div class="reponse" id="pedagogie_reponse3">Réponse 3 : ' + pedagogie_object4.reponse + '</div><div class="reponse" id="pedagogie_reponse4">Réponse 4 : ' + pedagogie_object4.erreur3 + '</div></div></div>');
            break;
        case 5:
            goodAnswer = "pedagogie_reponse2";
            $("#pedagogie").html('<div id="pedagogie_image"><p><img src="' + pedagogie_object5.picture + '" title="image pour illustrer la pédagogie" alt="image pour illustrer la pédagogie"/></p></div><div id="pedagogie_question">Question : ' + pedagogie_object5.question + '</div><div id="pedagogie_reponses"><div id="pedagogie_reponse_gauche"><div class="reponse" id="pedagogie_reponse1">Réponse 1 : ' + pedagogie_object5.erreur1 + '</div><div class="reponse" id="pedagogie_reponse2">Réponse 2 : ' + pedagogie_object5.reponse + '</div></div><div id="pedagogie_reponse_droite"><div class="reponse" id="pedagogie_reponse3">Réponse 3 : ' + pedagogie_object5.erreur2 + '</div><div class="reponse" id="pedagogie_reponse4">Réponse 4 : ' + pedagogie_object5.erreur3 + '</div></div></div>');
            break;
        }
    });
    */
});

/*
<div id="pedagogie">
    <div id="pedagogie_image">
        <p><img src="img/pedagogie1.jpg" title="image pour illustrer la pédagogie" alt="image pour illustrer la pédagogie"/></p>
    </div>
    <div id="pedagogie_question">
        Question : Quelle est la solution à tout ?
    </div>
    <div id="pedagogie_reponses">
        <div id="pedagogie_reponse_gauche">
            <div class="reponse" id="pedagogie_reponse1">
                Réponse 1 : Je ne sais pas
            </div>
            <div class="reponse" id="pedagogie_reponse2">
                Réponse 2 : Oui
            </div>
        </div>
        <div id="pedagogie_reponse_droite">
            <div class="reponse" id="pedagogie_reponse3">
                Réponse 3 : 42
            </div>
            <div class="reponse" id="pedagogie_reponse4">
                Réponse 4 : Question suivante
            </div>
        </div>
    </div>
</div>
*/