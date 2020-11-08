class Spaceship {
    constructor(name, maxCapacity, currentCapacity, shield){
        this.name = name
        this.maxCapacity = maxCapacity
        this.currentCapacity = currentCapacity
        this.shield = shield
    }

    convertPercentual(){
        return this.currentCapacity * 100 / this.maxCapacity
    }

    checkShield(){
        return new Promise((resolve, reject) => {
            let newShield = this.shield * 2
            if(newShield < 100){
                reject(`Escudo fraco`)
            }else{
                resolve(newShield)
            }
        })
    }

    normalizeShield(shield){
        return new Promise((resolve, reject) => {
            let shieldNormalize = shield * 0.7
            if(shieldNormalize > 120){
                reject(`Escudo muito alto`)
            }else{
                resolve(shieldNormalize)
            }
        })
    }

    check(){
        return new Promise((resolve, reject) => {
            let percentual = this.convertPercentual()
            if(percentual >= 30){
                resolve(percentual)
            }else{
                reject('Porcentagem muito baixa')
            }
        })
    }

    turnOn(){
        let shieldChecking = this.checkShield()
        let newPercentual = this.check()
        Promise.all([shieldChecking, newPercentual]).then(results => {
            return this.normalizeShield(results[0]).then(newShield => {
                this.shield = newShield
                console.log(`${this.name} com carga de ${this.currentCapacity}GJ. Com porcentagem de ${this.convertPercentual().toFixed(1)}% e com escudo de ${this.shield}`)
            })
        }).catch(error => {
            console.log(`A nave ${this.name} não pode partir. Motivo: ${error}`)
        })
    }
}

module.exports = Spaceship