###*
  * @param {Array} n
  * @return {Array} new array
###

floor2 = (n) ->
  floorCeilRound n, (n) -> Math.floor n

export default floor2
