import takeOrDrop from './takeOrDrop.coffee'

###*
  * @param {Array} e
  * @param {Number} p
  * @return {Array} new array
###

drop = (e, p) ->
  takeOrDrop e, -p

export default drop
