export function mapValue(value, fromStart, fromEnd, toStart, toEnd) {
  return toStart + (value - fromStart) * (toEnd - toStart) / (fromEnd - fromStart);
}

export function capitalize(value) {
  const valueString = String(value);
  return valueString.substring(0, 1).toUpperCase() + valueString.substring(1).toLowerCase()
}