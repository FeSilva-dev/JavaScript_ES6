import Planet from './planet'
import { planets, distance } from './distance'

const mercurio = new Planet("Mercúrio", 0.39)
const venus = new Planet("Vênus", 0.72)
const terra = new Planet("Terra", 1)
const marte = new Planet("Marte", 1.52)
const jupiter = new Planet("Júpiter", 5.2)

planets.push(mercurio)
planets.push(venus)
planets.push(terra)
planets.push(marte)
planets.push(jupiter)

planets.forEach(element => {
    let distanceInKm = distance(element.au).toFixed(2)
    console.log(`A velocidade do ${element.name} em Unidade Astronomica é de ${element.au}. Convertido para Quilometros fica ${distanceInKm}`)
}) 