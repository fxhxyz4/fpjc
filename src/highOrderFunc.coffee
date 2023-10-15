###*
  * highOrderFunc takes multiple arguments and returns a new array.
  * It iterates over each argument and checks if it is a function. If it is,
  * it calls the function and pushes the result into the new array.
  *
  * @param {Array} a
  * @return {Array} new array
###

highOrderFunc = (...a) ->
  r = new Array()

  for e in a
    unless typeof e == 'function'
      throw new Error('Argument not a function');

    r.push e()
  return r

export default highOrderFunc
