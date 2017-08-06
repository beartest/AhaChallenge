//四胞胎素数是指一组大于3且满足{p, p+2, p+6, p+8}的四个连续素数。
//头几组四胞胎素数如下{5, 7, 11, 13}, {11, 13, 17, 19}, {101, 103, 107, 109}, {191, 193, 197, 199}, {821, 823, 827, 829}。
//请问1000000以内有多少组四胞胎素数？
function isPrimeNumber(n) {
	for(var i = 2; i <= Math.sqrt(n); i++) {
		if(n % i == 0) {
			return false;
		}
	}
	return true;
}

var num = 0;
for(var i = 0; i < 1000000; i++) {
	if(isPrimeNumber(i) && isPrimeNumber(i + 2) && isPrimeNumber(i + 6) && isPrimeNumber(i + 8)) {
		num++;
	}
}
console.log(num);