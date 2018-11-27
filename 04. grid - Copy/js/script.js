
var media = window.matchMedia("(max-width: 767px)");


// TOGGLE MENU AND SEARCH

document.querySelector(".menu").onclick = function() {

    if (document.querySelector(".mobmenu").style.display == "none") {
        document.querySelector(".mobmenu").style.display = "flex";
    }
    
    else document.querySelector(".mobmenu").style.display = "none";

}


document.querySelector(".search").onclick = function() {

    var searchfield = document.querySelector(".searchfield");

    if (media.matches) {
        if (searchfield.style.display == "none") {
            searchfield.style.display = "block";
        }
        
        else searchfield.style.display = "none";
    }

    else {
        if (searchfield.style.display == "none") {
            searchfield.style.display = "flex";
            searchfield.style.position = "absolute";
            searchfield.style.right = "4vw";
            searchfield.style.top = "8vw";
        }
        
        else searchfield.style.display = "none";
    }

}



// SCROLL UP

jQuery(document).ready(function($) {

    
    $(".arrowbutton").click(function(){
    
            $("html, body").animate({ scrollTop: $('.topmenu').offset().top }, 1100);		
    
        });

    });




// TOGGLE IMAGES 

//     - HOVER

var clicked = false;

function enter(e) {     
    this.previousElementSibling.style.display = "block"; 
}

function leave(e) {     
    if (clicked == false){
        this.previousElementSibling.style.display = "none";
    }
    
}



//     -    MOUSEDOWN AND CLICK

function push(e) {     
    this.previousElementSibling.style.display = "block"; 
}

function clickimg(e) {     
    this.previousElementSibling.style.display = "block"; 
    clicked = true;
}




const els = document.querySelectorAll('.basicimg');
els.forEach(el=>el.addEventListener('mouseover', enter));
els.forEach(el=>el.addEventListener('mouseleave', leave));

els.forEach(el=>el.addEventListener('mousedown', push));
els.forEach(el=>el.addEventListener('click', clickimg));


            


            
