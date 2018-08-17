// Write your solution in this file!
const driver = {
  age: 45,
  name: 'Jane Doe',
  haircolor: 'purple'
}

function updateDriverWithKeyAndValue(driver, key, value) {
  const copy = { ...driver, [key]: value }
  return copy
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}
function deleteFromDriverByKey (driver, key) {
  
}