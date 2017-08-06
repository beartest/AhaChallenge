//已知有一个一元二次式：9x^2-10x+2009
//它的值可以写成两个连续整数相乘的形式
//求x的最大值和x取最大值时连续整数中较小的一个（用空格隔开）。
var x = 0;
while(x < 10000) {
	var res = 9 * x * x - 10 * x + 2009;
	var sqrt = Math.floor(Math.sqrt(res));
	for(var i = sqrt; i * (i + 1) <= res; i++) {
		if(i * (i + 1) == res) {
			console.log(x + " " + i);
		}
	}
	x++;
}