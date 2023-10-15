###
  This function generates a random decimal number between 0 and 99
  (inclusive) with Math.floor and returns it.

  @return {Number}
###

random3 = ->
  return Math.floor Math.random() * 100

module.exports = random3
