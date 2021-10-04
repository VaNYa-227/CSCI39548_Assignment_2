// FOR EACH - For each array element it runs the function//
Array.prototype.myEach = function(callbackFn) {
    for (let i = 0; i < this.length; i++){ // For loop
        if(this[i] === undefined) continue; // Will skip if undefined
        callbackFn(this[i], i, this); // Fucntion call 
    }
};

// MAP //
Array.prototype.myMap = function() {

};

// FILTER //
Array.prototype.myFilter = function() {

};

// SOME //
Array.prototype.mySome = function() {

};

// EVERY //
Array.prototype.myEvery = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function() {

};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};

