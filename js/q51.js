//每个合数都可以写成几个质数相乘的形式。例如
//15=3*5; 9=3*3;可以写成两个质数相乘。
//12=2*2*3可以写成三个质数相乘。
//1~30之间只能写成两个质数相乘的数有4, 6, 9, 10, 14, 15, 21, 22, 25, 26
//请问1~99999999之间有多少个合数只能被写成两个质数相乘的形式。
function check(n) {
	var count = 1;
	for(var i = 2; i <= n; i++) {
		while(n != i) {
			if(n % i != 0) {
				break;
			}
			count++;
			n = Math.floor(n / i);
			if(count > 2) {
				return false;
			}
		}
	}
	return count == 2;
}

var num = 0;
for(var i = 2; i < 99999999; i++) {
	if(check(i)) {
		console.log(i);
		num++;
	}
}
console.log(num);