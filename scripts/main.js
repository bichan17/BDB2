//tutorial
//http://www.webappers.com/2013/02/08/how-to-make-sprite-animations-with-html5-canvas/

app.main = (function(){
    function init() {

      //smooth scroll on link click
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
  }
  
  

  //Public interface
  return{
    init : init
    //someVar : someVar,
    //someFunc : someFunc
  }
})();