

function totalAmount(billAmount, service) { 
  let result;
  switch (service) {
  case "good":
  result = (billAmount * 0.2) + billAmount;
  return result
  break
  case "fair":
  result = (billAmount * 0.15) + billAmount;
  return result
  break
  case "bad":
  result = (billAmount * 0.1) + billAmount;
  return result
  break
  default:
  console.log("provide service level to add tip")
  }
  }
  console.log(totalAmount(100, "good")) 



