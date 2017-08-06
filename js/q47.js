//亲和数(Amicable Pair)，又称亲和数、友爱数，指两个正整数中，彼此的全部约数之和（本身除外）与另一方相等。
//例如220与284：
//220的全部约数(除掉本身)相加是：1+2+4+5+10+11+20+22+44+55+110=284
//284的全部约数(除掉284本身)相加的和是：1+2+4+71+142=220
//请问1~100000以内有多少对亲和数？
function submultipleSum(n) {
	var sum = 0;
	if(n > 1) {
		sum = 1;
	}
	for(var i = 2; i <= Math.sqrt(n); i++) {
		if(n % i == 0) {
			sum += i;
			if(n !== i * i) {
				sum = sum + n / i;
			}
		}
	}
	return sum;
}

var max = 100000;
var count = 0;
for(var i = 2; i < max; i++) {
	var ss = submultipleSum(i);
	if(ss < max && submultipleSum(ss) == i && ss != i) {
		count++;
		console.log(i + "," + ss);
	}
}

console.log(count / 2);