class Enum
  constructor: (fields) ->
    if !fields?.length or !Array.isArray fields then throw 'Fields must be an array of Strings'
    fields.forEach (field) => @[field.toUpperCase()] = field.toUpperCase()


myEnum = new Enum(['ONE', 'TWO'])

console.log 'Enum', myEnum
