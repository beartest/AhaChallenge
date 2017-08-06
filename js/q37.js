//整数5可以被拆分为6种不同的式子，如下：
//4 + 1 
//3 + 2 
//3 + 1 + 1 
//2 + 2 + 1 
//2 + 1 + 1 + 1 
//1 + 1 + 1 + 1 + 1 
//请问100可以被拆分为多少种不同的式子呢 

//递归方法，深度过大
function splitNumber(x, maxNum) {
	console.log(x + "," + maxNum);
	if(x == 1) {
		return 1;
	}
	if(maxNum == 1) {
		return 1;
	}
	if(x == maxNum) {
		return splitNumber(x, maxNum - 1) + 1;
	}
	if(x < maxNum) {
		return splitNumber(x, x);
	}
	if(x > maxNum) {
		return splitNumber(x - maxNum, maxNum) + splitNumber(x, maxNum - 1);
	}
}

console.log(splitNumber(4, 3));