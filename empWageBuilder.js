const PRESENT = 1;
const PART_TIME = 2;
const FULL_TIME_WORKING_HOUR = 8;
const WAGE_PER_HOUR = 20;

let isPresent = Math.floor(Math.random() * 3);
let workingHour;
let dailyWage;

switch(isPresent) {

	case PRESENT :
		console.log("Employee is present");
		workingHour = FULL_TIME_WORKING_HOUR;
		break;

	case PART_TIME :
		console.log("Employee is working part time");
		workingHour = FULL_TIME_WORKING_HOUR / 2;
		break;

	default :
		console.log("Employee is absent");
		workingHour = 0;
		break;

}

dailyWage = workingHour * WAGE_PER_HOUR;

console.log("Daily wage : $"+dailyWage+" USD");
