$(document).ready(function() {
    $(".colorithover").hide();
    $(".again").hide();
    $(".colorit").hover(function(){
        $(".colorit").hide();
        $(".colorithover").show();
    });
    
    $(".colorithover").mouseout(function(){
        $(".colorit").show();
        $(".colorithover").hide();
    });
    
    $(".coloron").click(function(){
        $(".colorit").hide();
        $(".colorithover").hide();
        $(this).removeClass("colorithover");
        $("#linkou_outline").fadeOut(1000);
        $(".again").show();
    });
    
    $(".again").click(function(){
        $(".colorit").show();
        $(".coloron").addClass("colorithover");
        $("#linkou_outline").show();
        $(this).hide();
    });
    
    $('#menuIcon').click(function() {
        $('.menu').animate({
            left: "0px"
        }, 200);
    });
    
    $("#close").click(function(){
        $('.menu').animate({
            left:"-285px"
        }, 200);
    });
});