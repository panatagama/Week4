function shoppingTime(memberId, money) {
  // you can only write your code here!
  var arr = [
    [ 'Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone' ], 
  [1500000, 500000, 250000, 175000, 50000]];
  var dataShop = {
  };

  dataShop.memberId = memberId;
  dataShop.money = money;
  dataShop.listPurchased = [];

  if (memberId === '') {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  } else if (memberId === undefined && money === undefined) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  }
  
  if (money < arr[1][arr[1].length -1]) {
    return 'Mohon maaf uang tidak cukup';
  }

  for (var i = 0; i < arr[0].length; i++){
    if (money - arr[1][i] >= 0) {
      dataShop.listPurchased.push(arr[0][i]);
      money = money - arr[1][i];
    }
  }
  dataShop.change = money
  return dataShop    
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
{ memberId: '82Ku8Ma742',
money: 170000,
listPurchased:
 [ 'Casing Handphone' ],
changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja