//相差为2的两个质数称为孪生质数。例如3和5是一对孪生质数，41和43也是一对孪生质数。那么100～200之间共有多少对孪生质数呢
function isPrimeNumber(n) {
	for(var i = 2; i < n; i++) {
		if(n % i == 0) {
			return false;
		}
	}
	return true;
}

var num = 0;
for(var i = 100; i <= 200 - 2; i++) {
	if(isPrimeNumber(i) && isPrimeNumber(i + 2)) {
		num++;
	}
}
console.log(num);