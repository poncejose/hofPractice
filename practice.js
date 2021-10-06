debugger;
// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {

  var count = 0;

  _.each(numbers, function(number, index) {
    if (number % 5 === 0) {
      count += 1;
    }
  });

  return count;

};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {

  fruits = _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  });

  return fruits;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {

  fruits = _.filter(fruits, function(fruit) {
    return fruit[0] === letter;
  });

  return fruits;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {

  var justCookies = _.filter(desserts, function(dessert) {
    return dessert.type === 'cookie';
  });

  return justCookies;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {

  var productPrices = [];

  var totalPrice;

  _.each(products, function(product) {
    productPrices.push(product.price);

    totalPrice = _.reduce(productPrices, function(accumulator, number) {
      return accumulator + number;
    });

  });

  return totalPrice;

};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {

  var dessertTypes = _.map(desserts, function(dessert) {
    return dessert.type;
  });

  var countsObj = {};

  var iteratedTypes = _.each(dessertTypes, function (type) {
    if (countsObj[type] === undefined) {
      countsObj[type] = 1;
    } else {
      countsObj[type]++;
    }
  });
// reduce func below maybe doesn't do anything
  var combined = _.reduce(dessertTypes, function (arr, reducer) {
    return arr + reducer;
  });

  return countsObj;

};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var filtered = _.filter(movies, function(movie) {
    return movie.releaseYear >= 1990 && movie.releaseYear <= 2000;
  });

  var ninetiesList = [];

  var reducer = _.reduce(filtered, function (arr, movie) {
    return arr + movie.title;
  });

  ninetiesList.push(reducer);

  return ninetiesList;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {

  var filtered = _.filter(movies, function(movie) {
    return movie.runtime < timeLimit;
  });

  if (filtered.length === 0) {
    return false;
  }

  var reducer = _.reduce(filtered, function(movie) {
    if (filtered.length > 0) {
      return true;
    }
  });

  return reducer;
};

/*
 *
 *  _.map
 *
 */

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to two places.
/* example output:
  var salePrices = applyCoupon(grocery, 0.20);
  [
    {
      id: 1,
      product: 'Pork - Loin, Boneless',
      price: 8.63
      salePrice: 6
    }
  ];
*/
var applyCoupon = function(grocery, coupon) {

  var saleArray = _.map(grocery, function(item) {
    return (item.price * (1 - coupon)).toFixed(2);
  });

  var newObj = _.each(grocery, function(item) {
    item.salePrice = saleArray[_.indexOf(grocery, item)];
  });

  return grocery;

};

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {

  var iterated = _.map(desserts, function(dessert) {
    if (_.indexOf(dessert.ingredients, 'flour') >= 0) {
      dessert.glutenFree = false;
    } else {
      dessert.glutenFree = true;
    }
  });

  return desserts;
};