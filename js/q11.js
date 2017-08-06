//请在123456789中插入3个乘号，使得乘积最大？请问乘积最大是多少？
var max = 0;

function setPos(steps) {
	var len = steps.length;
	if(len == 3) {
		var num = calculate(steps);
		if(num > max) {
			max = num;
		}
		return;
	}
	for(var i = len == 0 ? 0 : steps[len - 1] + 1; i <= 7; i++) {
		steps.push(i);
		setPos(steps);
		steps.pop();
	}
}

function calculate(steps) {
	var pos = 0;
	var nums = [];
	var num = 0;
	for(var i = 1; i <= 9; i++) {
		num = num * 10 + i;
		if(i - 1 == steps[pos]) {
			nums[pos] = num;
			num = 0;
			pos++;
		}
	}
	nums.push(num);
	return nums[0] * nums[1] * nums[2] * nums[3];
}

setPos([]);
console.log(max);