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

// PUSH - Modifies the array so that elemets are added to the back of the array//
Array.prototype.myPush = function(...args) {
    let arg_i = 0;
    let length = this.length; //Argument
    for ( let i = length; i < length + args.length;i++){ // For loop
        this[i] = args[arg_i]; // New index maches args
        arg_i++; // Increase by 1 to add next element
    }
    return this.length;
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

