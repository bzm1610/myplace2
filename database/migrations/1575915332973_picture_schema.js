'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PictureSchema extends Schema {
  up () {
    this.create('pictures', (table) => {
      table.increments()
      table.string('photography',1000)
      table.timestamps()
    })
  }

  down () {
    this.drop('pictures')
  }
}

module.exports = PictureSchema
