
const bcryptjs = require('bcryptjs')

function hashSync(input) {
    return bcryptjs.hashSync(input, 8)
}

function compareSync(input, hashedPass) {
    return bcryptjs.compareSync(input, hashedPass)
}
module.exports = {
    hashSync,
    compareSync
}