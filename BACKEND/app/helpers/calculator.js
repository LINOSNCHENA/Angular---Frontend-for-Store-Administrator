// Returns addition of two numbers
exports.add = function (a, b) {
    return a+b;
}; 
 
// Returns difference of two numbers
exports.subtract = function (a, b) {
    return a-b;
}; 
 
// Returns product of two numbers
exports.multiply = function (a, b) {
    return a*b;
};

// Returns number of days
exports.getDeadline = function (inputDate) {
    var today = new Date();
    var purchaseDate = new Date(inputDate);
  
    var timeDifference = today.getTime() - purchaseDate.getTime();
    var daysDifference = timeDifference / (1000 * 3600 * 24);
  
    return daysDifference;
  };