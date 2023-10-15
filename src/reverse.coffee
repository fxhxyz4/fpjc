###*
  * This function takes an array as input and returns
  * a new array with the elements in reverse order.
  *
  * @param {Array} o
  * @return {Array} new array
###

reverse = (o) ->
  t = o.slice().reverse()
  return t

export default reverse
