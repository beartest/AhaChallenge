//用1～9这九个数字组成一个九位数，使得这个数从左边数第1位能被1整除，从左边数前2位组成的2位数能被2整除，从在左边数前3位组成的3位数能被3整除，依此类推，一直到整个9位数能被9整除，请问这个数是多少？
var a = [];
var book = [];

function dfs(step) {
	if(step == 9) {
		for(var i = 1; i < a.length; i++) {
			var num = 0;
			for(var j = 0; j <= i; j++) {
				num = num * 10 + a[j];
			}
			if(num % (i + 1) != 0) {
				return;
			}
		}
		console.log(a.join(''));
		return;
	}

	for(var i = 0; i < 9; i++) {
		if(book[i] != 1) {
			a[step] = i + 1;
			book[i] = 1;
			dfs(step + 1);
			book[i] = 0;
		}
	}
}

dfs(0);