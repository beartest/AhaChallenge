//整数5可以被拆分为6种不同的式子，如下：
//4 + 1 
//3 + 2 
//3 + 1 + 1 
//2 + 2 + 1 
//2 + 1 + 1 + 1 
//1 + 1 + 1 + 1 + 1 
//请问100可以被拆分为多少种不同的式子呢

//递归+动态规划方法
function splitNumber(x, maxNum) {
	var res;
	if(x == 1) {
		res = 1;
	} else if(maxNum == 1) {
		res = 1;
	} else if(x == maxNum) {
		res = (map[x][maxNum - 1] ? map[x][maxNum - 1] : splitNumber(x, maxNum - 1)) + 1;
	} else if(x < maxNum) {
		res = map[x][x] ? map[x][x] : splitNumber(x, x);
	} else if(x > maxNum) {
		res = (map[x - maxNum][maxNum] ? map[x - maxNum][maxNum] : splitNumber(x - maxNum, maxNum)) + (map[x][maxNum - 1] ? map[x][maxNum - 1] : splitNumber(x, maxNum - 1));
	}

	map[x][maxNum] = res;
	return res;
}

var n = 100;
var map = [];
for(var i = 0; i <= n; i++) {
	map[i] = [];
}
console.log(splitNumber(n, n - 1));