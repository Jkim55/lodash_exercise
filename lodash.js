var _ = {};

/**************************************
 *************** ARRAYS ***************
 **************************************/

 // Returns the first element of an array.
_.first = function(array) {
   return array[0]
};

 // Returns the first n number of elements in an array.
_.take = function(array, n) {
  n = n || 1;
  return array.slice(0, n)
};

// Returns the last element of an array.
_.last = function(array) {
  if (array.length !== 0){
    return array[array.length - 1]
  }
};

// Returns the last n number of elements in an array.
_.takeRight = function(array, n) {
  n = n || 1;
  return array.slice(-n)
};

// Returns a new array with all falsey values removed.
// falsy values: false, null, 0, "", undefined, and NaN.
// Example:
// _.compact([0, 1, false, 2, '', 3]);
// → [1, 2, 3]
_.compact = function(array) {
  return array.filter(function(item) {
    if (item !== false){return item}
  })
};

// Returns a new array of elements in the first argument, but
// excludes any element found in the second argument.
// Example:
// _.difference([1, 2, 3], [4, 2]);
// → [1, 3]
_.difference = function(arrayOne, arrayTwo) {
  return arrayOne.filter(function (item) {
    return (arrayTwo.indexOf(item) === -1);
  })
}

// Returns element with minimum
// value in an array.
_.min = function(array) {
  return array.reduce(function(a, b) {
   return Math.min(a, b);
 })
}

// Returns element with maximum
// value in an array.
_.max = function(array) {
  return array.reduce(function(a, b) {
   return Math.max(a, b);
 })
};

// Returns either index of matched element or
// -1.
_.indexOf = function(array, el) {
  return array.findIndex(function (item){
    if(item === el){
      return item
    }
  })
};

/*************** BONUS ***************/
// Retuns a new array with elements in shuffled order.
_.shuffle = function(array) {
  var shuffledArr = []
  for(var i = array.length; i>0;i--){
    var randomIndex = Math.floor(Math.random * array.length)
    var valueHolder = array[i]
    shuffledArr.splice(randomIndex, 0, valueHolder)
  }
  return shuffledArr
};

/**************************************
************* COLLECTIONS *************
**************************************/
// Returns the length of a collection.
_.size = function(collection) {
  return collection.length || Object.keys(collection).length
};

// Iterates on each element of a collection and
// then returns the original collection.
_.forEach = function(collection, callback) {
 for(var i in collection){
  callback(collection[i], i, collection);
  }
};

// Iterates on each element of a collection and
// then returns a new array.
_.map = function(collection, callback) {
  var newArr = []
  for(var i in collection){
    newArr.push(callback(collection[i], i, collection))
  }
  return newArr
};

// Returns a new collection with filtered elements.
_.filter = function(collection, callback) {
  var newArr = []
  for(var i in collection){
    if (callback(collection[i], i, collection)){
      newArr.push(collection[i])
    }
  }
  return newArr
};

// Returns a new collection with unfiltered elements.
_.reject = function(collection, callback) {
  var newArr = []
  for(var i in collection){
    if (!callback(collection[i], i, collection)){
      newArr.push(collection[i])
    }
  }
  return newArr
};

/*************** BONUS ***************/
 // Returns n number of elements in a collection.
_.sample = function(collection, n) {
  var newArr = []
  while (n > 0){
    var count = collection.length || Object.keys(collection).length
    var randomIndex = Math.floor(Math.random() * count)
    newArr.push(collection[randomIndex])
    n--
  }
  return newArr
};

module.exports = _;
