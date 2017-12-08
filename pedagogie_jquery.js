$(document).ready(function() {

let goodAnswer = "pedagogie_reponse1";

$(".reponse").click(function() {
    //console.log(this);
    if (this.id == goodAnswer)
        $("#pedagogie_reponses").html('<div id="pedagogie_reponsebonne">' + /*this.text*/ 'toto' + '</div>');
    else
        $(this).hide();
});

});