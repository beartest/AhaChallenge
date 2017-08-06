//一个数如果恰好等于它的真因子之和，这个数就称为“完数”。　例如：第一个完数是6，它有约数1、2、3、6，除去它本身6外，其余3个数相加，1+2+3=6。第二个完数是28，它有约数1、2、4、7、14、28，除去它本身28外，其余5个数相加，1+2+4+7+14=28。请问10000以内所有完数的和是？
function isPerfectNumber(n) {
	if(n == 1) {
		return false;
	}
	var sum = 0;
	for(var i = 1; i < n; i++) {
		if(n % i == 0) {
			sum += i;
		}
	}
	return sum == n;
}

var sum = 0;
for(var i = 1; i < 10000; i++) {
	if(isPerfectNumber(i)) {
		sum += i;
	}
}
console.log(sum);