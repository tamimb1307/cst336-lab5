/* global $ */
$(document).ready(function() {
    
    /*event when clicking icon fills*/
    
    $(".favoriteIcon").on("click", function() { 
        
        if ($(this).attr("src") == "img/favorite.png") {
            $(this).attr("src", "img/favorite_on.png");
        }
        else {
            $(this).attr("src", "img/favorite_on.png");
        }
        
        });
});
        