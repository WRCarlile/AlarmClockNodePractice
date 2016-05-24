var Alarm = require('./alarm.js').Alarm;

$(document).ready(function(){
  var updateTime = null;

  var update = function () {
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

    var updateOutput = function () {
      console.log(updateTime);
      console.log(inputTime);
      if (updateTime === inputTime) {
          $('#output').text(newAlarm.set());
      } else {
          $('#output').text(newAlarm.set());
      }
    };

    updateOutput();
    setInterval(updateOutput, 1000);
  });
});
