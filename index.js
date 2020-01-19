function Car(color, name, horsePower) {
    this.color = color;
    this.name = name;
    this.horsePower = horsePower;

    this.averageSpeedPerHour = 80;
    this.mileage = 0;
    this.toOverview = 15000;
    this.tankCapacity = 60;
    this.combustionFor100km = 10;
}

Car.prototype.displayInfo = function() {
    return `Your car is ${this.name} and it is in ${this.color} color. His horse power is ${this.horsePower}. You already drove ${this.mileage}kms. To overview left ${this.toOverview} kms.`;
}

Car.prototype.tank = function(fuelTanked) {
    this.tankCapacity += fuelTanked
    if(this.tankCapacity > 60) {
        this.tankCapacity -= 60;
        return `Za dużo nalałeś kolego o całe ${this.tankCapacity} litrow`;
    }

    return `Zatankowałeś do ${this.tankCapacity} litrów`;

}

Car.prototype.drive = function(kmsDriven,averageSpeedPerHourDriving) {

    if(averageSpeedPerHourDriving > 80) {
      
        this.combustionFor100km +=(averageSpeedPerHourDriving - this.averageSpeedPerHour) / 1000 * this.horsePower + 10;
    } 

    this.averageSpeedPerHourDriving = averageSpeedPerHourDriving;
    this.mileage += kmsDriven;
    this.toOverview -= kmsDriven;

    this.tankCapacity -= this.combustionFor100km / (100 / kmsDriven);
    if (this.tankCapacity <= 0) {
        return `Przykro mi ale zabrakło Ci paliwa i nie pojedziesz nigdzie, trzeba było wcześniej zatankować :)`
    }
    if(this.tankCapacity <= 10) {
         return `Na stację zatankować szybkoooo pedro!! Zostało Ci ${this.tankCapacity} litrów paliwa! `;
    } 

    return `Now combustion has changed for ${this.combustionFor100km} Liter per 100km and you have ${this.tankCapacity} litres left in your tank!!`;
}

const ford = new Car("yellow","Ford Mustang",420)

console.log(ford.drive(100, 150));
console.log(ford.tankCapacity);
console.log(ford.displayInfo());
console.log(ford.tank(40));
console.log(ford.tankCapacity);
console.log(ford.drive(40, 150));
console.log(ford.displayInfo());

