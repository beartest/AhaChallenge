//给你n根火柴棍，你可以拼出多少个形如“A+B=C”的等式？等式中的A、B、C是用火柴棍拼出的整数（若该数非零，则最高位不能是0）。用火柴棍拼数字0-9的拼法如图所示：（脑补吧） 
//注意：
//1. 加号与等号各自需要两根火柴棍
//2. 如果A≠B，则A+B=C与B+A=C视为不同的等式（A、B、C>=0）
//3. n根火柴棍必须全部用上
//当n=14的时候，只能拼成2种不同的等式（2个等式为0+1=1和1+0=1。）
//请问当n=20的时候，能拼成多少种不同的等式？
function match(m) {
	var sum = 0;
	var max = 1111;
	for(var a = 0; a < max; a++) {
		for(var b = 0; b < max; b++) {
			var c = a + b;
			if(fun(a) + fun(b) + fun(c) == m - 4) {
				sum++;
			}
		}
	}
	console.log('共' + sum + "个式子");
}

function fun(x) {
	var f = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];
	var num = 0;
	while(parseInt(x / 10) != 0) {
		num += f[x % 10];
		x = parseInt(x / 10);
	}
	num += f[x % 10];
	return num;
}

match(20);