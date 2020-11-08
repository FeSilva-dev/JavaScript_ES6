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

    async checkShield(){
        let newShield = this.shield * 2
        if(newShield < 100){
            return Promise.reject(`Escudo fraco`)
        }
        return newShield
    }

    async normalizeShield(shield){
        let shieldNormalize = shield * 0.7
        if(shieldNormalize > 120){
            return Promise.reject(`Escudo muito alto`)
        }
        return shieldNormalize
    }

    async check(){
        let percentual = this.convertPercentual()
        if(percentual < 30){
            return Promise.reject('Porcentagem muito baixa')
        }
        return percentual
    }

    async turnOn(){
        try{
            let shieldChecking = this.checkShield()
            let newPercentual = this.check()
            let results = await Promise.all([shieldChecking, newPercentual])
            this.shield = await this.normalizeShield(results[1])
            console.log(`${this.name} com carga de ${this.currentCapacity}GJ. Com porcentagem de ${this.convertPercentual().toFixed(1)}% e com escudo de ${this.shield.toFixed(2)}`)
        }catch(error){
            console.log(`${this.name}. Partida nao autorizada: ${error}`)
        }
    }
}

module.exports = Spaceship