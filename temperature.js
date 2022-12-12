// Gather required information from user
let userMetric = prompt("Which metric are you converting from; 'C', 'F' or 'K'?");
let userNum = prompt("Please input the NUMBER you would like to convert.")
let convertTo = prompt("Which metric are you converting to; 'C', 'F' or 'K'?");

// Checks if user selected C to convert from 
if (userMetric.toUpperCase() === 'C') {
    // Checks if user wants to convert to F or K
    // Same pattern follows in nested else if statements below
    if (convertTo.toUpperCase() === 'F') {
        CtoF = userNum * 9/5 + 32; 
        console.log(`${userNum}°C is ${CtoF}°F`)
    }
    else if (convertTo.toUpperCase() === 'K') {
        CtoK = userNum + 273.15; 
        console.log(`${userNum}°C is ${CtoK}K`)
    }
    else {
        alert(`You have picked an invalid metric '${convertTo}' to convert to! Please refresh the page and choose either 'F' or 'K'.`)
    }
}
// Checks if user selected F to convert from 
else if (userMetric.toUpperCase() === 'F') {
    if (convertTo.toUpperCase() === 'C') {
        FtoC = (userNum - 32) * 5/9; 
        console.log(`${userNum}°F is ${FtoC}°C`)
    }
    else if (convertTo.toUpperCase() === 'K') {
        FtoK = (userNum +459.67) * 5/9;  
        console.log(`${userNum}°F is ${FtoK}K`)
    }
    else {
        alert(`You have picked an invalid metric '${convertTo}' to convert to! Please refresh the page andchoose either 'C' or 'K'.`)
    }
}
// Checks if user selected K to convert from 
else if (userMetric.toUpperCase() === 'K') {
    if (convertTo.toUpperCase() === 'C') {
        KtoC = userNum - 273.15; 
        console.log(`${userNum}K is ${KtoC}°C`)
    }
    else if (convertTo.toUpperCase() === 'F') {
        KtoF = userNum * 9/5 - 459.67;  
        console.log(`${userNum}°F is ${KtoF}K`)
    }
    else {
        alert(`You have picked an invalid metric '${convertTo}' to convert to! Please refresh the page and choose either 'C' or 'F'.`)
    }
}
// Addresses any 'userMetric' input that is not C, F or, K
else {
    alert(`You have picked an invalid metric '${userMetric}' to convert from! Please refresh the page and choose either 'C', 'F' or 'K'.`)
}
