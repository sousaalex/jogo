$(document).ready(function(){
    // navbar toggling
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(200);
    });

    // bg video play/pause
    const video = $('#hero-vid');
    let playing = false;
    $('#play-btn').click(function(){
        if(playing == false){
            video.trigger("play");
            playing = true;
            $(this).html("<span><i class = 'fas fa-pause'></i></span>");
        } else {
            video.trigger("pause");
            playing = false;
            $(this).html("<span><i class = 'fas fa-play'></i></span>");
        }
    });
});