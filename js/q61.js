//我们称197为一个环形质数，因为它的所有轮转形式: 197, 971和719都是质数。 100以下有13个这样的质数: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, 和97. 100万以下有多少个环形质数？ 
function isPrimeNumber(n) {
	for(var i = 2; i <= Math.sqrt(n); i++) {
		if(n % i == 0) {
			return false;
		}
	}
	return true;
}

function isCirclePrime(n) {
	if(!isPrimeNumber(n)) {
		return false;
	}
	var str = n.toString();
	var t = str.substr(1, str.length - 1) + str.substr(0, 1);
	while(t != str) {
		if(!isPrimeNumber(Number.parseInt(t))) {
			return false;
		}
		t = t.substr(1, t.length - 1) + t.substr(0, 1);
	}
	return true;
}

var count = 0;
for(var i = 2; i < 1000000; i++) {
	if(isCirclePrime(i)) {
		count++;
	}
}
console.log(count);