//153是一个非常优美的数
//153=1*1*1+5*5*5+3*3*3
//你知道在三位整数（abc）中，满足abc=a*a*a+b*b*b+c*c*c这个条件的最大的整数是什么?
for(var i = 999; i > 99; i--) {
	var a = Math.floor(i / 100);
	var b = Math.floor(i % 100 / 10);
	var c = i % 10;
	if(a * a * a + b * b * b + c * c * c == i) {
		console.log(i);
		break;
	}
}