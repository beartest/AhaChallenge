//请问第5个完数是多少？
function isPrimeNumber(n) {
	if(n == 1) {
		return false;
	}
	for(var i = 2; i <= Math.sqrt(n); i++) {
		if(n % i == 0) {
			return false;
		}
	}
	return true;
}

var count = 0;
var i = 2;
var num = 2; //2^n
while(count < 5) {
	//num - 1 => 2^n − 1 梅森素数
	if(isPrimeNumber(num - 1)) {
		//完全数：2^(n-1)*(2^n − 1)
		console.log((num / 2) * (num - 1));
		count++;
	}
	num *= 2;
}