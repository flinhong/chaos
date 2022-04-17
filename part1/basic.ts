interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
}

interface Circle {
    kind: 'circle';
    radius: number;
}

type Shape = Rectangle | Circle;

function area(shape: Shape): number {
    switch(shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'rectangle':
            return shape.height * shape.width;
    }
}

const myRec: Rectangle = {
    kind: 'rectangle',
    width: 10,
    height: 2
}

console.log(`Rec area is ${area(myRec)}`);

const myCircle: Circle = {
    kind: 'circle',
    radius: 10
}

console.log(`Circle area is ${area(myCircle)}`);