//还是克拉兹问题。
//不过现在是问1000000以内，哪个数变为1需要转化的步骤多。
function collatz(n) {
	var step = 0;
	while(n > 1) {
		if(n % 2 != 0) {
			n = 3 * n + 1;
		} else {
			n /= 2;
		}
		step++;
	}
	return step;
}

var maxstep = 0;
var num;
for(var i = (1000000 - 1) / 3; i < 1000000; i += 2) {
	if((i * 2 - 1) % 3 == 0) {
		continue;
	}
	var step = collatz(i);
	if(step > maxstep) {
		maxstep = step;
		num = i;
	}
}

console.log(num + "," + maxstep);