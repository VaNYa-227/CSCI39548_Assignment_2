// FOR EACH - For each array element it runs the function//
Array.prototype.myEach = function(callbackFn) {
    for (let i = 0; i < this.length; i++){ // For loop
        if(this[i] === undefined) continue; // Will skip if undefined
        callbackFn(this[i], i, this); // Fucntion call 
    }
};

// MAP - Will create new array filled with the elements from call array//
Array.prototype.myMap = function(callbackFn) {
    const newNumber = [];
    for( let i = 0; i < this.length; i++){ // For loop
        if(this[i] === undefined) {continue;} // If undefined
        newNumber[i] = callbackFn(this[i],i, this); // Put new values in the array
    }
    return newNumber;
};

// FILTER - Makes new array with the elemets that pass the through the filter//
Array.prototype.myFilter = function(callbackFn) {
    const newArray = [];
    for( let i = 0; i < this.length; i++){ // For loop
        if(this[i] === undefined) {continue;} // If undefined
        if(callbackFn(this[i],i, this)){ // If OK add to array
            newArray.push(this[i]); // Pushes
        }
    }
    return newArray;
};

// SOME - Checks if an element in the array passes the condition//
Array.prototype.mySome = function(callbackFn) {
    for( let i = 0; i < this.length; i++){ // For loop
        if(this[i] === undefined) {continue;} // If undefined
        if(callbackFn(this[i],i, this)) return true; // True if pass False if fail
    }
    return false;
};

// EVERY - Checks if all elements in the array pass the condition//
Array.prototype.myEvery = function(callbackFn) {
    for( let i = 0; i < this.length; i++){ // For loop
        if(this[i] === undefined) {continue;} // If undefined
        if(callbackFn(this[i],i, this) === false) {return false;} // If one does not pass
    }
    return true;
};

// REDUCE - For each element in the array it invokes the callback updating the accumulator at each step//
Array.prototype.myReduce = function(callbackFn) {
    let Total = 0;
    let a = 0;
    for(let i = 0; i< this.length; i++){ // For loop
        Total += callbackFn(a,this[i],i, this); // Total
    }
    return Total;
};

// INCLUDES - Checks if an array has a specific element//
Array.prototype.myIncludes = function(arg1, arg2=0) { // Not callback
    for( let i = arg2; i < this.length; i++){ // For loop index start
        if(this[i] === undefined) {continue;} // If undefined
         if(this[i] === arg1) return true;  // If has then true
    }
    return false;
};

// INDEXOF - Checks the index of the given elemet in the array//
Array.prototype.myIndexOf = function(arg1, arg2=0) {
    for( let i = arg2; i < this.length; i++){ // For loop
        if(this[i] === undefined) {continue;} // If undefined
        if(arg1 === this[i]) {return i;} // Returns index
    }
    return -1; //If does not exist
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

