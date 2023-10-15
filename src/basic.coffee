###*
  * Is a utility function that can be used to perform
  * various mathematical operations on arrays of numbers.
  *
  * @private
  * @param {Array} v
  * @param {Function} f
  * @return {Number}
###

basic = (v, f) ->
  unless v instanceof Array
    throw new Error "Typeof: #{typeof v}"

  return v.reduce (s, e) ->
    unless typeof +e == 'number'
      return 0
    return f s, e

export default basic
