/** 
* @F fpc v1.0.0
* @F (c)2023 fxhxyz 
* @F MIT License
* @F github.com/fxhxyz4/fpc
*/


'use strict';

/**
  * Is a utility function that can be used to perform
  * various mathematical operations on arrays of numbers.
  *
  * @private
  * @param {Array} v
  * @param {Function} f
  * @return {Number}
 */
var basic;

basic = function(v, f) {
  if (!(v instanceof Array)) {
    throw new Error(`Typeof: ${typeof v}`);
  }
  return v.reduce(function(s, e) {
    if (typeof +e !== 'number') {
      return 0;
    }
    return f(s, e);
  });
};

var basic$1 = basic;

/**
  * This function performs the addition operation on the
  * elements of an array of numbers and returns their sum.
  *
  * @param {Array} v
  * @return {Number}
 */
var add;

add = function(v) {
  return basic$1(v, function(s, e) {
    return s + e;
  });
};

var add$1 = add;

/**
  * This function performs the division operation on the
  * elements of an array of numbers and returns their quotient.

  * @param {Array} v
  * @return {Number}
 */
var divide;

divide = function(v) {
  return basic$1(v, function(s, e) {
    return s / e;
  });
};

var divide$1 = divide;

/**
  * This function performs the multiplication operation on
  * the elements of an array of numbers and returns their product.
  *
  * @param {Array} v
  * @return {Number}
 */
var multiply;

multiply = function(v) {
  return basic$1(v, function(s, e) {
    return s * e;
  });
};

var multiply$1 = multiply;

/**
  * This function takes an array `o` as a parameter and returns
  * a new array where each element is raised to the power of 2.
  *
  * @param {Array} o
  * @return {Array} new array
 */
var power;

power = function(o) {
  var s;
  s = o.slice();
  return s.map(function(q) {
    return q ** 2;
  });
};

var power$1 = power;

/**
  * This function generates a random number
  * between 0 and 9 (inclusive) and returns it.
  *
  * @return {Number}
 */
var random1;

random1 = function() {
  return Math.floor(Math.random() * 10);
};

var random1$1 = random1;

/**
  * This function generates a random decimal number between 0 and 99
  * (inclusive) without using Math.floor and returns it.
  *
  * @return {Number}
 */
var random2;

random2 = function() {
  return Math.random() * 100;
};

var random2$1 = random2;

/**
  * This function generates a random decimal number between 0 and 99
  * (inclusive) with Math.floor and returns it.
  *
  * @return {Number}
 */
var random3;

random3 = function() {
  return Math.floor(Math.random() * 100);
};

var random3$1 = random3;

/**
  * This function generates a random decimal number between 0 and 999
  * (inclusive) without using Math.floor and returns it.
  *
  * @return {Number}
 */
var random4;

random4 = function() {
  return Math.random() * 1000;
};

var random4$1 = random4;

/**
  * This function generates a random decimal number between 0 and 999
  * (inclusive) with using Math.floor and returns it.
  *
  * @return {Number}
 */
var random5;

random5 = function() {
  return Math.floor(Math.random() * 1000);
};

var random5$1 = random5;

/**
  * Calculate the square root of each element in the input array.
  *
  * @param {Array} w
  * @return {Array} new array
 */
var squareRoot;

squareRoot = function(w) {
  var a;
  a = w.slice();
  return a.map(function(e) {
    return Math.sqrt(e);
  });
};

var squareRoot$1 = squareRoot;

/**
  * This function performs the subtraction operation on the
  * elements of an array of numbers and returns their difference.
  *
  * @param {Array} v
  * @return {Number}
 */
var subtract;

subtract = function(v) {
  return basic$1(v, function(s, e) {
    return s - e;
  });
};

var subtract$1 = subtract;

/**
  * @private
  * @param {Array} g
  * @param {Function} y
  * @return {Array} new array
 */
var floorCeilRound$1;

floorCeilRound$1 = function(g, y) {
  var c, f, i, len, p;
  if (!(g instanceof Array)) {
    throw new Error(`Typeof: ${typeof g}`);
  }
  c = new Array();
  for (i = 0, len = g.length; i < len; i++) {
    f = g[i];
    if (typeof +f !== 'number') {
      return 0;
    }
    p = y(f);
    c.push(p);
  }
  return c;
};

var floorCeilRound$2 = floorCeilRound$1;

/**
  * @param {Number} t
  * @return {Number}
 */
var ceil;

ceil = function(t) {
  return Math.ceil(t);
};

var ceil$1 = ceil;

/**
  * @param {Array} k
  * @return {Array} new array
 */
var ceil2;

