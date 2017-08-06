//145是个奇怪的数字，因为1!+ 4! + 5! = 1 + 24 + 120 = 145。 请求出能表示成其每位数的阶乘的和的所有数的和。 请注意：由于1! = 1和2! = 2不是和，故它们并不包括在内
function factorial(n) {
	var f = 1;
	for(var i = 1; i <= n; i++) {
		f *= i;
	}
	return f;
}

var sum = 0;
for(var i = 1; i < 1000000; i++) {
	var numsum = 0;
	var num = i;
	while(num > 0) {
		numsum += factorial(num % 10);
		num = Math.floor(num / 10);
	}
	if(numsum == i && i > 10) {
		sum += i;
	}
}

console.log(sum);