class Space{
    constructor(name, maxCapacity, currentCapacity){
        this.name = name
        this.maxCapacity = maxCapacity
        this.currentCapacity = currentCapacity
    }

    convertPercentual(){
        return this.currentCapacity * 100 / this.maxCapacity
    }

    check(){
        return new Promise((resolve, reject) => {
            let percentual = this.convertPercentual()
            if(percentual >= 30){
                resolve(percentual)
            }else{
                reject(percentual)
            }
        })
    }

    turnOn(){
        this.check().then(percentual => {
            console.log(`${this.name} tem carga em porcentagem de ${percentual.toFixed(2)}%`)
        }).catch(percentual => {
            console.log(`${this.name} não pode voar, carga em ${percentual.toFixed(2)}%`)
        })
    }
}

module.exports = Space