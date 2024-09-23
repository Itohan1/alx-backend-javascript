function calculateNumber(a, b){
  const round1 = Math.round(a)
  const round2 = Math.round(b)
  const result = round1 + round2
  return result
}

module.exports = calculateNumber;
