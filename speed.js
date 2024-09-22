function calculateSpeed() {
    const distance = parseFloat(document.getElementById("inp-distance").value);
    const time = parseFloat(document.getElementById("input-time").value);
    const resultElement = document.getElementById("result");

    // Error checking
    let errorMessage = "";

    if (isNaN(distance) || distance <= 0) {
        errorMessage += "Please input a valid distance greater than zero. ";
    }
    if (isNaN(time) || time <= 0) {
        errorMessage += "Please input a valid time greater than zero.";
    }
    if (errorMessage) {
        resultElement.textContent = errorMessage;
        return;
    }

    // Calculate speed
    const speed = (distance / time).toFixed(2);
    resultElement.textContent = `Dear User, Your Result is: ${speed} units/time`;
}
