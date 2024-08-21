function Calculate(distance,time){
    var distance= parseFloat(document.getElementById("distance").value);
    var time= parseFloat(document.getElementById("time").value);
    var speed = distance / time ;

    var message;
            if (speed > 100) {
                message = `Too Fast! Your speed is ${speed.toFixed(2)} km/hour. This is calculated by dividing the distance (${distance} km) by the time (${time} hours).`;
            } else if (speed < 10) {
                message = `Too Slow! Your speed is ${speed.toFixed(2)} km/hour. This is calculated by dividing the distance (${distance} km) by the time (${time} hours).`;
            } else {
                message = `Nice Speed! Your speed is ${speed.toFixed(2)} km/hour. This is calculated by dividing the distance (${distance} km) by the time (${time} hours).`;
            }


document.getElementById('result').innerHTML = message;     
    }