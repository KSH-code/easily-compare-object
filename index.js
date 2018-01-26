module.exports = function checkAllProperty (obj1, obj2) {
  let obj1Keys = 0
  let obj2Keys = 0
  for (let key in obj1) {
    obj1Keys++
    if (typeof obj1[key] === 'object') {
      if (checkAllProperty(obj1[key], obj2[key]) === false) return false
    } else if (obj2[key] !== obj1[key]) return false
  }
  for (let key in obj2) {
    obj2Keys++
  }
  return obj1Keys === obj2Keys
}
