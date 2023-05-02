// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) =>
    [drivers[0], drivers[1]];

const returnLastTwoDrivers = (drivers)=> 
    [drivers[drivers.length -2], drivers[drivers.length -1]];
    
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
  return function(fare){ 
    return multiplier*fare}
}
function fareDoubler(a){
  return a*2;
}
function fareTripler(a){
  return a*3;
}
function selectDifferentDrivers(arrayOfDrivers, newFunction){
  return  newFunction(arrayOfDrivers)
}

