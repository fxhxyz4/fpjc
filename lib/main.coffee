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

power = (v) ->
  basic v, (s, e) -> s ** e

squareRoot = (v) ->
  basic v, (s, e) -> Math.sqrt e

module.exports =
  Array: {
    take
    drop
    reverse
  }

  ArrayElements: {
    some
    every
  }

  Math: {
    add
    subtract
    multiply
    divide
  }
