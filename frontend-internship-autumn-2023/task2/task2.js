const readline = require('readline')

const getWordsCount = (line) => {
    const findedLetters = {
        "s": 0,
        "h": 0,
        "e": 0,
        "r": 0,
        "i": 0,
        "f": 0,
        "f": 0,
    }
  
    for (const letter of line) {
        findedLetters[letter] !== undefined ? findedLetters[letter]++ : {}
    }

    let minWords = Infinity
    Object.entries(findedLetters).map(([letter, count]) => count < minWords ? minWords = count : {})

    Math.floor(findedLetters["f"] / 2) >= minWords ?
        console.log(minWords) :
        console.log(Math.floor(findedLetters["f"] / 2))
}

const main = () => {
    let line = ""
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
  
    rl.on('line', input => {
        line = input
        rl.close()
    })
  
    rl.on('close', () => {
        getWordsCount(line)
    })
  }
  
  main()