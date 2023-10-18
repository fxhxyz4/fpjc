###*
  * This function `every` takes an array `l` and a string
  * `c` as parameters and returns a boolean value.
  *
  * @param {Array} l
  * @param {String} c
  * @return {Boolean}
###

every = (l, c) ->
  unless l instanceof Array
    throw new Error "Typeof: #{typeof l}"

  x = String c

  return l.every (e) -> e == x

export default every
