{ R } = require '../lib/main'

array = [5.8, 7.4, 3, 9.1]

console.log R.ceil 4.6
# 5

console.log R.ceil2 array
# [ 6, 8, 3, 10 ]
