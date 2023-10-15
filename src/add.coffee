import basic from './basic.coffee'

###*
  * This function performs the addition operation on the
  * elements of an array of numbers and returns their sum.
  *
  * @param {Array} v
  * @return {Number}
###

add = (v) ->
  basic v, (s, e) -> s + e

export default add
