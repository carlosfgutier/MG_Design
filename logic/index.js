
let showMenue = "no";
$( "#menu-bubble" ).click(function() {
    if (showMenue == "no") {
        showMenue = "yes";
        console.log(showMenue);

        $("#fotografia-bubble").addClass( "fotografia-bubble" );
        $("#estrategias-bubble").addClass( "estrategias-bubble" );
        $("#adn-bubble").addClass( "adn-bubble" );
        $("#investigacion-bubble").addClass( "investigacion-bubble" );
        $("#campanas-bubble").addClass( "campanas-bubble" );
        $("#about-bubble").addClass( "about-bubble" );
    } else if (showMenue == "yes") {
        showMenue = "no";
        console.log("SHAT");

        $("#fotografia-bubble").removeClass( "fotografia-bubble" );
        $("#estrategias-bubble").removeClass( "estrategias-bubble" );
        $("#adn-bubble").removeClass( "adn-bubble" );
        $("#investigacion-bubble").removeClass( "investigacion-bubble" );
        $("#campanas-bubble").removeClass( "campanas-bubble" );
        $("#about-bubble").removeClass( "about-bubble" );
    }
});