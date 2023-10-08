{ Array } = require '../lib/main'

array = [7, { a: 1, b: false }, null, "str"]

console.log Array.take array, 2
# [7, { a: 1, b: false }]
