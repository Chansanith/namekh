var NumberOfWords = 10

var words = new BuildArray(NumberOfWords)

words[1] = "Guilty Crown"
words[2] = "Overlord"
words[3] = "Danganronpa"
words[4] = "Needless"
words[5] = "Heavy Object"
words[6] = "Attack on Titan"
words[7] = "Dragon Ball Super"
words[8] = "Jojo's Bizarre Adventure"
words[9] = "Persona 5"
words[10] = "Jormungand"

//thanks @Pete Hearne for the function!//
function BuildArray(size){
  this.length = size
  for (var i = 1; i <= size; i++){
    this[i] = null}
  return this
}

function PickRandomWord(frm) {
  var rnd = Math.ceil(Math.random() * NumberOfWords)
  frm.wordspace.value = words[rnd]
}
