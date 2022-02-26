  function millisToMinutesAndSeconds(millis) {
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return (seconds < 10 ? "0" : "") + seconds;
  }

  function clock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    let cvsecond = now.setSeconds(now.getSeconds() + 70);
    const seconds = millisToMinutesAndSeconds(cvsecond);
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
    if (hours == 0 && seconds == 1) {
      clock_day(now);
    }
  }
  setInterval("clock()", 1000);
  function clock_day() {
    const now = new Date();
    const date = now.getDay();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    document.getElementById("date").innerHTML = date;
    document.getElementById("day").innerHTML = day;
    document.getElementById("month").innerHTML = month;
    document.getElementById("year").innerHTML = year;
  }
  clock_day();
