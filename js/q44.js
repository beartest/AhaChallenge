//用自然数300，262，205，167分别除以一个整数x(x不等于1)，所得到的余数都相同，请问这个x是多少？
for(var x = 2; x < 167; x++) {
	if(300 % x == 262 % x && 262 % x == 205 % x && 205 % x == 167 % x) {
		console.log(x);
	}
}