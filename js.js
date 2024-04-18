var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
    document.body.className = 'body-state'+
        state;
    clearInterval(timer);

    if (state == 2) {
        timer = setInterval(function () {
            document.getElementById('countdown').
                innerHTML = 
            countdownNumber;
            countdownNumber = countdownNumber
                -1;
            if (countdownNumber <= 0) {
                changeState(3);
            };
        }, 1000);
    } else if (state == 3) {
        
    };
}


//kommentti========================================
var doCoolStuff = function () {
    var currentClassName = document.getElementById('cool').className;
//=================================================
    if (currentClassName == 'cool') {
        document.getElementById('cool').className = 'cool red';
    } else {
//change class name================================
        document.getElementById('cool').className 
    = 'cool';}
}
//=================================================
var sayMyName = function (name) {
    alert('My name is: '+name);
}
//=================================================
var car = {
    make: 'VW',
    type: 'Polo',
    color: 'blue',
    isTurnedOn: false,
    numberOfWheels: 4,
    seats: ['seat 1',
            'seat 2', 
            'seat 3',
            'seat 4'],
            turnOn: function () {
                this.isTurnedOn = true;
            },
            fly: function () {
                alert('fly');
            },
            switchCar: function (isOn) {
                console.log('turn car '+isOn);
                if (isOn == true) {
                    this.isTurnedOn = true;
                } else {
                    this.isTurnedOn = false;
                }
            }
};
console.log('Hello world');