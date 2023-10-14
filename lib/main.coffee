###
  @ fpcoffee v1
  @ 2023 fxhxyz
  @ MIT license
###

{ log, err, warn, info } = require './utils/console'

#---------------------#
### @Array @methods ###
#--------------------=#

###
  @private function
  @param {Array} r - source array
  @param {Number} h - index
  @returns {Array} - new array
###
takeOrDrop = (r, h) ->
  unless r instanceof Array
    return err "Typeof: #{typeof r}"

  if h >= 0
    return r.slice 0, r.length - h
  else
    return r.slice -h

take = (b, t) ->
  takeOrDrop b, t

drop = (e, p) ->
  takeOrDrop e, -p

###
  @param {Array} o - source array
  @returns {Array} - new array
###
reverse = (o) ->
  t = o.slice().reverse()
  return t

#-------------------------------#
### @Array @Elements @methods ###
#-------------------------------#

###
  @param {Array} a - array
  @param {String} w - word
  @returns {Boolean}
###
some = (a, w) ->
  unless a instanceof Array
    return err "Typeof: #{typeof a}"

  n = String w

  for i in a
    if n = String i
      return true

  return false

###
  @param {Array} l - array
  @param {String} c - word
  @returns {Boolean}
###
every = (l, c) ->
  unless l instanceof Array
    return err "Typeof: #{typeof l}"

  x = String c

  return l.every (e) -> e == x

#--------------------#
### @FP @methods ###
#--------------------#

#--------------------#
### @Math @methods ###
#--------------------#

###
  @private function
  @param {Array} v - array
  @param {Function} f - operation
  @returns {Number}
###
basic = (v, f) ->
  unless v instanceof Array
    return err "Typeof: #{typeof v}"

  return v.reduce (s, e) ->
    unless typeof +e == 'number'
      return 0
    return f s, e

add = (v) ->
  basic v, (s, e) -> s + e

subtract = (v) ->
  basic v, (s, e) -> s - e

multiply = (v) ->
  basic v, (s, e) -> s * e

divide = (v) ->
  basic v, (s, e) -> s / e

###
  @param {Array} o - array
  @returns {Array} - new array
###
power = (o) ->
  s = o.slice()
  return s.map (q) -> q ** 2

###
  @param {Array} w - array
  @returns {Array} - new array
###
squareRoot = (w) ->
  a = w.slice()
  return a.map (e) -> Math.sqrt e

###
  @private function
  @param {Array} g - array
  @param {Function} y - operation
  @returns {Array} - new array
###
floorCeilRound = (g, y) ->
  unless g instanceof Array
    return err "Typeof: #{typeof g}"

  c = new Array()

  for f in g
    unless typeof +f == 'number'
      return 0
    p = y f
    c.push p

  return c

###
  @param {Number} r - number
  @returns {Number}
###
floor = (r) ->
  return Math.floor r

###
  @param {Array} n - array
  @returns {Array} - new array
###
floor2 = (n) ->
  floorCeilRound n, (n) -> Math.floor n

###
  @param {Number} t - number
  @returns {Number}
###
ceil = (t) ->
  return Math.ceil t

###
  @param {Array} k - array
  @returns {Array} - new array
###
ceil2 = (k) ->
  floorCeilRound k, (k) -> Math.ceil k

###
  @param {Number} z - number
  @returns {Number}
###
round = (z) ->
  return Math.round z

###
  @param {Array} h - array
  @returns {Array} - new array
###
round2 = (h) ->
  floorCeilRound h, (h) -> Math.round h

random1 = ->
  return Math.floor Math.random() * 10

random2 = ->
  return Math.random() * 100

random3 = ->
  return Math.floor Math.random() * 100

random4 = ->
  return Math.random() * 1000

random5 = ->
  return Math.floor Math.random() * 1000

module.exports =
  R: {
    take
    drop
    reverse
    some
    every
    add
    subtract
    multiply
    divide
    power
    squareRoot
    floor
    floor2
    ceil
    ceil2
    round
    round2
    random1
    random2
    random3
    random4
    random5
  }
