import basic from './basic.coffee'

###*
  * This function performs the division operation on the
  * elements of an array of numbers and returns their quotient.

  * @param {Array} v
  * @return {Number}
###

divide = (v) ->
  basic v, (s, e) -> s / e

export default divide
