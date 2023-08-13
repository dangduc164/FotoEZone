function checkHead() {
    const h_header = $(".l-header").height()
    $("main").css("margin-top", h_header)
}

$(document).ready(function() {


    //custom dropdown
    $(".dropdown .dropdown-item").click(function() {
        var text = $(this).html();
        $(".dropdown .dropdown-item").removeClass("selected")
        $(this).addClass("selected")
        $(this).parent().parent().find(".c-dropdown-toggle").html(text);
    });

    //show menu sp
    $(".handle-menu").click(function(e) {
        e.preventDefault()
        $(this).toggleClass("show")
        $(".l-header__menu_sp").toggleClass("show")
    })

    //show hadsub
    $(".l-header__menu_sp .has-sub").click(function(e) {
        e.preventDefault()
            // $(this).toggleClass("show")
        $('.sub_menu').slideToggle();
    })

    checkHead()



    const getBox = $(".p-home__scan__wrap .box")
    console.log("getBox", getBox);
    for (let i = 1; i <= getBox.length; i++) {

        let active = false;
        $('.scroller').mousedown(function() {

        })
        document.querySelector('.scroller').addEventListener('mousedown', function() {
            active = true;

            document.querySelector('.scroller').classList.add('scrolling');
        });

        document.body.addEventListener('mouseup', function() {
            active = false;
            document.querySelector('.scroller').classList.remove('scrolling');
        });
        document.body.addEventListener('mouseleave', function() {
            active = false;
            document.querySelector('.scroller').classList.remove('scrolling');
        });

        document.body.addEventListener('mousemove', function(e) {
            if (!active) return;

            let x = e.pageX;

            x -= document.querySelector('.wrapper').getBoundingClientRect().left;

            scrollIt(x);
        });

        // Let's use this function
        function scrollIt(x) {
            let transform = Math.max(0, (Math.min(x, document.querySelector('.wrapper').offsetWidth)));
            document.querySelector('.after').style.width = transform + "px";
            document.querySelector('.scroller').style.left = transform - 25 + "px";
        }
        scrollIt(150);
        document.querySelector('.scroller').addEventListener('touchstart', function() {
            active = true;
            document.querySelector('.scroller').classList.add('scrolling');
        });
        document.body.addEventListener('touchend', function() {
            active = false;
            document.querySelector('.scroller').classList.remove('scrolling');
        });
        document.body.addEventListener('touchcancel', function() {
            active = false;
            document.querySelector('.scroller').classList.remove('scrolling');
        });
    }

    // let active = false;
    // document.querySelector('.scroller').addEventListener('mousedown', function() {
    //     active = true;

    //     document.querySelector('.scroller').classList.add('scrolling');
    // });

    // document.body.addEventListener('mouseup', function() {
    //     active = false;
    //     document.querySelector('.scroller').classList.remove('scrolling');
    // });
    // document.body.addEventListener('mouseleave', function() {
    //     active = false;
    //     document.querySelector('.scroller').classList.remove('scrolling');
    // });

    // document.body.addEventListener('mousemove', function(e) {
    //     if (!active) return;

    //     let x = e.pageX;

    //     x -= document.querySelector('.wrapper').getBoundingClientRect().left;

    //     scrollIt(x);
    // });

    // // Let's use this function
    // function scrollIt(x) {
    //     let transform = Math.max(0, (Math.min(x, document.querySelector('.wrapper').offsetWidth)));
    //     document.querySelector('.after').style.width = transform + "px";
    //     document.querySelector('.scroller').style.left = transform - 25 + "px";
    // }
    // scrollIt(150);
    // document.querySelector('.scroller').addEventListener('touchstart', function() {
    //     active = true;
    //     document.querySelector('.scroller').classList.add('scrolling');
    // });
    // document.body.addEventListener('touchend', function() {
    //     active = false;
    //     document.querySelector('.scroller').classList.remove('scrolling');
    // });
    // document.body.addEventListener('touchcancel', function() {
    //     active = false;
    //     document.querySelector('.scroller').classList.remove('scrolling');
    // });

})

$(document).resize(function(e) {
    checkHead()
})