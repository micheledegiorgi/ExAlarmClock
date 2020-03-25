function Alarm() {
  if (CurrentTime.value != null && AlarmTime.value != null)
    if (CurrentTime.value == AlarmTime.value)
      Audio.play();
}

function EventSetTime() {
  try {
    Hour = CurrentHour.value;
    Minutes = CurrentMinutes.value;
    if (Hour > 23 || Minutes > 59) {
      alert("Error: Insert a value between 00 and 23.");
      CurrentHour.value = "";
      CurrentMinutes.value = "";
      return;
    } else if (Hour < 0 || Minutes < 0) {
      alert("Error: Insert a value between 00 and 23.");
      CurrentHour.value = "";
      CurrentMinutes.value = "";
      return;
    } else if (Hour == "" || Minutes == "") {
      alert("Error: One or more fields are empty! Insert a value between 00 and 23.");
      CurrentHour.value = "";
      CurrentMinutes.value = "";
      return;
    } else {
      CurrentTime.value = Hour + ":" + Minutes;
      Alarm();
    }
  } catch (e) {
    alert("EventSetTime" + e);
  }
}

function EventSetAlarm() {
  try {
    if (AlarmHour.value > 23 || AlarmMinutes.value > 59) {
      alert("Error: Insert a value between 00 and 23.");
      AlarmHour.value = "";
      AlarmMinutes.value = "";
      return;
    } else if (AlarmHour.value < 0 || AlarmMinutes.value < 0) {
      alert("Error: Insert a value between 00 and 23.");
      AlarmHour.value = "";
      AlarmMinutes.value = "";
      return;
    } else if (AlarmHour.value == "" || AlarmMinutes.value == "") {
      alert("Error: One or more fields are empty! Insert a value between 00 and 23.");
      AlarmHour.value = "";
      AlarmMinutes.value = "";
      return;
    } else {
      AlarmTime.value = AlarmHour.value + ":" + AlarmMinutes.value;
      Alarm();
    }
  } catch (e) {
    alert("EventSetAlarm" + e);
  }
}

function EventStopAlarm() {
  Audio.pause();
  Audio.currentTime = 0;
}

function EventAddMinute() {
  try {
    Hour = Number(Hour);
    Minutes = Number(Minutes);
    if (Minutes == 59) {
      if (Hour == 23) {
        Hour = 0;
        Minutes = 0;
        CurrentTime.value = "0" + Hour + ":" + "0" + Minutes;
      } else {
        Hour++;
        Minutes = 0;
        if (Hour < 10)
          CurrentTime.value = "0" + Hour + ":" + "0" + Minutes;
        else
          CurrentTime.value = Hour + ":" + "0" + Minutes;
      }
    } else {
      Minutes++;
      if (Hour < 10) {
        if (Minutes < 10)
          CurrentTime.value = "0" + Hour + ":" + "0" + Minutes;
        else
          CurrentTime.value = "0" + Hour + ":" + Minutes;
      } else {
        if (Minutes < 10)
          CurrentTime.value = Hour + ":" + "0" + Minutes;
        else
          CurrentTime.value = Hour + ":" + Minutes;
      }
    }
    Alarm();
  } catch (e) {
    alert("AddMinute" + e);
  }
}

var CurrentHour;
var CurrentMinutes;
var SetTime;
var AlarmHour;
var AlarmMinutes;
var SetAlarm;
var AddMinute;
var CurrentTime;
var AlarmTime;
var StopAlarm;
var Audio = new Audio('alarm.mp3');

// State Var
var Hour;
var Minutes;

function LoadManager() {
  try {
    CurrentHour = document.getElementById("CurrentHour");
    CurrentMinutes = document.getElementById("CurrentMinutes");
    SetTime = document.getElementById("SetTime");
    AlarmHour = document.getElementById("AlarmHour");
    AlarmMinutes = document.getElementById("AlarmMinutes");
    SetAlarm = document.getElementById("SetAlarm");
    AddMinute = document.getElementById("AddMinute");
    CurrentTime = document.getElementById("CurrentTime");
    AlarmTime = document.getElementById("AlarmTime");
    StopAlarm = document.getElementById("StopAlarm");

    CurrentHour.value = "";
    CurrentMinutes.value = "";
    AlarmHour.value = "";
    AlarmMinutes.value = "";
    CurrentTime.value = "";
    AlarmTime.value = "";

    SetTime.onclick = EventSetTime;
    SetAlarm.onclick = EventSetAlarm;
    AddMinute.onclick = EventAddMinute;
    StopAlarm.onclick = EventStopAlarm;

    // Enter key press setting
    CurrentHour.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        EventSetTime();
      }
    });

    CurrentMinutes.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        EventSetTime();
      }
    });

    AlarmHour.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        EventSetAlarm();
      }
    });

    AlarmMinutes.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        EventSetAlarm();
      }
    });

    SetTime.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        EventSetTime();
      }
    });

    SetAlarm.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        EventSetAlarm();
      }
    });

    AddMinute.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        EventAddMinute();
      }
    });

    StopAlarm.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        EventStopAlarm();
      }
    });

  } catch (e) {
    alert("LoadManager" + e);
  }
}

window.onload = LoadManager;
