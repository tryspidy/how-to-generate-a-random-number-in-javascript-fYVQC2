// min value of the random number
var min = 5;

// max value of the random number
var max = 25;

// generate the random number
var rdm = (Math.random() * (max - min)) + min

// generate the random number without "."
var rdm = Math.round((Math.random() * (max - min)) + min)