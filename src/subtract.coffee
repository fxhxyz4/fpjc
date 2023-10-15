import basic from './basic.coffee'

###*
  * This function performs the subtraction operation on the
  * elements of an array of numbers and returns their difference.
  *
  * @param {Array} v
  * @return {Number}
###

subtract = (v) ->
  basic v, (s, e) -> s - e

export default subtract
