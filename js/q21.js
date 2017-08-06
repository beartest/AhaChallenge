//请问2147483647有多少个约数？
var num = 2147483647;
var count = 0;
var i = 1
for(i = 1; i < Math.sqrt(num); i++) {
	if(num % i == 0) {
		count++;
	}
}
count *= 2;
if(i * i == num) {
	count++;
}
console.log(count);