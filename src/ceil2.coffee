###*
  * @param {Array} k
  * @return {Array} new array
###

ceil2 = (k) ->
  floorCeilRound k, (k) -> Math.ceil k

export default ceil2
