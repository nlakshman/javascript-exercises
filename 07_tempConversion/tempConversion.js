const ftoc = function(fTemp) {
  cTemp = Math.round(((fTemp -32) * (5/9)) * 10) / 10;
  return cTemp;
};

const ctof = function(cTemp) {
  fTemp = Math.round(((cTemp * (9/5)) + 32) * 10) / 10;
  return fTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
