//请将1，3，5，7，9 这5个奇数字排列成一个5位的素数，并且同时去掉它的最高位与最低位数字后的三位数还是素数，同时去掉它的高二位与低二位数字后的一位数还是素数。
//13597就是一种符合上面要要求的顽强素数。
//请问1，3，5，7，9 这5个奇数字可以排列出多少种不同的顽强素数。
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

var arr = [1, 3, 5, 7, 9];
var book = [];
var res = [];
var count = 0;

function dfs(step) {
	if(step == 5) {
		if(isPrimeNumber(res[2]) &&
			isPrimeNumber(100 * res[1] + 10 * res[2] + res[3]) &&
			isPrimeNumber(10000 * res[0] + 1000 * res[1] + 100 * res[2] + 10 * res[3] + res[4])) {
			count++;
		}
		return;
	}

	for(var i = 0; i < arr.length; i++) {
		if(book[i] != 1) {
			book[i] = 1;
			res.push(arr[i]);
			dfs(step + 1);
			book[i] = 0;
			res.pop();
		}
	}
}

dfs(0);
console.log(count);