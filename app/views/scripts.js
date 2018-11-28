var IDLE_TIMEOUT = 180; //seconds
var _idleSecondsTimer = null;
var _idleSecondsCounter = 0;

document.onclick = function() {
//    _idleSecondsCounter = 0;    
};

document.onmousemove = function() {
  //  _idleSecondsCounter = 0;
};

document.onkeypress = function() {
    //_idleSecondsCounter = 0;
};

_idleSecondsTimer = window.setInterval(CheckIdleTime, 1000);

function CheckIdleTime() {
    _idleSecondsCounter++;
    document.getElementById("SecondsUntilExpire");    
    document.getElementById('empid');
   if (_idleSecondsCounter >= IDLE_TIMEOUT) {
       window.clearInterval(_idleSecondsTimer);
       alert("Time expired!");
       document.location.href = "logout.html";
   }
}

