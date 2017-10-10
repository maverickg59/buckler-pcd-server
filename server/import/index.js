const knex = require('../db/knex')

const _ = require('highland')
const fs = require('fs')
const csv = require('fast-csv')
const stream = fs.createReadStream(__dirname + '/data/distances.csv')
const output = fs.createWriteStream(__dirname + '/data/output.txt')

const extracted = []

const importData = () => {
  _(stream.pipe(csv({ headers: true, ignoreEmpty: true })))
    .map(function(row) {
      console.log(row)
      extracted.push(row)
      return JSON.stringify(row) + '\n'
      // return addRecords(row)
    })
    .pipe(output)
    .on('finish', () => {
      extracted.map(addRecords)
    })
}

importData()

function addRecords(row) {
  return knex('new_similars')
    .insert(row)
    .then(x => {
      console.log("Great success, you've added some records!")
      return JSON.stringify(row) + '\n'
    })
}
