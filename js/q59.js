//1～1000之间哪一个整数的约数最多？
var max = 0;
var num;
for(var i = 1; i <= 1000; i++) {
	var sum = 0;
	for(var j = 1; j <= i; j++) {
		if(i % j == 0) {
			sum++;
		}
		if(sum > max) {
			max = sum;
			num = i;
		}
	}
}
console.log(num);