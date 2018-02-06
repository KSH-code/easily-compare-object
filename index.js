module.exports = function checkAllProperty (...obj) {
  if (obj.length <= 1) return true
  for (let i = 0; i < obj.length - 1; i++) {
    const obj1 = obj[i]
    const obj2 = obj[i + 1]
    for (let key in obj1) {
      if (typeof obj1[key] === 'object') {
        if (checkAllProperty(obj1[key], obj2[key]) === false) return false
      } else if (obj2[key] !== obj1[key]) return false
    }
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false
  }
  return true
}
