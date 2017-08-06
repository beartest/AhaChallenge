//整数n的尾数是6，将尾数6移到其最前面（成为最高位）后所得的数为原整数n的4倍，请问原数n至少为多大？
for(var i = 16; i < 1000000; i += 10) {
	var s = i.toString();
	s = s.substr(s.length - 1, 1) + s.substr(0, s.length - 1);
	if(s / i == 4) {
		console.log(i);
		break;
	}
}