{ R } = require '../lib/main'

x = () -> true

y = () -> false

z = () -> 'xyz'

console.log R.highOrderFunc x, y, z
# [ true, false, 'xyz' ]
