import { BaseSchema } from '@adonisjs/lucid/schema'
$[table.exists(enum)]
import $[Table.norm] from '#models/$[table.unix]'
$[table.end]

export default class extends BaseSchema {
  protected tableName = '$[table]'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
$[field.each(all)]
$[field.if(primary)]
$[field.if(bigint)]
      table.bigIncrements('$[field]')
$[field.else]
      table.increments('$[field]')
$[field.end]
$[field.else.if(reference)]

$[field.if(bigint)]
      table
        .bigInteger('$[field]')
        .unsigned()
$[field.if(required)]
        .notNullable()
$[field.end]
        .references('id')
        .inTable('$[reference]')
        .onUpdate('CASCADE')
        .onDelete('$[FIELD.on.delete]')
$[field.else]
      table
        .integer('$[field]')
        .unsigned()
$[field.if(required)]
        .notNullable()
$[field.end]
        .references('id')
        .inTable('$[reference]')
        .onUpdate('CASCADE')
        .onDelete('$[FIELD.on.delete]')
$[field.end]
$[field.else.if(date)]

      table.date('$[field]')$[field.if(required)].notNullable()$[field.end]$[field.if(info)].defaultTo($[field.info])$[field.end]
$[field.else.if(time)]

      table.time('$[field]')$[field.if(required)].notNullable()$[field.end]$[field.if(info)].defaultTo($[field.info])$[field.end]
$[field.else.if(datetime)]

      table.timestamp('$[field]', { useTz: true })$[field.if(optional)].nullable()$[field.end]$[field.if(info)].defaultTo($[field.info])$[field.end]
$[field.else.if(currency)]

      table.decimal('$[field]', 19, 4)$[field.if(required)].notNullable()$[field.end]$[field.if(info)].defaultTo($[field.info])$[field.end]
$[field.else.if(float)]

      table.float('$[field]')$[field.if(required)].notNullable()$[field.end]$[field.if(info)].defaultTo($[field.info])$[field.end]
$[field.else.if(double)]

      table.double('$[field]')$[field.if(required)].notNullable()$[field.end]$[field.if(info)].defaultTo($[field.info])$[field.end]
$[field.else.if(bigint)]

      table.bigInteger('$[field]')$[field.if(unsigned)].unsigned()$[field.end]$[field.if(required)].notNullable()$[field.end]$[field.if(info)].defaultTo($[field.info])$[field.end]
$[field.else.if(integer)]

      table.integer('$[field]')$[field.if(unsigned)].unsigned()$[field.end]$[field.if(required)].notNullable()$[field.end]$[field.if(info)].defaultTo($[field.info])$[field.end]
$[field.else.if(blob)]

      table.binary('$[field]')$[field.if(required)].notNullable()$[field.end]$[field.if(info)].defaultTo($[field.info])$[field.end]
$[field.else.if(json)]

      table.json('$[field]')$[field.if(required)].notNullable()$[field.end]$[field.if(info)].defaultTo($[field.info])$[field.end]
$[field.else.if(text)]

      table.text('$[field]')$[field.if(required)].notNullable()$[field.end]$[field.if(info)].defaultTo($[field.info])$[field.end]
$[field.else.if(boolean)]

      table.boolean('$[field]')$[field.if(required)].notNullable()$[field.end]$[field.if(info)].defaultTo($[field.info])$[field.end]
$[field.else.if(enum)]

      table.enum('$[field]', Object.values($[Table.norm].$[Field.norm]))$[field.if(required)].notNullable()$[field.end]$[field.if(default)].defaultTo($[field.default])$[field.end]
$[field.else.if(string)]

      table.string('$[field]', $[field.length])$[field.if(required)].notNullable()$[field.end]$[field.if(info)].defaultTo($[field.info])$[field.end]
$[field.end]
$[field.end]

$[table.exists(unique)]

$[table.end]
$[table.each(unique)]
$[unique.if(primary)]
$[unique.else]
      table.unique([$[unique.each(all)]$[field.if(non_first)], $[field.end]'$[field]'$[unique.end]])
$[unique.end]
$[table.end]
$[table.exists(index)]

$[table.end]
$[table.each(index)]
$[index.if(few_fields)]
      table.index([$[index.each(all)]$[field.if(non_first)], $[field.end]'$[field]'$[index.end]]$[index.if(fulltext)], undefined, 'FULLTEXT'$[index.end])
$[index.else]
      table.index(
        [
$[index.each(all)]
          '$[field]',
$[index.end]
        ],
        '$[index.name]'$[index.if(fulltext)],
        'FULLTEXT',
$[index.end]
      )
$[index.end]
$[table.end]
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
