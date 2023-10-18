###*
  * This function `some` takes an array `a` and a
  * string `w` as parameters and returns a boolean value.
  *
  * @param {Array} a
  * @param {String} w
  * @return {Boolean}
###

some = (a, w) ->
  unless a instanceof Array
    throw new Error "Typeof: #{typeof a}"

  n = String w

  for i in a
    if n = String i
      return true

  return false

export default some
