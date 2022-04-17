interface MotorVehicle {
    startEngine(): boolean;
    stopEngine(): boolean;
    brake(): boolean;
    accelerate(speed: number): void;
    honk(howLong: number): void;
}

interface Flyable {
    fly(howHigh: number);
    land();
}

interface Swimmable {
    swim(howFar: number);
}

class Car implements MotorVehicle {
    startEngine(): boolean {
        return true;
    }

    stopEngine(): boolean {
        return true;
    }

    brake(): boolean {
        return true;
    }

    accelerate(speed: number): void {
        console.log(`Driving faster...`);
    }

    honk(howLong: number): void {
        console.log(`Beep beep yeah~`);
    }
}

const car = new Car();

car.startEngine();

class SecretServiceCar extends Car implements Flyable, Swimmable {
    fly(howHigh: number) {
        console.log(`Fly to ${howHigh} height...`);
    }

    land() {
        return false;
    }

    swim(howFar: number) {
        console.log(`Swimming...`);
    }
}