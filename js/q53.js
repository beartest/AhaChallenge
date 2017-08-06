//1^1 + 2^2 + 3^3 + … + 10^10 = 10405071317.
//请问 1^1 + 2^2 + 3^3 + … + 1000^1000 的最后10位数字是？
//请注意1000^1000表示的是1000的1000次方。
var sum = 0;
for(var i = 1; i <= 1000; i++) {
	var num = 1;
	for(var j = 1; j <= i; j++) {
		num *= i;
		num = num % 10000000000;
	}
	sum += num;
	sum = sum % 10000000000;
}
console.log(sum);