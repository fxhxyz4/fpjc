basic = require './basic'

###
  This function performs the multiplication operation on
  the elements of an array of numbers and returns their product.

  @param {Array} v
  @return {Number}
###

multiply = (v) ->
  basic v, (s, e) -> s * e

module.exports = multiply
