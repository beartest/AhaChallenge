//请将1~9这9个阿拉伯数字分别填入9个□中。每个数字只能使用一次。使得等式成立。
//□□□+□□□=□□□
//例如173+286=459就是一个合理的组合，请问一共所有少种合理的组合？
//注意：173+286=459 与 286+173=459 是同一种组合！
var a = new Array(9);
var book = new Array(9);
var total = 0;

function dfs(step) {
	if(step == 9) {
		if(a[0] * 100 + a[1] * 10 + a[2] + a[3] * 100 + a[4] * 10 + a[5] == a[6] * 100 + a[7] * 10 + a[8]) {
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
console.log("共" + total / 2 + "个");