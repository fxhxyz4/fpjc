{ R } = require '../lib/main'

array = [7, { a: 1, b: false }, null, NaN, 'str', undefined]

console.log R.drop array, 3
# [ NaN, 'str', undefined ]
