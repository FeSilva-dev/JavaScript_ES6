const Spaceship = require('./spaceship')
const SpaceshipEngine = require('./spaceshipEngine')

const sophia = new Spaceship("Sophia", 10, 5)
const amsterda = new Spaceship("Amsterdã", 14, 10)
const dwarfStart = new Spaceship("Estrela-Anã", 20, 4)

const sophiaEngine = new SpaceshipEngine(sophia)
const amsterdaEngine = new SpaceshipEngine(amsterda)
const dwarfStartEngine = new SpaceshipEngine(dwarfStart)

dwarfStartEngine.turnOn()
sophiaEngine.turnOn()
amsterdaEngine.turnOn()

console.log(`promisses`)