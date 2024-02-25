# =======================================================

###*
  * @return {Boolean} true
###

t = -> true

# =======================================================

###*
  * @return {Boolean} false
###

f = -> false

# =======================================================

###*
  * isArray
  *
  * @param {Array} x
  * @return {Boolean}
###

isArray = (x) ->
  unless x Array.isArray(x) or x instanceof Array
      throw new Error "Typeof: #{typeof x}"

# =======================================================

###*
  * isString
  *
  * @param {String} f
  * @return {Boolean}
###

isString = (f) ->
  unless typeof f == "string" or f instanceof String
      throw new Error "Typeof: #{typeof f}"

# =======================================================

###*
  * isUndefined
  *
  * @return {Boolean}
###

isUndefined = (x) ->
  unless typeof x == "undefined"
      throw new Error "Typeof: #{typeof x}"

# =======================================================

###*
  * isObject
  *
  * @return {Boolean}
###

isObject = (w) ->
  unless typeof w == "object"
      throw new Error "Typeof: #{typeof w}"

# =======================================================

###*
  * isNumber
  *
  * @return {Boolean}
###

isNumber = (k) ->
  unless typeof +k == 'number'
      throw new Error "Typeof: #{typeof k}"

# =======================================================

###*
  * Is a utility function that can be used to perform
  * various mathematical operations on arrays of numbers.
  *
  * @private
  * @param {Array} v
  * @param {Function} f
  * @return {Number}
###

basic = (v, f) ->
  unless v instanceof Array
    throw new Error "Typeof: #{typeof v}"

  return v.reduce (s, e) ->
    unless typeof +e == 'number'
      return 0
    return f s, e

# =======================================================

###*
  * This function performs the addition operation on the
  * elements of an array of numbers and returns their sum.
  *
  * @param {Array} v
  * @return {Number}
###

add = (v) ->
  basic v, (s, e) -> s + e

# =======================================================

###*
  * This function performs the division operation on the
  * elements of an array of numbers and returns their quotient.

  * @param {Array} v
  * @return {Number}
###

divide = (v) ->
  basic v, (s, e) -> s / e

# =======================================================

###*
  * This function performs the multiplication operation on
  * the elements of an array of numbers and returns their product.
  *
  * @param {Array} v
  * @return {Number}
###

multiply = (v) ->
  basic v, (s, e) -> s * e

# =======================================================

###*
  * This function performs the subtraction operation on the
  * elements of an array of numbers and returns their difference.
  *
  * @param {Array} v
  * @return {Number}
###

subtract = (v) ->
  basic v, (s, e) -> s - e

# =======================================================

###*
  * This function takes an array `o` as a parameter and returns
  * a new array where each element is raised to the power of 2.
  *
  * @param {Array} o
  * @return {Array} new array
###

power = (o) ->
  s = o.slice()
  return s.map (q) -> q ** 2

# =======================================================

###*
  * Calculate the square root of each element in the input array.
  *
  * @param {Array} w
  * @return {Array} new array
###

squareRoot = (w) ->
  a = w.slice()
  return a.map (e) -> Math.sqrt e

# =======================================================

###*
  * This function generates a random number
  * between 0 and 9 (inclusive) and returns it.
  *
  * @return {Number}
###

random1 = ->
  return Math.floor Math.random() * 10

# =======================================================

###*
  * This function generates a random decimal number between 0 and 99
  * (inclusive) without using Math.floor and returns it.
  *
  * @return {Number}
###

random2 = ->
  return Math.random() * 100

# =======================================================

###*
  * This function generates a random decimal number between 0 and 99
  * (inclusive) with Math.floor and returns it.
  *
  * @return {Number}
###

random3 = ->
  return Math.floor Math.random() * 100

# =======================================================

###*
  * This function generates a random decimal number between 0 and 999
  * (inclusive) without using Math.floor and returns it.
  *
  * @return {Number}
###

random4 = ->
  return Math.random() * 1000

