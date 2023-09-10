const readline = require('readline')

const mayWinCheck = (jArr, wArr) => {
    const inconsistoncies = {}
  
    for (let i = 0; i < jArr.length; i++) {
      const joeCard = jArr[i]
      const winCard = wArr[i]
  
      if (joeCard !== winCard) {
        if (inconsistoncies[winCard] === joeCard) {
          delete inconsistoncies[winCard]
        } else {
          if (joeCard < winCard) return false
  
          inconsistoncies[joeCard] = winCard
        }
      }
    }
  
    return !Object.keys(inconsistoncies).length
}

  
const equalsSeqCheck = (jArr, wArr) => {
    if (jArr.length !== wArr.length) return false
  
    const joeCardsCounted = countNums(jArr)
    const winSequenceCounted = countNums(wArr)
  
    return compareDict(joeCardsCounted, winSequenceCounted)
  }
  
const countNums = (numbersSeq) => {
    const countedNums = {}
  
    for (const number of numbersSeq) {
        if (!countedNums[number]) countedNums[number] = 0
        countedNums[number]++
    }
  
    return countedNums
  }
  
const compareDict = (a, b) =>  {
    for (const value in a) {
      if (a[value] !== b[value]) return false
    }
  
    return true
  }

const formatLines = (arr) => {
    return arr.map(it => it.trim().split(" ").map(it => parseInt(it)))
}

const main = () => {
    let lines = []
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
  
    rl.on('line', input => {
        lines.push(input)

        lines.length === 3 ?
            rl.close() :
            {}
    })
  
    rl.on('close', () => {
        const formattedLines = formatLines(lines)

        equalsSeqCheck(formattedLines[1], formattedLines[2]) && mayWinCheck(formattedLines[1], formattedLines[2]) ? 
            console.log('YES') :
            console.log('NO')
    })
}

main()