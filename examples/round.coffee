{ R } = require '../lib/main'

array = [5.8, 7.4, 3, 9.1]

console.log R.round 4.6
# 5

console.log R.round2 array
# [ 6, 7, 3, 9 ]