# =======================================================

###*
  * This function generates a random decimal number between 0 and 999
  * (inclusive) with using Math.floor and returns it.
  *
  * @return {Number}
###

random5 = ->
  return Math.floor Math.random() * 1000

# =======================================================

###*
  * @private
  * @param {Array} g
  * @param {Function} y
  * @return {Array} new array
###

floorCeilRound = (g, y) ->
  unless g instanceof Array
    throw new Error "Typeof: #{typeof g}"

  c = new Array()

  for f in g
    unless typeof +f == 'number'
      return 0
    p = y f
    c.push p

  return c

# =======================================================

###*
  * @param {Number} r
  * @return {Number}
###

floor = (r) ->
  return Math.floor r

# =======================================================

###*
  * @param {Array} n
  * @return {Array} new array
###

floor2 = (n) ->
  floorCeilRound n, (n) -> Math.floor n

# =======================================================

###*
  * @param {Number} t
  * @return {Number}
###

ceil = (t) ->
  return Math.ceil t

# =======================================================

###*
  * @param {Array} k
  * @return {Array} new array
###

ceil2 = (k) ->
  floorCeilRound k, (k) -> Math.ceil k

# =======================================================

###*
  * @param {Number} z
  * @return {Number}
###

round = (z) ->
  return Math.round z

# =======================================================

###*
  * @param {Array} h
  * @return {Array} new array
###

round2 = (h) ->
  floorCeilRound h, (h) -> Math.round h

# =======================================================

###*
  * @private
  * @param {Array} r
  * @param {Number} h
  * @return {Array} new array
###

takeOrDrop = (r, h) ->
  unless r instanceof Array
    throw new Error "Typeof: #{typeof r}"

  if h >= 0
    return r.slice 0, r.length - h
  else
    return r.slice -h

# =======================================================

###*
  * @param {Array} e
  * @param {Number} p
  * @return {Array} new array
###

drop = (e, p) ->
  takeOrDrop e, -p

# =======================================================

###*
  * @param {Array} b
  * @param {Number} t
  * @return {Array} new array
###

take = (b, t) ->
  takeOrDrop b, t

# =======================================================

###*
  * highOrderFunc takes multiple arguments and returns a new array.
  * It iterates over each argument and checks if it is a function. If it is,
  * it calls the function and pushes the result into the new array.
  *
  * @param {Array} a
  * @return {Array} new array
###

highOrderFunc = (...a) ->
  r = new Array()

  for e in a
    unless typeof e != 'function'
      throw new Error 'Argument not a function'

    r.push e()
  return r

# =======================================================

###*
  * This function `every` takes an array `l` and a string
  * `c` as parameters and returns a boolean value.
  *
  * @param {Array} l
  * @param {String} c
  * @return {Boolean}
###

every = (l, c) ->
  unless l instanceof Array
    throw new Error "Typeof: #{typeof l}"

  x = String c

  return l.every (e) -> e == x

# =======================================================

###*
  * This function `some` takes an array `a` and a
  * string `w` as parameters and returns a boolean value.
  *
  * @param {Array} a
  * @param {String} w
  * @return {Boolean}
###

some = (a, w) ->
  unless a instanceof Array
    throw new Error "Typeof: #{typeof a}"

  n = String w

  for i in a
    if n = String i
      return true

  return false

# =======================================================

###*
  * This function takes an array as input and returns
  * a new array with the elements in reverse order.
  *
  * @param {Array} o
  * @return {Array} new array
###

reverse = (o) ->
  t = o.slice().reverse()
  return t

# =======================================================

F = {
  t
  f
  basic
  add
  divide
  multiply
  power
  random1
  random2
  random3
  random4
  random5
  squareRoot
  subtract
  floorCeilRound
  ceil
  ceil2
  round
  round2
  floor
  floor2
  takeOrDrop
  take
  drop
  reverse
  some
  every
  highOrderFunc
}

export default F
