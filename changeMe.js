function changeMe(arr) {
    // you can only write your code here!
    if (arr[0] === undefined) {
      console.log('""');
    }
    for (var i = 0; i < arr.length; i++) {
      var actor = {};
      actor.firstName = arr[i][0]
      actor.lastName = arr[i][1]
      actor.gender = arr[i][2]
      if (arr[i][3] === undefined) {
        actor.age = 'Invalid Birth Year'
      } else {
        actor.age = 2018 - arr[i][3]
      }
      console.log(i+1 +'. '+ actor.firstName + ' ' + actor.lastName )
      console.log(actor)
    }
  }

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""