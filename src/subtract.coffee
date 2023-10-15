basic = require './basic'

###
  This function performs the subtraction operation on the
  elements of an array of numbers and returns their difference.

  @param {Array} v
  @return {Number}
###

subtract = (v) ->
  basic v, (s, e) -> s - e

module.exports = subtract
