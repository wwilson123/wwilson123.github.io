var courseHandicap, courseRating, fiveArray, fourArray, netDiff, oneArray, par, pcc, roundDiff, slopeRating, threeArray, twoArray, userIndex, userScore;

userScore = document.getElementById('score').value;
userIndex = document.getElementById('uindex').value;
courseRating = document.getElementById('crate').value;
slopeRating = document.getElementById('sloper').value;
par = document.getElementById('par').value;
pcc = document.getElementById('pcc').value;



courseHandicap = userIndex * (slopeRating / 113) + (courseRating - par);
netDiff = 113 / slopeRating * (userScore - courseHandicap - courseRating - pcc);
roundDiff = Math.round(netDiff);

oneArray = [5, 10, 23, 57, 151, 379, 790, 2349, 20111, 48219, 125000];
twoArray = [5, 10, 22, 51, 121, 276, 536, 1200, 4467, 27877, 84300];
threeArray = [6, 10, 21, 43, 87, 174, 323, 552, 1138, 3577, 37000];
fourArray = [5, 8, 13, 23, 40, 72, 130, 229, 382, 695, 1650];
fiveArray = [5, 7, 10, 15, 22, 35, 60, 101, 185, 359, 874];

function logic(diff, index) {
  var odds;

  if (0 <= index && index <= 5) {
    odds = oneArray[diff * -1];

    if (odds > 258) {
      console.log(`Sandbagger. The odds of shooting this score are: ${odds} to 1`);
      console.log(`The players net differential is ${roundDiff}`);
    } else {
      console.log(`Not a sandbagger. The odds of shooting this score are: ${odds} to 1`);
      console.log(`The players net differential is ${roundDiff}`);
    }
  } else {
    if (6 <= index && index <= 12) {
      odds = twoArray[diff * -1];

      if (odds > 258) {
        console.log(`Sandbagger. The odds of shooting this score are: ${odds} to 1`);
        console.log(`The players net differential is ${roundDiff}`);
      } else {
        console.log(`Not a sandbagger. The odds of shooting this score are: ${odds} to 1`);
        console.log(`The players net differential is ${roundDiff}`);
      }
    } else {
      if (13 <= index && index <= 21) {
        odds = threeArray[diff * -1];

        if (odds > 258) {
          console.log(`Sandbagger. The odds of shooting this score are: ${odds} to 1`);
          console.log(`The players net differential is ${roundDiff}`);
        } else {
          console.log(`Not a sandbagger. The odds of shooting this score are: ${odds} to 1`);
          console.log(`The players net differential is ${roundDiff}`);
        }
      } else {
        if (22 <= index && index <= 30) {
          odds = fourArray[diff * -1];

          if (odds > 258) {
            console.log(`Sandbagger. The odds of shooting this score are: ${odds} to 1`);
            console.log(`The players net differential is ${roundDiff}`);
          } else {
            console.log(`Not a sandbagger. The odds of shooting this score are: ${odds} to 1`);
            console.log(`The players net differential is ${roundDiff}`);
          }
        } else {
          if (index > 30) {
            odds = fiveArray[diff * -1];

            if (odds > 258) {
              console.log(`Sandbagger. The odds of shooting this score are: ${odds} to 1`);
              console.log(`The players net differential is ${roundDiff}`);
            } else {
              console.log(`Not a sandbagger. The odds of shooting this score are: ${odds} to 1`);
              console.log(`The players net differential is ${roundDiff}`);
            }
          } else {
            console.log("Value entered is not compatible with this tool.");
          }
        }
      }
    }
  }
}

logic(roundDiff, userIndex);
