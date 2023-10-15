###*
  * This function generates a random decimal number between 0 and 999
  * (inclusive) without using Math.floor and returns it.
  *
  * @return {Number}
###

random4 = ->
  return Math.random() * 1000

export default random4
