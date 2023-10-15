###
  This function generates a random decimal number between 0 and 999
  (inclusive) with using Math.floor and returns it.

  @return {Number}
###

random5 = ->
  return Math.floor Math.random() * 1000

module.exports = random5
