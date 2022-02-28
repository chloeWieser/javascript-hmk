// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

// good -> 20% 
// fair -> 15% 
// bad -> 10%

// tipAmount(100, 'good');
// // 20

// tipAmount(40, 'fair');
// // 6

// Tip Calculator bill = float(input('Total bill amount? $')) 
// print("$%.2f" % bill) 
// service = input(""" Level of service? Good Fair Bad """) 
// # total = bill + (bill * service) 
// if service.lower() == 'good': 
// tip = (bill * 0.2) 
// total = bill + tip print("Tip amount: $%.2f" % tip) 
// print("Total amount: $%.2f" % total) 

// elif service.lower() == 'fair': 
// tip = (bill * 0.15) 
// total = bill + tip 
// print("Tip amount: $%.2f" % tip) 
// print("Total amount: $%.2f" % total) 

// elif service.lower() == 'bad': 
// tip = (bill * 0.1) total = bill + tip 
// print("Tip amount: $%.2f" % tip) 
// print("Total amount: $%.2f" % total) 

// else: print('Please enter a valid service level ') 

function tipAmount(billAmount, service) { 
  let result;
  switch (service) {
  case "good":
  result = billAmount * 0.2
  return result
  break
  case "fair":
  result = billAmount * 0.15
  return result
  break
  case "bad":
  result = billAmount * 0.1
  return result
  break
  default:
  console.log("no tip!")
  }
  }
  console.log(tipAmount(40, "fair")) 





