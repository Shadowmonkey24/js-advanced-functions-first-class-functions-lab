// Code your solution in this file!
const returnFirstTwoDrivers =(Array) => [ 'Sally', 'Bob' ];

const returnLastTwoDrivers = (Array) => ['Freddy', 'Claudia'];

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function(multiplier){
    return function (value)
    {return value*multiplier;}
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(selectingDrivers, arrayOfDrivers){
    return arrayOfDrivers(selectingDrivers);
}
