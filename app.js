var result = 0;
function logic(score, uindex, crate, sloper, par1, pcc1) {
  var userScore = score;
  var userIndex = uindex;
  var courseRating = crate;
  var slopeRating = sloper;
  var par = par1;
  var pcc = pcc1;

  oneArray = [5, 10, 23, 57, 151, 379, 790, 2349, 20111, 48219, 125000];
  twoArray = [5, 10, 22, 51, 121, 276, 536, 1200, 4467, 27877, 84300];
  threeArray = [6, 10, 21, 43, 87, 174, 323, 552, 1138, 3577, 37000];
  fourArray = [5, 8, 13, 23, 40, 72, 130, 229, 382, 695, 1650];
  fiveArray = [5, 7, 10, 15, 22, 35, 60, 101, 185, 359, 874];

  courseHandicap = userIndex * (slopeRating / 113) + (courseRating - par);
  netDiff = 113 / slopeRating * (userScore - courseHandicap - courseRating - pcc);
  roundDiff = Math.round(netDiff);
  
  var odds;
  result = roundDiff;

  if (roundDiff > 0){
    document.getElementById("sbn").innerHTML = `Not a sandbagger. Score is within the likely range of scores for this player.`;
    document.getElementById("df").innerHTML = `The players net differential is ${roundDiff}.`;
    return;
  }
  if (roundDiff < -10){
    document.getElementById("sbn").innerHTML = `Sandbagger. The odds of shooting this score are astronomical.`;
    document.getElementById("df").innerHTML = `The players net differential is ${roundDiff}.`;
    return;
  }

  if (0 <= userIndex && userIndex < 5.5) {
    odds = oneArray[roundDiff * -1];
      if (odds > 258) {
        document.getElementById("sbn").innerHTML = `Sandbagger. The odds of shooting this score are: ${odds} to 1.`;
        document.getElementById("df").innerHTML = `The players net differential is ${roundDiff}.`;
  
        // console.log(`Sandbagger. The odds of shooting this score are: ${odds} to 1`);
        // console.log(`The players net differential is ${roundDiff}`);
      } else {
        document.getElementById("sbn").innerHTML = `Not a sandbagger. The odds of shooting this score are: ${odds} to 1.`;
        document.getElementById("df").innerHTML = `The players net differential is ${roundDiff}.`;
  
        // console.log(`Not a sandbagger. The odds of shooting this score are: ${odds} to 1`);
        // console.log(`The players net differential is ${roundDiff}`);
      }
  } else {
    if (5.5 <= userIndex && userIndex < 12.5) {
      odds = twoArray[roundDiff * -1];

        if (odds > 258) {
          document.getElementById("sbn").innerHTML = `Sandbagger. The odds of shooting this score are: ${odds} to 1.`;
          document.getElementById("df").innerHTML = `The players net differential is ${roundDiff}.`;
        } else {
          document.getElementById("sbn").innerHTML = `Not a sandbagger. The odds of shooting this score are: ${odds} to 1.`;
          document.getElementById("df").innerHTML = `The players net differential is ${roundDiff}.`;
        }
      
    } else {
      if (12.5 <= userIndex && userIndex < 21.5) {
        odds = threeArray[roundDiff * -1];
          if (odds > 258) {
            document.getElementById("sbn").innerHTML = `Sandbagger. The odds of shooting this score are: ${odds} to 1.`;
            document.getElementById("df").innerHTML = `The players net differential is ${roundDiff}.`;
          } else {
            document.getElementById("sbn").innerHTML = `Not a sandbagger. The odds of shooting this score are: ${odds} to 1.`;
            document.getElementById("df").innerHTML = `The players net differential is ${roundDiff}.`;
          }

       
      } else {
        if (21.5 <= userIndex && userIndex < 30) {
          odds = fourArray[roundDiff * -1];
            if (odds > 258) {
              document.getElementById("sbn").innerHTML = `Sandbagger. The odds of shooting this score are: ${odds} to 1.`;
              document.getElementById("df").innerHTML = `The players net differential is ${roundDiff}.`;
            } else {
              document.getElementById("sbn").innerHTML = `Not a sandbagger. The odds of shooting this score are: ${odds} to 1.`;
              document.getElementById("df").innerHTML = `The players net differential is ${roundDiff}.`;
            }
          
        } else {
          if (userIndex => 30) {
            odds = fiveArray[roundDiff * -1];
              if (odds > 258) {
                document.getElementById("sbn").innerHTML = `Sandbagger. The odds of shooting this score are: ${odds} to 1.`;
                document.getElementById("df").innerHTML = `The players net differential is ${roundDiff}.`;
              } else {
                document.getElementById("sbn").innerHTML = `Not a sandbagger. The odds of shooting this score are: ${odds} to 1.`;
                document.getElementById("df").innerHTML = `The players net differential is ${roundDiff}.`;
              }
           
          } else {
            document.getElementById("sbn").innerHTML = "Value entered is not compatible with this tool.";
          }
        }
      }
    }
  }
  
}


