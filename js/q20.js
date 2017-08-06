//1 2 3 4，这个序列很特殊，将1 2 3 4首尾相接组成一个环，你会发现其中任意2个相邻的数字相加，结果均为素数。（1+2，2+3，3+4，4+1都为素数）。现在给你1 2 3 4 5 6这个6个数，请把这6个摆成一个环，使得任意2个相邻的数字相加，结果均为素数。请输出所序列中最小的一个。注意：输出这个序列时，两个数用一个空格隔开，序列末尾没有多余的空格。
function isPrimeNumber(n) {
	for(var i = 2; i <= Math.sqrt(n); i++) {
		if(n % i == 0) {
			return false;
		}
	}
	return true;
}

var a = [];
var book = [];
var num;

function dfs(step) {
	if(num != undefined) {
		return;
	}
	if(step == 6) {
		num = a.join(" ");
		console.log(num);
		return;
	}
	for(var i = 1; i <= 6; i++) {
		if(book[i - 1] != 1 && isPrimeNumber(a[a.length - 1] + i)) {
			a.push(i);
			book[i - 1] = 1;
			dfs(step + 1);
			book[i - 1] = 0;
			a.pop();
		}
	}
}

a.push(1);
book[0] = 1;
dfs(1);