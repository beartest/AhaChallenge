//哥德巴赫猜想：即任一大于2的偶数都可写成两个质数之和。
//例如18可以写成5+13或者7+11。请问10000000可以写成多少种不同两个质数相加的结果？
function isPrimeNumber(n) {
	for(var i = 2; i <= Math.sqrt(n); i++) {
		if(n % i == 0) {
			return false;
		}
	}
	return true;
}

var total = 10000000;
var count = 0;
for(var i = 3; i <= total / 2; i++) {
	console.log()
	if(isPrimeNumber(i) && isPrimeNumber(total - i)) {
		count++;
	}
}
console.log(count);