class SpaceshipEngine {
    constructor(spaceship){
        this.spaceship = spaceship
    }

    turnOn(){
        this.checkCurrent().then(currentPercentual => {
            console.log(`${this.spaceship.name} partida autorizada. carga atual em ${currentPercentual.toFixed(0)}%`)
        }).catch(currentPercentual => {
            console.log(`${this.spaceship.name} partida não autorizada. carga atual em ${currentPercentual.toFixed(0)}%`)
        })
    }

    checkCurrent(){
        return new Promise((resolve, reject) => {
            let currentPercentual = this.spaceship.checkPercentual()
            if(currentPercentual >= 30){
                resolve(currentPercentual)
            }else{
                reject(currentPercentual)
            }
        })
    }
}

module.exports = SpaceshipEngine