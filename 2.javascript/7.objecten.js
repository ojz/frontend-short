/**
 * Objecten
 * 
 * 
 */


// maak een nieuw object aan
const obj = {
  foo: 123,
  bar: 456,
}


// zoek een waarde op in een object
obj.foo // 123


// verander waardes in een object
obj.bar = 789


// voeg waardes toe aan een object
obj.baz = 101112


// verwijder waardes uit een object
delete obj.baz


// refereer naar waardes waarvan je de naam niet weet op voorhand
const key = "foo"
obj[key] // 123


// loop over de inhoud van een object
const keys = Object.keys(obj)
for (let i = 0; i < keys.length; i = i + 1) {
  const key = keys[i]
  console.log("De waarde van", key, "is", obj[key])
}
