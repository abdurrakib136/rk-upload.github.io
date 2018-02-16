AOS.init({
  duration: 1200,
})

// external js: isotope.pkgd.js

$(document).ready(function(){
 $('.mesonary_area').masonry({
        // options
        itemSelector: 1,
         percentPosition: true, 
        columnWidth: 1
    });
    

});
