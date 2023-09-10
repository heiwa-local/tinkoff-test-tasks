const readline = require('readline')

const getStatesCount = (roads, citiesAmount, limit = -Infinity) => {
    const map = {}
    let statesAmount = 0
    const walkedRoads = new Set()
  
    for (const road of roads) {
        const [cityA, cityB, roadLen] = road
  
        if (roadLen > limit) {
            map[cityA] = cityB
        }
    }
  
    for (let start in map) {
        start = Number(start)
        const end = map[start]
        let currStart = start
        let currEnd = end
        let isWalked = false
        const currWalked = new Set()
  
        do {
            if (walkedRoads.has(currStart) || walkedRoads.has(currEnd)) {
                isWalked = true
            }
    
            currWalked.add(currStart)
            currWalked.add(currEnd)
    
            currStart = currEnd
            currEnd = map[currStart]
        } while (
            !isWalked &&
            currStart &&
            currEnd &&
            start !== currStart &&
            end !== currEnd
        )
    
        if (!isWalked) statesAmount++
    
        for (const road of currWalked) {
            walkedRoads.add(road)
        }
    }
  
    for (let city = 1; city <= citiesAmount; city++) {
        if (!walkedRoads.has(city)) statesAmount++
    }
  
    return statesAmount
}
  
const findX = (roads, citiesAmount) => {
    let roadLengths = [...new Set(roads.map(road => road[2]))].sort((a, b) => b - a)
    roadLengths = [roadLengths[roadLengths - 1] + 1, ...roadLengths]
    const initialStatesAmount = getStatesCount(roads, citiesAmount)
  
    for (let i = 0; i < roadLengths.length; i++) {
        const destroyVal = roadLengths[i] - 1
  
        if (initialStatesAmount === getStatesCount(roads, citiesAmount, destroyVal)) {
            return destroyVal
        }
    }
  
    console.log(roadLengths)
  
    return roadLengths[roadLengths.length - 1]
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
        lines.length === parseInt(lines[0].split(" ")[1]) + 1 ?
            rl.close() :
            {}
    })
  
    rl.on('close', () => {
        const formattedLines = formatLines(lines)

        let roads = formattedLines.slice(1)
        console.log(findX(roads, formattedLines[0][0]))
    })
}

main()