$(document).ready(function(){
    $("#hamburger-1").click(function(){
      if ($("#MAIN_NAV").css('display') == 'none') {
        // MAIN_NAV를 flex로 설정 후 부드럽게 나타나게 합니다.
        $("#MAIN_NAV").css('display', 'flex').hide().fadeIn(700);
        $("#MAIN_Tag").fadeOut(0);
      } else {
        // MAIN_NAV를 부드럽게 사라지게 한 후 display를 none으로 설정합니다.
        $("#MAIN_NAV").fadeOut(0, function() {
          $(this).css('display', 'none');
        });
        $("#MAIN_Tag").css('display', 'flex').hide().fadeIn(700);
      }
    });
  });