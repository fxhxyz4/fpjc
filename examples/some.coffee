{ R } = require '../lib/main'

w = 'qwerty'

array = [4, null, NaN, 'fck', w]

console.log R.some array, w
# true
