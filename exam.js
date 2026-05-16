function validateIdentity(CIN) {

 
  for (let i = 2; i < CIN; i++) { // loop from 2 to CIN-1 to check for any divisors

    if (CIN % i === 0) { // If CIN is divisible by i (remainder is 0), then CIN is NOT a prime number
      console.log("Agent Approved: Identity pattern is untraceable.");
      return; 
    }
  }
  console.log("Rejected: Identity pattern shows external links.");
}
console.log(validateIdentity(91));
  