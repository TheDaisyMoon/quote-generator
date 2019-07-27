$(document).ready(function () {

    $(function () {

    // citations à afficher
    var sentences = [
        "<p>“Please, God, please, don't let me be normal!” <br> - Sigourney Weaver.</p>",
        "<p>“But for my own part, if a book is well written, I always find it too short.” <br> - Jane Austen.</p>",
        "<p>“Great things are not done by impulse, but by a series of small things brought together.” <br> - Vincent Van Gogh.</p>",
        "<p>“The beginning is perhaps more difficult than anything else, but keep heart, it will turn out all right.” <br> - Vincent Van Gogh.</p>",
        "<p>“If you do not tell the truth about yourself you cannot tell it about other people.” <br> - Virginia Woolf.</p>",
        "<p>“Our feelings are our most genuine paths to knowledge.” <br> - Audre Lorde.</p>",
        "<p>“The things we truly love stay with us always, locked in our hearts as long as life remains.” <br> - Josephine Baker.</p>",
        "<p>“Change requires intent and effort. It really is that simple.” <br> - Roxane Gay.</p>",
        "<p>“The scariest moment is always just before you start.” <br> - Stephen King.</p>",
        "<p>“Unless you're willing to look a little foolish, forget the possibility of becoming great.” <br> - Cher.</p>",
    ];

    // la variable qui permet de rendre ça aléatoire
    var random = sentences[Math.floor(Math.random() * sentences.length)];

    //on envoie la citation dans la div à l'id "quote"
    document.getElementById("quote").innerHTML = "<p>" + random + "</p>";
});
    // Rafraîchit la page lors d'un clic

    $("#quote").click(function () {
        location.reload();
    });

});

