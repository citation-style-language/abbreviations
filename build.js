const path = require('path')
const fs = require('fs')

const lists = [
    'american-journal-of-archaeology/abbreviations.json', // fixed list
    'medline/abbreviations.json', // fixed list from Zotero
  ]
  .concat(require('./ncbi'))
  .map(list => list[0] === '/' ? path.relative(__dirname, list) : list)

const published = require('./package.json').files

let errors = false
for (const list of lists) {
  if (!published.includes(list)) {
    console.log(`found unpublished ${list}`)
    errors = true
  }
}
for (const list of published) {
  if (!lists.includes(list)) {
    console.log(`I don't know about ${list}`)
    errors = true
  }
}

if (errors) process.exit(1)

fs.writeFileSync('index.js', `module.exports = ${JSON.stringify(lists, null, 2)};\n`)
