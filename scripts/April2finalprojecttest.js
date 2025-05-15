let r = 80;
let rho = [];
let columns = 12;
let rows = 6;
const PI = Math.PI;

let orientation1 = 'orientation1';
let orientation2 = 'orientation2';
let orientation3 = 'orientation3';

let theta1, theta2, theta3;
let rotatingTrio = null;

function setup() {
    theta1 = 0;
    theta2 = (2 * PI) / 3;
    theta3 = (4 * PI) / 3;
    frameRate(60);
    createCanvas(1280, 720);
    tiling(columns, rows);
}

function draw() {
    background(230);
    if (rotatingTrio === null || rotatingTrio.every(rhombus => !rhombus.isRotating)) {
        let randomIndex = Math.floor(Math.random() * (rho.length / 3)) * 3;
        rotatingTrio = [rho[randomIndex], rho[randomIndex + 1], rho[randomIndex + 2]];
        checktrio(rotatingTrio);
    }
    for (let rhombus of rho) {
        rhombus.show();
    }
}

function tiling(cols, rows) {
    let xOffset = 1.5 * r;
    let yOffset = r * sqrt(3);
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let xPos = col * xOffset;
            let yPos = row * yOffset;
            if (col % 2 === 1) {
                yPos += yOffset / 2;
            }
            rho.push(new Rhombus(orientation1, theta1, xPos, yPos));
            rho.push(new Rhombus(orientation2, theta2, xPos, yPos));
            rho.push(new Rhombus(orientation3, theta3, xPos, yPos));
        }
    }
}

class Rhombus {
    constructor(state, thetastate, xpos, ypos) {
        this.state = state;
        this.theta = thetastate;
        this.targetTheta = thetastate;
        this.rotationProgress = 0;
        this.isRotating = false;
        this.r = r;
        this.x = xpos;
        this.y = ypos;

        this.update();

    }

    update() {
        this.xn = this.r * cos(this.theta);
        this.xa = this.r * cos(this.theta + (PI / 3));
        this.xb = this.r * cos(this.theta - (PI / 3));
        this.yn = this.r * sin(this.theta);
        this.ya = this.r * sin(this.theta + (PI / 3));
        this.yb = this.r * sin(this.theta - (PI / 3));
    }

    show() {
        if (this.isRotating) {
            this.theta += (PI / 15);
            this.rotationProgress += (PI / 25);
            if (this.rotationProgress >= PI) {
                this.theta = this.targetTheta;
                this.isRotating = false;
            }
            this.update();
        }
        push();
        if (this.state == orientation1) {
            fill(125);
        } else if (this.state == orientation2) {
            fill(255);
        } else if (this.state == orientation3) {
            fill(0);
        }
        quad(this.x, this.y, this.x + this.xa, this.y + this.ya, this.x + this.xn, this.y + this.yn, this.x + this.xb, this.y + this.yb);
        pop();
    }

    rotateRhombus() {
        if (!this.isRotating) {
            this.isRotating = true;
            this.targetTheta = this.theta + PI;
            this.rotationProgress = 0;
        }
    }
}

function checktrio(trio) {
    for (let rhombus of trio) {
        rhombus.rotateRhombus();
    }
}
