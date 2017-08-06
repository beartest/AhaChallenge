//请将1~9这9个阿拉伯数字分别填入9个□中。每个数字只能使用一次。使得等式成立。
//□□*□□□=□□□□
//例如12*483=5796就是一个合理的组合，请问一共所有少种合理的组合？
//注意：12*483=5796 与 483*12=5796 是同一种组合！
var a = new Array(9);
var book = new Array(9);
var total = 0;

function dfs(step) {
	if(step == 9) {
		if((a[0] * 10 + a[1]) * (a[2] * 100 + a[3] * 10 + a[4]) == a[5] * 1000 + a[6] * 100 + a[7] * 10 + a[8]) {
			total++;
		}
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
console.log("共" + total + "个");