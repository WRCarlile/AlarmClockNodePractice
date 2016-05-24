exports.Alarm = function(time){
  this.time = time;
};

exports.Alarm.prototype.set = function(){
  console.log(moment().format('h:mm a'));
  console.log(this.time);

  // var updateAlarm = function () {
  //   updateAlarm = moment().format('h:mm:ss a'));
  // };

  if (moment().format('h:mm a') === this.time) {
    return "Alarm!";
  } else {
    // updateAlarm();
    // setInterval(updateAlarm, 1000);
    return "Wait for it";
  }
};
