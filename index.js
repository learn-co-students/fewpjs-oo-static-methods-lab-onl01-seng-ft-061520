class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  static titleize(string) {
    let tenExceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let final = []
    let wordArray = string.split(" ")
    for (let l = 0; l < wordArray.length; l++) {
      if (l === 0) {
        final.push(this.capitalize(wordArray[l]))
      } else {
        if (tenExceptions.includes(wordArray[l])) {
          final.push((wordArray[l]))
        } else {
          final.push(this.capitalize(wordArray[l]))
        }
      }
    }
    return final.join(" ")
  }
}
