//第一个质数是2，第2个质数是3，第10个质数是29，请问第10001个质数是多少？
function isPrimeNumber(n) {
	for(var i = 2; i <= Math.sqrt(n); i++) {
		if(n % i == 0) {
			return false;
		}
	}
	return true;
}

var num = 1;
var count = 2;
while(count <= 10001) {
	num += 2;
	if(isPrimeNumber(num)) {
		count++;
	}
}
console.log(num);