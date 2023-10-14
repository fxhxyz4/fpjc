{ R } = require '../lib/main'

array = [7, { a: 1, b: false }, null, "str"]

console.log R.take array, 2
# [7, { a: 1, b: false }]
