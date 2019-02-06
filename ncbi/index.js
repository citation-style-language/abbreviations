const fs = require('fs')
const path = require('path')


function prepare_abbreviation(full, abbreviated){
  /*
  Receives the full journal name and the abbreviated from the list.
  Adds a full stop after each word IF the word is abbreviated.

  E.g. full  : Acta biomaterialia
    abbreviated: Acta Biomater
    
    returns  : Acta Biomater.

  As a side effect: full stop will not be appended after numbers because
  they aeppear in the 'full' string.
  */
  const fullList = full.toLowerCase().split(' ')
  const abbreviatedList = abbreviated.split(' ')

  let polishedAbbreviation = ''

  for (const word of abbreviatedList) {
    if (polishedAbbreviation) polishedAbbreviation += ' '

    if (fullList.includes(word.toLowerCase())) {
      polishedAbbreviation += word
    } else {
      polishedAbbreviation += word + '.'
    }
  }

  return polishedAbbreviation
}

function process_file(file, abbreviations) {
  const f = fs.readFileSync(file, 'utf-8').replace(/\r/g, '')

  let journalTitle = ''
  let journalAbbreviation = ''

  let m

  for (const line of f.split('\n')) {
    if (line.startsWith('JrId')) {
      if (journalTitle && journalAbbreviation) abbreviations[journalTitle] = prepare_abbreviation(journalTitle, journalAbbreviation)

      if (!journalTitle || !journalAbbreviation) console.log("NCBI: Journal without abbreviation:", journalTitle, journalAbbreviation)

      journalTitle = ''
      journalAbbreviation = ''

    } else if (m = line.match(/^JournalTitle:\s*(.+)/)) {
      journalTitle = m[1]

    } else if (m = line.match(/^MedAbbr:\s*(.*)/)) {
      journalAbbreviation = m[1]

    }
  }
}

const abbreviations = {
  "info": {
    "URI": "http://www.ncbi.nlm.nih.gov/books/NBK3827/table/pubmedhelp.pubmedhelptable45/",
    "name": "List created using the lists from NCBI",
  },
  "default": {
    "content": "NCBI",
    "container-title": {},
  },
}

for (const list of ['J_Entrez.txt', 'J_Medline.txt', 'J_Sequence.txt']) {
  process_file(path.join(__dirname, list), abbreviations['default']['container-title'])
}
fs.writeFileSync(path.join(__dirname, 'abbreviations.json'), JSON.stringify(abbreviations, null, 2), 'utf-8')