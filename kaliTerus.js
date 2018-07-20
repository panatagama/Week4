function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var strAngka = String(angka);
  if (strAngka.length === 1) return angka

  var angkaDepan = strAngka[0];
  var angkaSisa = strAngka.slice(1)

  return kaliTerusRekursif(Number(angkaDepan) * kaliTerusRekursif(Number(angkaSisa)));

}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6