module.exports = function check(str, bracketsConfig) {
    const pairsBrackets = bracketsConfig.map(pair => pair.join(''))
    for (let i = 0; i < pairsBrackets.length;) {
      if (str.includes(pairsBrackets[i])) {
        str = str.replace(pairsBrackets[i], '')
        i = 0
      }
      else i++
    }
    return str === ''
}
