class Spaceship {
    constructor(name, maxCapacity, currentCapacity){
        this.name = name
        this.maxCapacity = maxCapacity
        this.currentCapacity = currentCapacity
    }

    checkPercentual() {
        return this.currentCapacity * 100 / this.maxCapacity
    }
}

module.exports = Spaceship