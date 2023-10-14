{ R } = require '../lib/main'

array = [5.8, 7.4, 3, 9.1]

console.log R.floor 4.6
# 4

console.log R.floor2 array
# [ 5, 7, 3, 9 ]
