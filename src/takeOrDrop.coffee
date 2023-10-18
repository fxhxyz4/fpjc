###*
  * @private
  * @param {Array} r
  * @param {Number} h
  * @return {Array} new array
###

takeOrDrop = (r, h) ->
  unless r instanceof Array
    throw new Error "Typeof: #{typeof r}"

  if h >= 0
    return r.slice 0, r.length - h
  else
    return r.slice -h

export default takeOrDrop