ceil2 = function(k) {
  return floorCeilRound(k, function(k) {
    return Math.ceil(k);
  });
};

var ceil2$1 = ceil2;

/**
  * @param {Number} z
  * @return {Number}
 */
var round;

round = function(z) {
  return Math.round(z);
};

var round$1 = round;

/**
  * @param {Array} h
  * @return {Array} new array
 */
var round2;

round2 = function(h) {
  return floorCeilRound(h, function(h) {
    return Math.round(h);
  });
};

var round2$1 = round2;

/**
  * @return {Boolean} false
 */
var f;

f = function() {
  return false;
};

var f$1 = f;

/**
  * @param {Number} r
  * @return {Number}
 */
var floor;

floor = function(r) {
  return Math.floor(r);
};

var floor$1 = floor;

/**
  * @param {Array} n
  * @return {Array} new array
 */
var floor2;

floor2 = function(n) {
  return floorCeilRound(n, function(n) {
    return Math.floor(n);
  });
};

var floor2$1 = floor2;

/**
  * @private
  * @param {Array} r
  * @param {Number} h
  * @return {Array} new array
 */
var takeOrDrop;

takeOrDrop = function(r, h) {
  if (!(r instanceof Array)) {
    throw new Error(`Typeof: ${typeof r}`);
  }
  if (h >= 0) {
    return r.slice(0, r.length - h);
  } else {
    return r.slice(-h);
  }
};

var takeOrDrop$1 = takeOrDrop;

/**
  * @return {Boolean} true
 */
var t;

t = function() {
  return true;
};

var t$1 = t;

/**
  * @param {Array} b
  * @param {Number} t
  * @return {Array} new array
 */
var take;

take = function(b, t) {
  return takeOrDrop$1(b, t);
};

var take$1 = take;

/**
  * @param {Array} e
  * @param {Number} p
  * @return {Array} new array
 */
var drop;

drop = function(e, p) {
  return takeOrDrop$1(e, -p);
};

var drop$1 = drop;

/**
  * This function takes an array as input and returns
  * a new array with the elements in reverse order.
  *
  * @param {Array} o
  * @return {Array} new array
 */
var reverse;

reverse = function(o) {
  var t;
  t = o.slice().reverse();
  return t;
};

var reverse$1 = reverse;

/**
  * This function `some` takes an array `a` and a
  * string `w` as parameters and returns a boolean value.
  *
  * @param {Array} a
  * @param {String} w
  * @return {Boolean}
 */
var some;

some = function(a, w) {
  var i, j, len;
  if (!(a instanceof Array)) {
    throw new Error(`Typeof: ${typeof a}`);
  }
  for (j = 0, len = a.length; j < len; j++) {
    i = a[j];
    if (String(i)) {
      return true;
    }
  }
  return false;
};

var some$1 = some;

/**
  * This function `every` takes an array `l` and a string
  * `c` as parameters and returns a boolean value.
  *
  * @param {Array} l
  * @param {String} c
  * @return {Boolean}
 */
var every;

every = function(l, c) {
  var x;
  if (!(l instanceof Array)) {
    throw new Error(`Typeof: ${typeof l}`);
  }
  x = String(c);
  return l.every(function(e) {
    return e === x;
  });
};

var every$1 = every;

/**
  * highOrderFunc takes multiple arguments and returns a new array.
  * It iterates over each argument and checks if it is a function. If it is,
  * it calls the function and pushes the result into the new array.
  *
  * @param {Array} a
  * @return {Array} new array
 */
var highOrderFunc;

highOrderFunc = function(...a) {
  var e, i, len, r;
  r = new Array();
  for (i = 0, len = a.length; i < len; i++) {
    e = a[i];
    if (typeof e !== 'function') {
      throw new Error('Argument not a function');
    }
    r.push(e());
  }
  return r;
};

var highOrderFunc$1 = highOrderFunc;

var F;

F = {f: f$1, t: t$1, basic: basic$1, add: add$1, divide: divide$1, multiply: multiply$1, power: power$1, random1: random1$1, random2: random2$1, random3: random3$1, random4: random4$1, random5: random5$1, squareRoot: squareRoot$1, subtract: subtract$1, floorCeilRound: floorCeilRound$2, ceil: ceil$1, ceil2: ceil2$1, round: round$1, round2: round2$1, floor: floor$1, floor2: floor2$1, takeOrDrop: takeOrDrop$1, take: take$1, drop: drop$1, reverse: reverse$1, some: some$1, every: every$1, highOrderFunc: highOrderFunc$1};

var F$1 = F;

exports.F = F$1;
//# sourceMappingURL=fpc.cjs.map
