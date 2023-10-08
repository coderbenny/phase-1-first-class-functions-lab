// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers(drivers){
    return drivers.slice(0, 2)
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fareMultiplier){
    return (fare) => fare * fareMultiplier
}

function fareDoubler(fare){
    return fare * 2
}

function fareTripler(fare){
    return fare * 3 
}

function selectDifferentDrivers(drivers, driverSelection){
    return driverSelection(drivers)
}
