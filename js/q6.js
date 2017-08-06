//2~10以内的质数有2,3,5,7。所以2~10之间所有质数的和是17。
//那么2~100之间所有质数的和是？ 
function isPrimeNumber(n) {
	for(var i = 2; i < n; i++) {
		if(n % i == 0) {
			return false;
		}
	}
	return true;
}

var sum = 0;
for(var i = 2; i <= 100; i++) {
	if(isPrimeNumber(i)) {
		sum += i;
	}
}
console.log(sum);