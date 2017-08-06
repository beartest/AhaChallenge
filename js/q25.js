//克拉兹问题是一个简单有趣而又没有解决的数学问题。这个问题是由L. Collatz在1937年提出的。
//　　问题如下：
//　　（1）输入一个正整数n；
//　　（2）如果n=1则结束；
//　　（3）如果n是奇数，则n变为3n+1，否则n变为n/2；
//　　（4）转入第（2）步。
//举一个例子：n=13的时候，经历10步可以达到1。
//13 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
//请问10000以内，哪个数变为1需要转化的步骤多。
function collatz(n, step) {
	var res = 0;
	if(n == 1) {
		return step;
	}
	if(n % 2 != 0) {
		n = 3 * n + 1;
		res = collatz(n, step + 1);
	} else {
		n /= 2;
		res = collatz(n, step + 1);
	}
	return res;
}

var maxstep = 0;
var num;
for(var i = 1; i < 10000; i++) {
	var step = collatz(i, 0);
	if(step > maxstep) {
		maxstep = step;
		num = i;
	}
}

console.log(num + "," + maxstep);