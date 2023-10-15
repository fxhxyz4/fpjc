###
  Calculate the square root of each element in the input array.

  @param {Array} w
  @return {Array} new array
###

squareRoot = (w) ->
  a = w.slice()
  return a.map (e) -> Math.sqrt e

module.exports = squareRoot
