class Sorter {
  sortKeysByValuesDesc(dict) {
    let keys = Object.keys(dict)

    for (var i = keys.length; i >= 0; i--) {
      for (var j = keys.length; j > 0; j--) {
        if (dict[keys[i]] < dict[keys[j]]) {
          let temp = keys[j]
          keys[j] = keys[i]
          keys[i] = temp
        }
      }
    }

    return keys
  }
}
