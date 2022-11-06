


class Device {
    constructor(power) {
        this.power = power;
        this.isWorking = false;
    }
    turnOn() {
        this.isWorking = true;
    }
    turnOff() {
        this.isWorking = false;
    }
    getPower() {
        console.log(`This power input is ${this.power}W`);
    }
}



class Fridge extends Device {
    constructor(power, volume) {
        super(power);
        this.volume = volume;
    }
    freeze() {
        console.log(this.isWorking ? 'Freezing...' : 'Turn on first');
    }
    getVolume() {
        console.log(`This volume is ${this.volume} liters`);
    }
}



class Washer extends Device {
    constructor(power, capacity) {
        super(power);
        this.capacity = capacity;
    }
    wash() {
        console.log(this.isWorking ? 'Washing...' : 'Turn on first');
    }
    getCapacity() {
        console.log(`This capacity is ${this.capacity}Kg`);
    }
}



const washMachine = new Washer(100, 14);
const refrigerator = new Fridge(200, 390);