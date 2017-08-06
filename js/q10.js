//可爱的小明特别喜欢爬楼梯，他有的时候一次爬一个台阶，有的时候一次爬两个台阶，有的时候一次爬三个台阶。如果这个楼梯有36个台阶，小明一共有多少种爬法呢？
//低效率解法
var stair = 36;
var sum = 0;
var num = 0;

function walk(step) {
	if(step > stair) {
		return;
	}
	if(step == stair) {
		num++;
		return;
	}
	for(var i = 1; i <= 3; i++) {
		walk(step + i);
	}
}

walk(0);
console.log(num);