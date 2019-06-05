
let showMenue = "no";
$( "#menu-bubble" ).click(function() {
    if (showMenue == "no") {
        showMenue = "yes";
        console.log(showMenue);

        $("#home-bubble").addClass( "home-bubble" );
        $("#fotografia-bubble").addClass( "fotografia-bubble" );
        $("#estrategias-bubble").addClass( "estrategias-bubble" );
        $("#adn-bubble").addClass( "adn-bubble" );
        $("#investigacion-bubble").addClass( "investigacion-bubble" );
        $("#campanas-bubble").addClass( "campanas-bubble" );
        $("#about-bubble").addClass( "about-bubble" );

        $(".oval").addClass( "expand-oval" );
        $(".logo").addClass( "overpose-logo" );
    } else if (showMenue == "yes") {
        showMenue = "no";
        console.log("SHAT");
        $("#home-bubble").removeClass( "home-bubble" );
        $("#fotografia-bubble").removeClass( "fotografia-bubble" );
        $("#estrategias-bubble").removeClass( "estrategias-bubble" );
        $("#adn-bubble").removeClass( "adn-bubble" );
        $("#investigacion-bubble").removeClass( "investigacion-bubble" );
        $("#campanas-bubble").removeClass( "campanas-bubble" );
        $("#about-bubble").removeClass( "about-bubble" );

        $(".oval").removeClass( "expand-oval" );
        $(".logo").removeClass( "overpose-logo" );
    }
});