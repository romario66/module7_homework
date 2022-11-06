


function Device(power) {
    this.power = power;
    this.isWorking = false;
}
Device.prototype.turnOn = function () {
    this.isWorking = true;
}
Device.prototype.turnOff = function() {
    this.isWorking = false;
}
Device.prototype.getPower = function() {
    console.log(`The power input is ${this.power}W`)
}



function Fridge(power, volume) {
    this.volume = volume;
    this.power = power;
    this.isWorking = false;
}
Fridge.prototype = new Device();
Fridge.prototype.freeze = function() {
    console.log(this.isWorking ? 'Freezing' : 'Turn on first');
}
Fridge.prototype.getVolume = function() {
    console.log(`This volume is ${volume} liters`);
}



function Washer(power, capacity) {
    this.capacity = capacity;
    this.power = power;
    this.isWorking = false;
}
Washer.prototype = new Device();
Washer.prototype.wash = function() {
    console.log(this.isWorking ? 'Washing' : 'Turn on first');
}
Washer.prototype.getCapacity = function() {
    console.log(`This capacity is ${capacity}kg`);
}



const fridge = new Fridge(190, 300);
const washer = new Washer(100, 12);