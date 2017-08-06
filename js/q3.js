//请问1~123456之间所有7的倍数和末尾含7的数的和是？
var sum = 0;
for(var i = 1; i <= 123456; i++) {
	if(i % 7 == 0 || i % 10 == 7) {
		sum += i;
	}
}
console.log(sum);