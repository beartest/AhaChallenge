//请将整数10拆分成为质数相加的方式，你会发现有5种不同的拆分方法
//7 + 3
//5 + 5
//5 + 3 + 2
//3 + 3 + 2 + 2
//2 + 2 + 2 + 2 + 2
//请找出有5000种以上拆分方法的数中最小的一个数。
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

function splitNumber(x, max) {
	if(x == 1 || max == 1) {
		return 0;
	}
	if(x == 2 || x == 3) {
		if(max >= x) {
			return 1;
		} else {
			return 0;
		}
	}

	if(x == max) {
		if(isPrimeNumber(max)) {
			return splitNumber(x, max - 1) + 1;
		} else {
			return splitNumber(x, max - 1);
		}
	}

	if(x < max) {
		return splitNumber(x, x);
	}

	if(x > max) {
		if(isPrimeNumber(max)) {
			return splitNumber(x - max, max) + splitNumber(x, max - 1);
		} else {
			return splitNumber(x, max - 1);
		}
	}
}

for(var i = 10; i < 100; i++) {
	if(splitNumber(i, i - 1) > 5000) {
		console.log(i);
		break;
	}
}