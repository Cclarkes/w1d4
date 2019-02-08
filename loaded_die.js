function makeLoadedDie() {
    var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
    var rollcount = 0

    return function rolled() {
        rollcount += 1;
        return list[rollcount - 1];
    }
  }
  
  var rollLoadedDie = makeLoadedDie();
  var rollLoadedDie2 = makeLoadedDie();

  console.log(rollLoadedDie());  // 5
  console.log(rollLoadedDie());  // 4
  console.log(rollLoadedDie());  // 6

  console.log(rollLoadedDie2());  // 5
  console.log(rollLoadedDie2());  // 4
  console.log(rollLoadedDie2());  // 6