//AssignmentOne-kilometerToMeter
function kilometerToMeter(kilometer) {
  var meter = 0;
  if (kilometer >= 0) {
    meter = kilometer * 1000;
  } else {
    meter = "Invalid Input";
  }
  return meter;
}
var result = kilometerToMeter(5);
console.log(result);

//AssignmentTwo-budgetCalculator
function budgetCalculator(watch, mobile, laptop) {
  var watchCost = watch * 50;
  var mobileCost = mobile * 100;
  var laptopCost = laptop * 500;
  var totalBudget = 0;
  if (watch > 0 || mobile > 0 || laptop > 0) {
    totalBudget = watchCost + mobileCost + laptopCost;
  } else if (watch == 0 || mobile == 0 || laptop == 0) {
    totalBudget = "Invalid! Select At least One";
  }
  return totalBudget;
}
var totalQuantity = budgetCalculator(0, 0, 0);
console.log(totalQuantity);

//AssignmentThree-hotelCost
function hotelCost(duration) {
  var totalCost = 0;
  if (duration <= 10) {
    totalCost = duration * 100;
  } else if (duration <= 20) {
    var tillTenDaysLivingCost = 10 * 100;
    var remaining = duration - 10;
    var tillTwentyDaysLivingCost = remaining * 80;
    totalCost = tillTenDaysLivingCost + tillTwentyDaysLivingCost;
  } else {
    var tillTenDaysLivingCost = 10 * 100;
    var tillTwentyDaysLivingCost = 10 * 80;
    var remaining = duration - 20;
    var afterTwentyDaysLivingCost = remaining * 50;
    totalCost =
      tillTenDaysLivingCost +
      tillTwentyDaysLivingCost +
      afterTwentyDaysLivingCost;
  }
  return totalCost;
}
var totalDuration = hotelCost(15);
console.log(totalDuration);

//AssignmentFour-megaFriend
function megaFriend(friends) {
  var longestName = friends[0];
  for (var i = 0; i < friends.length; i++) {
    if (friends[i].length > longestName.length) {
      longestName = friends[i];
    }
  }
  return longestName;
}
var friendList = ["Jui", "Sokhina", "Tuni", "Rupa", "Laili", "Kajol"];
var getLongestName = megaFriend(friendList);
console.log(getLongestName);
