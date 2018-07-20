function changeVocals (str) {
  //code di sini
  str = str.split('');
  var vocal = 'aiueoAIUEO'
  var pocal = 'bjvfpBJVFP'
  
  for (var i = 0 ; i < vocal.length; i++) {
    for (var j = 0; j < str.length; j++) {
      if (vocal[i] === str[j]){
        str[j] = pocal[i]
      }
    }
  }
  return str.join('');
}

function reverseWord (str) {
  //code di sini
  var balikKata = ''
  for (var k = str.length -1; k >= 0; k--) {
    balikKata += str[k]
  }
  return balikKata;
}

function setLowerUpperCase (str) {
  //code di sini
  var abjUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var abjLower = 'abcdefghijklmnopqrstuvwxyz';
  var ubah = '';

  for (var l = 0; l < str.length; l++) {
    for (var m = 0; m < abjUpper.length; m++) {
      if (str[l] === abjUpper[m]) {
        ubah += str[l].toLowerCase();
      } else if (str[l] === abjLower[m]) {
        ubah += str[l].toUpperCase();
      }
    }
  }
  return ubah;
}

function removeSpaces (str) {
  //code di sini
    return str; 
}

function passwordGenerator (name) {
  //code di sini
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  var ubahVocal = changeVocals(name)
  var kataBalik = reverseWord(ubahVocal)
  var kecilBesar = setLowerUpperCase(kataBalik)
  var apusSpasi = removeSpaces(kecilBesar);
  return apusSpasi;
  // console.log(kecilBesar)
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'