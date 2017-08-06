//若正整数n是她平方数的尾部，则称n为守形数，又称同构数。
//如5×5=25
//6×6=36
//76×76=5776
//376×376=141376
//请问1~100000000以内有多少个守形数

//守形数，同构数
function isIsomorphism(i) {
	var num = i;
	var product = i * i;
	while(num > 0) {
		if(num % 10 != product % 10) {
			return false;
		}
		num = Math.floor(num / 10);
		product = Math.floor(product / 10);
	}
	return true;
}

var count = 0;
for(var i = 1; i < 100000000; i++) {
	if(isIsomorphism(i)) {
		console.log(i);
		count++;
	}
}
console.log(count);