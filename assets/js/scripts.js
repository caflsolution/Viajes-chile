$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip()
    $(".navegador").on("click", function(e){
        e.preventDefault();
        let section = this.hash;
        $("html").animate({
            scrollTop: $(section).offset().top,
        },
            800
        );
    });

    var color1 = false
    $(".card-title").on("dblclick", function(){
        if(color1 == false){
            $(this).addClass("text-danger")
            color1 = true
        }else{
            $(this).removeClass("text-danger")
            color1 = false
        }        
    })
    $(".card-img-top").on("click", function(){
        console.log("Click");
        $( ".card-text" ).toggle( "slow" );
    })
});