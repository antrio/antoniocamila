$(function() {
  $(window).scroll(function(){
    var fixed = $(".navigation-item");
    var separator = $(".navigation-item-separator");
    var fixed_position = $(".navigation").offset().top;
    var fixed_height = $(".navigation").height();

    var toCross_position = $(".timeline").offset().top;
    var toCross_height = $(".timeline").height();

  if (fixed_position  < toCross_position) {
    fixed.removeClass('circled-white');
    separator.removeClass('navigation-item-separator-white');
  } else if (fixed_position > toCross_position + toCross_height) {
    fixed.removeClass('circled-white');
    separator.removeClass('navigation-item-separator-white');
  }else{
    fixed.addClass('circled-white');
    separator.addClass('navigation-item-separator-white');
  }

});
});
