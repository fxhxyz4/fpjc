###
  This function takes an array `o` as a parameter and returns
  a new array where each element is raised to the power of 2.

  @param {Array} o
  @return {Array} new array
###

power = (o) ->
  s = o.slice()
  return s.map (q) -> q ** 2

module.exports = power
