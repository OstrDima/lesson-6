function Robot() {
	this.name;
	this.act;

	this.construct = function Robot(name, act) {
		this.name = name;
		this.act = act;
	}

	this.construct("Robot", "просто працюю");

	this.work = function work() {
		console.log("Я " + this.name + " - я " + this.act + "!");
	}
}

function CoffeeRobot() {
	Robot.call(this);

	this.construct("CoffeeRobot", "варю каву");
}

function RobotDanser() {
	Robot.call(this);

	this.construct("RobotDanser", "просто танцюю");
}

function RobotCooker() {
	Robot.call(this);

	this.construct("RobotCooker", "просто готую");
}



let robot = new Robot();
let coffeeRobot = new CoffeeRobot();
let robotDanser = new RobotDanser();
let robotCooker = new RobotCooker();

robot.work();
coffeeRobot.work();
robotDanser.work();
robotCooker.work();

console.log();

let robotArray = [];
robotArray[0] = robot;
robotArray[1] = coffeeRobot;
robotArray[2] = robotDanser;
robotArray[3] = robotCooker;

for (let i = 0; i < robotArray.length; i++) {
	robotArray[i].work();
}