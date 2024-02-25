/**
* @F fpjc v0.0.1
* @F (c)2024 fxhxyz
* @F MIT License
* @F github.com/fxhxyz4/fpjc
*/

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.F = {}));
})(this, (function (exports) { 'use strict';

  // =======================================================
  /**
    * @return {Boolean} true
   */
  var F, add, basic, ceil, ceil2, divide, drop, every, f, floor, floor2, floorCeilRound, highOrderFunc, isArray, isNaN, isNumber, isObject, isString, isUndefined, multiply, power, random1, random2, random3, random4, random5, reverse, round, round2, some, squareRoot, subtract, t, take, takeOrDrop;

  t = function() {
    return true;
  };

  // =======================================================
  /**
    * @return {Boolean} false
   */
  f = function() {
    return false;
  };

  // =======================================================
  /**
    * isArray
    *
    * @param {Array} x
    * @return {Boolean}
   */
  isArray = function(x) {
    if (!(Array.isArray(x) || x instanceof Array)) {
      return f();
    }
    return t();
  };

  // =======================================================
  /**
    * isString
    *
    * @param {String} l
    * @return {Boolean}
   */
  isString = function(l) {
    if (!(typeof l === "string" || l instanceof String)) {
      return f();
    }
    return t();
  };

  // =======================================================
  /**
    * isUndefined
    *
    * @return {Boolean}
   */
  isUndefined = function(x) {
    if (typeof x !== "undefined") {
      return f();
    }
    return t();
  };

  // =======================================================
  /**
    * isObject
    *
    * @return {Boolean}
   */
  isObject = function(w) {
    if (Object.prototype.toString.call(w) !== "[object Object]") {
      return f();
    }
    return t();
  };

  // =======================================================
  /**
    * isNumber
    *
    * @return {Boolean}
   */
  isNumber = function(k) {
    if (typeof +k !== 'number') {
      return f();
    }
    return t();
  };

  // =======================================================
  /**
    * isNaN
    *
    * @return {Boolean}
   */
  isNaN = function(o) {
    if (!isNaN(+o)) {
      return f();
    }
    return t();
  };

  // =======================================================
  /**
    * Is a utility function that can be used to perform
    * various mathematical operations on arrays of numbers.
    *
    * @private
    * @param {Array} v
    * @param {Function} f
    * @return {Number}
   */
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

  // =======================================================
  /**
    * This function performs the addition operation on the
    * elements of an array of numbers and returns their sum.
    *
    * @param {Array} v
    * @return {Number}
   */
  add = function(v) {
    return basic(v, function(s, e) {
      return s + e;
    });
  };

  // =======================================================
  /**
    * This function performs the division operation on the
    * elements of an array of numbers and returns their quotient.

    * @param {Array} v
    * @return {Number}
   */
  divide = function(v) {
    return basic(v, function(s, e) {
      return s / e;
    });
  };

  // =======================================================
  /**
    * This function performs the multiplication operation on
    * the elements of an array of numbers and returns their product.
    *
    * @param {Array} v
    * @return {Number}
   */
  multiply = function(v) {
    return basic(v, function(s, e) {
      return s * e;
    });
  };

  // =======================================================
  /**
    * This function performs the subtraction operation on the
    * elements of an array of numbers and returns their difference.
    *
    * @param {Array} v
    * @return {Number}
   */
  subtract = function(v) {
    return basic(v, function(s, e) {
      return s - e;
    });
  };

  // =======================================================
  /**
    * This function takes an array `o` as a parameter and returns
    * a new array where each element is raised to the power of 2.
    *
    * @param {Array} o
    * @return {Array} new array
   */
  power = function(o) {
    var s;
    s = o.slice();
    return s.map(function(q) {
      return q ** 2;
    });
  };

  // =======================================================
  /**
    * Calculate the square root of each element in the input array.
    *
    * @param {Array} w
    * @return {Array} new array
   */
  squareRoot = function(w) {
    var a;
    a = w.slice();
    return a.map(function(e) {
      return Math.sqrt(e);
    });
  };

  // =======================================================
  /**
    * This function generates a random number
    * between 0 and 9 (inclusive) and returns it.
    *
    * @return {Number}
   */
  random1 = function() {
    return Math.floor(Math.random() * 10);
  };

  // =======================================================
  /**
    * This function generates a random decimal number between 0 and 99
    * (inclusive) without using Math.floor and returns it.
    *
    * @return {Number}
   */
  random2 = function() {
    return Math.random() * 100;
  };

  // =======================================================
  /**
    * This function generates a random decimal number between 0 and 99
    * (inclusive) with Math.floor and returns it.
    *
    * @return {Number}
   */
  random3 = function() {
    return Math.floor(Math.random() * 100);
  };

  // =======================================================
  /**
    * This function generates a random decimal number between 0 and 999
    * (inclusive) without using Math.floor and returns it.
    *
    * @return {Number}
   */
  random4 = function() {
    return Math.random() * 1000;
  };

  // =======================================================
  /**
    * This function generates a random decimal number between 0 and 999
    * (inclusive) with using Math.floor and returns it.
    *
    * @return {Number}
   */
  random5 = function() {
    return Math.floor(Math.random() * 1000);
  };

  // =======================================================
  /**
    * @private
    * @param {Array} g
    * @param {Function} y
    * @return {Array} new array
   */
  floorCeilRound = function(g, y) {
    var c, j, len, p;
    if (!(g instanceof Array)) {
      throw new Error(`Typeof: ${typeof g}`);
    }
    c = new Array();
    for (j = 0, len = g.length; j < len; j++) {
      f = g[j];
      if (typeof +f !== 'number') {
        return 0;
      }
      p = y(f);
      c.push(p);
    }
    return c;
  };

  // =======================================================
  /**
    * @param {Number} r
    * @return {Number}
   */
  floor = function(r) {
    return Math.floor(r);
  };

  // =======================================================
  /**
    * @param {Array} n
    * @return {Array} new array
   */
  floor2 = function(n) {
    return floorCeilRound(n, function(n) {
      return Math.floor(n);
    });
  };

  // =======================================================
  /**
    * @param {Number} t
    * @return {Number}
   */
  ceil = function(t) {
    return Math.ceil(t);
  };

  // =======================================================
  /**
    * @param {Array} k
    * @return {Array} new array
   */
  ceil2 = function(k) {
    return floorCeilRound(k, function(k) {
      return Math.ceil(k);
    });
  };

  // =======================================================
  /**
    * @param {Number} z
    * @return {Number}
   */
  round = function(z) {
    return Math.round(z);
  };

  // =======================================================
  /**
    * @param {Array} h
    * @return {Array} new array
   */
  round2 = function(h) {
    return floorCeilRound(h, function(h) {
      return Math.round(h);
    });
  };

  // =======================================================
  /**
    * @private
    * @param {Array} r
    * @param {Number} h
    * @return {Array} new array
   */
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

  // =======================================================
  /**
    * @param {Array} e
    * @param {Number} p
    * @return {Array} new array
   */
  drop = function(e, p) {
    return takeOrDrop(e, -p);
  };

  // =======================================================
  /**
    * @param {Array} b
    * @param {Number} t
    * @return {Array} new array
   */
  take = function(b, t) {
    return takeOrDrop(b, t);
  };

  // =======================================================
  /**
    * highOrderFunc takes multiple arguments and returns a new array.
    * It iterates over each argument and checks if it is a function. If it is,
    * it calls the function and pushes the result into the new array.
    *
    * @param {Array} a
    * @return {Array} new array
   */
  highOrderFunc = function(...a) {
    var e, j, len, r;
    r = new Array();
    for (j = 0, len = a.length; j < len; j++) {
      e = a[j];
      if (typeof e === 'function') {
        throw new Error('Argument not a function');
      }
      r.push(e());
    }
    return r;
  };

  // =======================================================
  /**
    * This function `every` takes an array `l` and a string
    * `c` as parameters and returns a boolean value.
    *
    * @param {Array} l
    * @param {String} c
    * @return {Boolean}
   */
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

  // =======================================================
  /**
    * This function `some` takes an array `a` and a
    * string `w` as parameters and returns a boolean value.
    *
    * @param {Array} a
    * @param {String} w
    * @return {Boolean}
   */
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

  // =======================================================
  /**
    * This function takes an array as input and returns
    * a new array with the elements in reverse order.
    *
    * @param {Array} o
    * @return {Array} new array
   */
  reverse = function(o) {
    t = o.slice().reverse();
    return t;
  };

  // =======================================================
  F = {t, f, isArray, isString, isUndefined, isObject, isNumber, isNaN, basic, add, divide, multiply, power, random1, random2, random3, random4, random5, squareRoot, subtract, floorCeilRound, ceil, ceil2, round, round2, floor, floor2, takeOrDrop, take, drop, reverse, some, every, highOrderFunc};

  var F$1 = F;

  exports.default = F$1;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
