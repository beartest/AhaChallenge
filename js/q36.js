//如果一个数正过来读和反过来读都是一样的，这样的是数叫做“回文数”，例如12321和1221就是两个典型的回文数。现在随便选择一个数，然后加上把它反过来写所得到的数，直到得到一个回文数为止。例如67这个数通过2步就会得到回文数484。我们称67的“回文之路”为2步。
//67+76=143
//143+341=484
//
//在例如69的“回文之路”为4步
//69+96=165
//165+561=726
//726+627=1353
//1353+3531=4884
//请问100以内，哪一个数的“回文之路”最长，请输出这个数
function isPalindrome(n) {
	var s = n.toString().split("");
	while(s.length > 1) {
		if(s.shift() != s.pop()) {
			return false;
		}
	}
	return true;
}

function getReverse(n) {
	var m = 0;
	while(n > 0) {
		m = 10 * m + n % 10;
		n = Math.floor(n / 10);
	}
	return m;
}

function palindromeStep(n) {
	var step = 0;
	while(!isPalindrome(n)) {
		n += getReverse(n);
		step++;
	}
	return step;
}

var max = 0;
var target = 0;
for(var i = 0; i < 100; i++) {
	var num = palindromeStep(i);
	if(num > max) {
		max = num;
		target = i;
	}
}

console.log(target);