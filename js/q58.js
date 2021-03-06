//12是能围成一个整数边长的直角三角形的最小长度，能围成整数边长的直角三角形的长度还有很多：
//12 : (3,4,5)
//24 : (6,8,10)
//30 : (5,12,13)
//36 : (9,12,15)
//40 : (8,15,17)
//48 : (12,16,20)
//相反，20就不可能是一个整数边长的直角三角形的周长。而有一些长度就不止是围成一种直角三角形了，例如120的长度能围成三种不同的直角三角形。
//120 : (30,40,50), (20,48,52), (24,45,51)
//假设直角三角形的周长为L，当12≤ L ≤ 150,0000，请问只能以一种方式构成整数边的直角三角形的L有多少个？
var match = 0;
for(var l = 12; l <= 1500; l++) {
	var halfL = Math.floor(l / 2);
	var num = 0;
	for(var a = 1; a < halfL; a++) {
		for(var b = a; b < halfL; b++) {
			var c = l - a - b;
			if(a * a + b * b == c * c) {
				//console.log(a + " " + b + " " + c);
				num++;
				if(num > 1) {
					break;
				}
			}
		}
		if(num > 1) {
			break;
		}
	}
	if(num == 1) {
		match++;
	}
}
console.log(match);