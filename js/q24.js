//质数41也是一个很特殊的质数，他是由6个连续的质数相加而得。
//41 = 2 + 3 + 5 + 7 + 11 + 13
//在100以内，再没有连续7个质数和也是质数的，因此41是100以内最长的连续质数和。
//1000以内最长连续质数和是953，他由21个连续的质数相加。
//953=7+11+13+17+19+23+29+31+37+41+43+47+53+59+61+67+71+73+79+83+89
//10000000以内最长连续质数和是？
//如果有多个解，请输出较小的一个解
function isPrimeNumber(n) {
	for(var i = 2; i <= Math.sqrt(n); i++) {
		if(n % i == 0) {
			return false;
		}
	}
	return true;
}

var primeArr = [];
var sum = 0;
for(var i = 2; sum + i <= 10000000; i++) {
	if(isPrimeNumber(i)) {
		primeArr.push(i);
		sum += i;
	}
}

var minsum = sum;
var maxstep = 0;
for(var i = 0; i < primeArr.length - maxstep; i++) {
	var tempsum = sum;
	for(var j = primeArr.length - 1; j >= maxstep && j > i; j--) {
		if(isPrimeNumber(tempsum)) {
			if(j - i + 1 > maxstep || (j - i + 1 == maxstep && tempsum < minsum)) {
				maxstep = j - i + 1;
				minsum = tempsum;
			}
			break;
		}
		tempsum -= primeArr[j];
	}
	sum -= primeArr[i];
}
console.log(minsum);