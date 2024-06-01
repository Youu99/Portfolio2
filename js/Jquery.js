$(document).ready(function(){
    $("#hamburger-1").click(function(){
      if ($("#MAIN_NAV").css('display') == 'none') {
        $("#MAIN_NAV").css('display', 'flex').hide().fadeIn(700);
        $("#MAIN_Tag").fadeOut(0);
      } else {
        $("#MAIN_NAV").fadeOut(0, function() {
          $(this).css('display', 'none');
        });
        $("#MAIN_Tag").css('display', 'flex').hide().fadeIn(700);
      }
    });
  });