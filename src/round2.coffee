###*
  * @param {Array} h
  * @return {Array} new array
###

round2 = (h) ->
  floorCeilRound h, (h) -> Math.round h

export default round2
