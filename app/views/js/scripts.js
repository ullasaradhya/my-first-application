var IDLE_TIMEOUT = 180; //seconds
var _idleSecondsTimer = null;
var _idleSecondsCounter = 0;

document.onclick = function() {
   _idleSecondsCounter = 0;    
};

document.onmousemove = function() {
  _idleSecondsCounter = 0;
};

document.onkeypress = function() {
_idleSecondsCounter = 0;
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

function comparePassword(){

    if (document.getElementById('password')===document.getElementById(confirm_password)){
        document.getElementById('message').innerHTML='password matched';
        document.getElementById('message').style.color='green';
    }
    else{
        document.getElementById('message').innerHTML='password did not match';
        document.getElementById('message').style.color='green';
    }

}





