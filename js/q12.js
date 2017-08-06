//请在5483298756中插入3个乘号，使得乘积最大？请问乘积最大是多少？
var str = "5483298756";
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
	for(var i = len == 0 ? 0 : steps[len - 1] + 1; i <= str.length - 2; i++) {
		steps.push(i);
		setPos(steps);
		steps.pop();
	}
}

function calculate(steps) {
	var nums = [];
	nums.push(str.substring(0, steps[0] + 1));
	nums.push(str.substring(steps[0] + 1, steps[1] + 1));
	nums.push(str.substring(steps[1] + 1, steps[2] + 1));
	nums.push(str.substring(steps[2] + 1, str.length));
	return nums[0] * nums[1] * nums[2] * nums[3];
}

setPos([]);
console.log(max);