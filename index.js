
$(document).ready(function(){
    $("#menu").click(function(){
        $(this).toggleClass("fa-times")
        $(".navbar").toggleClass("active")
    })

    // log in form
        $("#login").click(function(){
            $(".login-form").addClass("poppup")
        })
        $(".login-form form .fa-times").click(function(){
            $(".login-form").removeClass("poppup")
        // })   

$("section").each(function(){
    let top = $(window).screenTop();
    let height = $(window).height();
    let id =$(window).attr("id");
    let offset = $(window).offset().top-200

    if(top > offset && top < offset + height){
        $(".navbar ul li a").removeClass("active")
        $(".navbar").find('[href="#${id}"]').addClass("active")
    }
})

        })
    $(window).on("load scroll", function(){
        $("#menu").removeClass("fa-times")
        $(".navbar").removeClass("active")
        $(".login-form").removeClass("poppup")


    })
})