var Alarm = require('./alarm.js').Alarm;

$(document).ready(function(){
  var updateTime = null;
  var inputTime = null;
  var update = function () {
    // date = moment(new Date());
    updateTime = $('#time').text(moment().format('h:mm ' + 'a'));
  };

  update();
  setInterval(update, 1000);

  $('#alarm').submit(function(event){
    event.preventDefault();
    var input = $('#alarmInput').val();
    var inputAMPM = $('#am-pm').val();
    var inputTime = input + " " + inputAMPM;
    var newAlarm = new Alarm(inputTime);
    $('#output').text(newAlarm.set());

  });
  console.log(updateTime);
  console.log(inputTime);

  if (updateTime === inputTime) {
      console.log(inputTime);

      $('#output').text(newAlarm.set());
  } else {
      $('#output').text(newAlarm.set());
  }

// $('#output').text(newAlarm.set());
});
