var IDLE_TIMEOUT = 10; //seconds
var _idleSecondsTimer = null;
var _idleSecondsCounter = 0;

document.onclick = function() {
//    _idleSecondsCounter = 0;
    alert("Button Clicked!!!!");
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
    var oPanel = document.getElementById("SecondsUntilExpire");
    if (oPanel)
        oPanel.innerHTML = (IDLE_TIMEOUT - _idleSecondsCounter) + "";
   if (_idleSecondsCounter >= IDLE_TIMEOUT) {
       window.clearInterval(_idleSecondsTimer);
       alert("Time expired!");
       document.location.href = "logout.html";
   }
}

