$(document).ready(function(){
    $(".exercise1").hover(function(){
        $(".txt1").fadeIn("fast");
    }, function(){
        $(".txt1").fadeOut("fast");
    });

    $(".exercise2").hover(function(){
        $(".txt2").fadeIn("fast");
    }, function(){
        $(".txt2").fadeOut("fast");
    });

    $(".exercise3").hover(function(){
        $(".txt3").fadeIn("fast");
    }, function(){
        $(".txt3").fadeOut("fast");
    });

    $(".exercise4").hover(function(){
        $(".txt4").fadeIn("fast");
    }, function(){
        $(".txt4").fadeOut("fast");
    });

    $(".project1").hover(function(){
        $(".txt5").fadeIn("fast");
    }, function(){
        $(".txt5").fadeOut("fast");
    });

    $(".project2").hover(function(){
        $(".txt6").fadeIn("fast");
    }, function(){
        $(".txt6").fadeOut("fast");
    });

    $(".project3").hover(function(){
        $(".txt7").fadeIn("fast");
    }, function(){
        $(".txt7").fadeOut("fast");
    });

    $(".project4").hover(function(){
        $(".txt8").fadeIn("fast");
    }, function(){
        $(".txt8").fadeOut("fast");
    });
});

// Function to check if an element is in viewport
function isElementInViewport(elem) {
    var rect = elem.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to fade out links container
function fadeOutLinksContainer() {
    $('#links-container').fadeOut();
}

// Check if reflection container is in viewport on page load
if (isElementInViewport(document.getElementById('reflection'))) {
    fadeOutLinksContainer();
}

// Check if reflection container enters viewport while scrolling
$(window).on('scroll', function() {
    if (isElementInViewport(document.getElementById('reflection'))) {
        fadeOutLinksContainer();
    }
});