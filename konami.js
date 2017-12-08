$(document).ready(function () {
    function ajouterJeu() {
        // KONAMI Code
        var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
            n = 0;
        $(document).keydown(function (e) {
            console.log(e.keyCode);
            if (e.keyCode === k[n++]) {
                if (n === k.length) {
                    $("body").html('<iframe src="https://cloudgames.com/games/html5/goblin-run-new-en-s-iga-cloud/index.html?pub=10" name="cloudgames-com" width="900" height="600" frameborder="0" scrolling="no"></iframe><div><a href="http://147.135.194.162">Retourner au site</a></div>');
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
