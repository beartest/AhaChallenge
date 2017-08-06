//2~12345中有多少个质数？
function isPrimeNumber(n) {
	for(var i = 2; i < n; i++) {
		if(n % i == 0) {
			return false;
		}
	}
	return true;
}

var num = 0;
for(var i = 2; i <= 12345; i++) {
	if(isPrimeNumber(i)) {
		num++;
	}
}
console.log(num);