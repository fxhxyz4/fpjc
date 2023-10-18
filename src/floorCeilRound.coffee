###*
  * @private
  * @param {Array} g
  * @param {Function} y
  * @return {Array} new array
###

floorCeilRound = (g, y) ->
  unless g instanceof Array
    throw new Error "Typeof: #{typeof g}"

  c = new Array()

  for f in g
    unless typeof +f == 'number'
      return 0
    p = y f
    c.push p

  return c

export default floorCeilRound
