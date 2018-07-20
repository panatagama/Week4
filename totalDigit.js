function totalDigitRekursif(angka) {
  // you can only write your code here!

  var strAngka = String(angka);
  if (strAngka.length === 1) return angka

  var angkaDepan = strAngka[0];
  var angkaSisa = strAngka.slice(1)

  return Number(angkaDepan) + totalDigitRekursif(Number(angkaSisa))  

}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5