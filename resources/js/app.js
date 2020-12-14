$(document).ready(function(){
    // STICKY MENU
    $(".js--services-section").waypoint(function(direction){
        if (direction=="down"){
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky')
        }
    });

    // MIXITUP - PORTFOLIO
    var mixer = mixitup('.box-wrapper');



    // smoth scroll for IE/EDGE/SAFARI
    $("a").on('click', function(event){
        if(this.hash !==""){
            event.preventDefault();
            var hash = this.hash;

            $ ('html, body')

    )};
    }
});

function openNav(){
    document.getElementById('mynav').style.width = 100%;

}
function closeNav(){
    document.getElementById('mynav').style.width = 0%;

}


