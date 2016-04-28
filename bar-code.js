var indexedById = {}
var lastInteger = 1999

function barCode(expression) {
  var id = expression.__barCode

  if (!id) {
    lastInteger += 1
    id = "|||"+lastInteger.toString(36)+"|"
    expression.__barCode = id
    indexedById[id] = expression
    checkSize()
  }

  return id
}

function checkSize() {
  if (lastInteger == 2999) {
    console.log("Whoa! 1000 items in the index! Getting fancy.")
  } else if (lastInteger == 11999) {
    console.log("Um, 10,000 indexed items is a lot. Are there even 10,000 perceptible features on the page?")
  }
}

barCode.scan = function(id) {
  return indexedById[id]
}

module.exports = barCode
