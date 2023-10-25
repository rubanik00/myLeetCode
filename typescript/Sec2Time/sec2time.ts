function sec2time(timeInSeconds: number) {
  var pad = function (num: any, size: number) {
      return ("000" + num).slice(size * -1);
    },
    hours = Math.floor(timeInSeconds / 60 / 60),
    minutes = Math.floor(timeInSeconds / 60) % 60,
    seconds = Math.floor(timeInSeconds - minutes * 60),
    milliseconds = timeInSeconds.toString().slice(-3);

  return (
    pad(hours, 2) +
    ":" +
    pad(minutes, 2) +
    ":" +
    pad(seconds, 2) +
    ":" +
    pad(milliseconds, 2)
  );
}

console.log(sec2time(0));
