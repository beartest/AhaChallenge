//将“合数”483的各位数组相加(4+8+3)=15，如果将483分解成质因数相乘；483=3*7*23，把这些质因数的各位数字相加(3+7+2+3)的和也是15。即某数的各位数字之和等于他所有质因数的各位数字之和。请问1000以内符合上述特点的“合数”有多少个。
function getEveryDigitSum(n) {
	var sum = 0;
	while(n > 9) {
		sum += n % 10;
		n = Math.floor(n / 10);
	}
	sum += n;
	return sum;
}

function getPrimeFactor(num) {
	var fact = [];
	while(num > 1) {
		for(var i = 2; i <= num; i++) {
			if(num % i == 0) {
				fact.push(i);
				num = Math.floor(num / i);
				break;
			}
		}
	}
	return fact;
}

var count = 0;
for(var i = 1; i < 1000; i++) {
	var facts = getPrimeFactor(i);
	if(facts.length == 1) {
		continue;
	}
	var factsum = 0;
	for(var j = 0; j < facts.length; j++) {
		factsum += getEveryDigitSum(facts[j]);
	}
	if(factsum == getEveryDigitSum(i)) {
		count++;
	}
}
console.log(count);