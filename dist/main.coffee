###
  @R fpcoffee v1
  @R 2023 fxhxyz
  @R MIT license
###

#---------------------#
### @Array @methods ###
#--------------------=#

###
  @private
  @param {Array} r
  @param {Number} h
  @return {Array} new array
###
takeOrDrop = (r, h) ->
  unless r instanceof Array
    throw new Error("Typeof: #{typeof r}")

  if h >= 0
    return r.slice 0, r.length - h
  else
    return r.slice -h

take = (b, t) ->
  takeOrDrop b, t

drop = (e, p) ->
  takeOrDrop e, -p

###
  @param {Array} o
  @return {Array} new array
###
reverse = (o) ->
  t = o.slice().reverse()
  return t

#-------------------------------#
### @Array @Elements @methods ###
#-------------------------------#

###
  @param {Array} a
  @param {String} w
  @return {Boolean}
###
some = (a, w) ->
  unless a instanceof Array
    throw new Error("Typeof: #{typeof a}")

  n = String w

  for i in a
    if n = String i
      return true

  return false

###
  @param {Array} l
  @param {String} c
  @return {Boolean}
###
every = (l, c) ->
  unless l instanceof Array
    throw new Error("Typeof: #{typeof l}")

  x = String c

  return l.every (e) -> e == x

#--------------------#
### @FP @methods ###
#--------------------#

###
  @param {Array} a
  @return {Array} new array
###
highOrderFunc = (...a) ->
  r = new Array()

  for e in a
    unless typeof e == 'function'
      throw new Error('Argument not a function');

    r.push e()
  return r

#--------------------#
### @Math @methods ###
#--------------------#


###
  @private
  @param {Array} g
  @param {Function} y
  @return {Array} new array
###
floorCeilRound = (g, y) ->
  unless g instanceof Array
    throw new Error("Typeof: #{typeof g}")

  c = new Array()

  for f in g
    unless typeof +f == 'number'
      return 0
    p = y f
    c.push p

  return c

###
  @param {Number} r
  @return {Number}
###
floor = (r) ->
  return Math.floor r

###
  @param {Array} n
  @return {Array} new array
###
floor2 = (n) ->
  floorCeilRound n, (n) -> Math.floor n

###
  @param {Number} t
  @return {Number}
###
ceil = (t) ->
  return Math.ceil t

###
  @param {Array} k
  @return {Array} new array
###
ceil2 = (k) ->
  floorCeilRound k, (k) -> Math.ceil k

###
  @param {Number} z
  @return {Number}
###
round = (z) ->
  return Math.round z

###
  @param {Array} h
  @return {Array} new array
###
round2 = (h) ->
  floorCeilRound h, (h) -> Math.round h


module.exports =
  R: {
    take
    drop
    reverse
    some
    every
    floor
    floor2
    ceil
    ceil2
    round
    round2
    highOrderFunc
  }
