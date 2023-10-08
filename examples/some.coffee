{ ArrayElements } = require '../lib/main'

w = "qwerty"

array = [4, null, NaN, "fck", w]

console.log ArrayElements.some array, w
# true
