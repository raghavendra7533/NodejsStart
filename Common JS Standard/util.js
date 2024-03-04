const fs = require('fs')

function createFileSync(name, contents) {
    fs.writeFileSync(name, contents)
    for (let i = 0; i < 9; i++){
        fs.appendFileSync(name, contents)
    }
    console.log('File written')
}

module.exports = {
    createFileSync
}