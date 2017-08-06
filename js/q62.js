//如果一个n位数使用了1到n中每个数字且只使用了一次，我们称其为Pandigital。例如，15234这个五位数，是1到5的Pandigital。 7254是一个不寻常的数，因为：39＊186 = 7254这个算式的乘数，被乘数和乘积组成了一个1到9的Pandigital组合。 找出所有能够组合成1到9的Pandigital的乘法算式中乘积的和。 提示: 有的乘积数字能够被多个乘法算式得到，所以在计算时要记得只计算它们一次。
var arr = new Array(9);
var book = new Array(9);
var res = {};

function dfs(step) {
	if(step == 9) {
		match();
		return;
	}

	for(var i = 0; i < 9; i++) {
		if(book[i] != 1) {
			arr[step] = i + 1;
			book[i] = 1;
			dfs(step + 1);
			book[i] = 0;
		}
	}
}

function match() {
	var x = 0,
		y = 0,
		z = 0;
	for(var i = 0; i < arr.length - 2; i++) {
		x = 10 * x + arr[i];
		y = 0;
		for(var j = i + 1; j < arr.length - 1; j++) {
			y = 10 * y + arr[j];
			z = 0;
			for(var k = j + 1; k < arr.length; k++) {
				z = 10 * z + arr[k];
			}
			if(x * y == z) {
				res[z] = 1;
			}
		}
	}
}

dfs(0);
var sum = 0;
for(var key in res) {
	sum += Number.parseInt(key);
}
console.log(sum);