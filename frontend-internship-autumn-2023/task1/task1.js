const readline = require('readline')

const findMostExpensiveItem = (prices, money) => {
  let biggestPrice = -Infinity

  prices.map(price => {
    if (price > biggestPrice && price < money) {
        biggestPrice = price
    }
  })

  console.log(biggestPrice !== -Infinity ? biggestPrice : 0)
}

const formatLines = (arr) => {
    return arr.map(it => it.trim().split(" ").map(it => parseInt(it)))
}

const main = () => {
  const lines = []
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  rl.on('line', line => {
    lines.push(line)

    if (lines.length === 2) {
      rl.close()
    }
  })

  rl.on('close', () => {
    const formatted = formatLines(lines)
    findMostExpensiveItem(formatted[1], formatted[0][1])
  })
}

main()