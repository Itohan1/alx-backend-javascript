export default function calculateNumber(type, a, b){
  if (type === "SUM") {
    return Math.round(a) + Math.round(b)
  } else if (type === "SUBTRACT") {
    return Math.round(a) - Math.round(b)
  } else if (type === "DIVIDE") {
    const roundb = Math.round(b)

    if (roundb === 0) {
      return "Error"
    }
    return Math.round(a) / roundb
  }
}
