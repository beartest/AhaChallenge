//3797这个数很有趣。它本身是质数，而且如果我们从左边不断地裁去数字，得到的仍然都是质数：3797,797,97,7。而且我们还可以从右向左裁剪：3797,379,37,3，得到的仍然都是质数。 找出所有这样从左向右和从右向左都可以裁剪的质数之和。 注意：2,3,5和7不被认为是可裁剪的质数
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

function match(num) {
	var n = num;
	while(n > 0) {
		if(!isPrimeNumber(n)) {
			return false;
		}
		n = Math.floor(n / 10);
	}
	var i = 10;
	while(num / i >= 1) {
		if(!isPrimeNumber(num % i)) {
			return false;
		}
		i *= 10;
	}
	return true;
}

var sum = 0;
for(var i = 10; i < 1000000; i++) {
	if(match(i)) {
		sum += i;
	}
}
console.log(sum);