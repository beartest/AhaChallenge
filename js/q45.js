//回文素数是一个既是素数又是回文数的整数。
//回文素数是指，对一个整数n（n≥2）从左向右和从由向左读其结果值相同且是素数，即称n为回文素数。
//例如：2，3，5，7，11，101，131，151，181，191，313，353，373，383，727，757，787，797，919，929……都是回文素数 
//请问2～1000000之间有多少个回文素数
function isPalindrome(n) {
	var s = n.toString().split("");
	while(s.length > 1) {
		if(s.shift() != s.pop()) {
			return false;
		}
	}
	return true;
}

function isPrimeNumber(n) {
	for(var i = 2; i <= Math.sqrt(n); i++) {
		if(n % i == 0) {
			return false;
		}
	}
	return true;
}

var arr = [2];
var count = 1;

for(var i = 3; i < 1000000; i += 2) {
	if(isPalindrome(i) && isPrimeNumber(i)) {
		arr.push(i);
		count++;
	}
}
console.log(count);