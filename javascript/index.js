$(document).ready(function() {
    $(".colorithover").hide();
    $(".again").hide();
    $(".about2").hide();
    $(".location2").hide();
    $(".catagory2").hide();
    
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
    
    $(".close").click(function(){
        $('.menu').animate({
            left:"-285px"
        }, 200);
        $('.about').animate({
            left:"-650px"
            },200);
        $('.location').animate({
            left:"-650px"
            },200);
        $('.catagory').animate({
            left:"-650px"
            },200);
    });
    
    $(".about1").hover(function(){
        $('.about2').show();
        $('.about1').hide();
    });
    $(".about2").mouseout(function(){
        $('.about1').show();
        $('.about2').hide();
    });
    
    $(".location1").hover(function(){
        $('.location2').show();
        $('.location1').hide();
    });
    $(".location2").mouseout(function(){
        $('.location1').show();
        $('.location2').hide();
    });
    
    $(".catagory1").hover(function(){
        $('.catagory2').show();
        $('.catagory1').hide();
    });
    $(".catagory2").mouseout(function(){
        $('.catagory1').show();
        $('.catagory2').hide();
    });
    
    $(".about2").click(function(){
        $('.menu').animate({
            left:"650px"
        },200);
        $('.about').animate({
            left:"0px"
        },200);
        $('.location').animate({
            left:"-650px"
        },200);
        $('.catagory').animate({
            left:"-650px"
        },200);
    });
    
    $(".location2").click(function(){
        $('.menu').animate({
            left:"650px"
        },200);
        $('.location').animate({
            left:"0px"
        },200);
        $('.catagory').animate({
            left:"-650px"
        },200);
        $('.about').animate({
            left:"-650px"
        },200);
    });
    
    $(".catagory2").click(function(){
        $('.menu').animate({
            left:"650px"
        },200);
        $('.catagory').animate({
            left:"0px"
        },200);
        $('.location').animate({
            left:"-650px"
        },200);
        $('.about').animate({
            left:"-650px"
        },200);
    });
});