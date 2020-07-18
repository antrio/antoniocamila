$(function() {
  $(window).scroll(function(){
    var fixed = $(".navigation-item");
    var separator = $(".navigation-item-separator");
    var fixed_position = $(".navigation").offset().top;
    var fixed_height = $(".navigation").height();

    var toCross_position = $(".timeline").offset().top;
    var toCross_height = $(".timeline").height() + 100;

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

function countDown(second,endMinute,endHour,endDay,endMonth,endYear) {
  var now = new Date();
  second = (arguments.length == 1) ? second + now.getSeconds() : second;
  endYear =  typeof(endYear) != 'undefined' ?  endYear : now.getFullYear();
  endMonth = endMonth ? endMonth - 1 : now.getMonth();  //numero del mese cominciando da 0 esempio 03- marzo
  endDay = typeof(endDay) != 'undefined' ? endDay :  now.getDate();
  endHour = typeof(endHour) != 'undefined' ?  endHour : now.getHours();
  endMinute = typeof(endMinute) != 'undefined' ? endMinute : now.getMinutes();
  var endDate = new Date(endYear,endMonth,endDay,endHour,endMinute,second+1);
  var interval = setInterval(function() {
    var time = endDate.getTime() - now.getTime();
    if (time < 0) {
      document.getElementById('mytimer').innerHTML = '<div>¡NOS CASAMOS!</div>'
    } else {
      var days = Math.floor(time / 864e5);
      var hours = Math.floor(time / 36e5) % 24;
      var minutes = Math.floor(time / 6e4) % 60;
      var seconds = Math.floor(time / 1e3) % 60;
      var text='</div><div>'
      var end='</div></div><div style="float:left;">,</div>'
      document.getElementById('mytimer').innerHTML = '<div> </div>'+
        days+text+'days'+end+hours+text+'hours'+end+
        minutes+'minutes'+text+end+seconds+text+'seconds' + '<div></div>';
    }
    now.setSeconds(now.getSeconds() + 1);
  }, 1000);
}
countDown(0,30,10,18,7,2020);
