const calculateSupply = function(age, amountPerDay) {
  const maxAge = 100;
  const totalSupply = 365 * amountPerDay * (maxAge - age);
  console.log(
    "you will need " + totalSupply + " to last you untill the age of " + maxAge
  );
};

calculateSupply(21, 3);
calculateSupply(35, 7);
calculateSupply(44, 2);
