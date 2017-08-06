//125874和它的二倍，251748, 包含着同样的数字，只是顺序不同。
//找出最小的正整数x，使得 2x, 3x, 4x, 5x, 和6x都包含同样的数字。
function compare(a, b) {
	var sa = a.toString().split("").sort().join("");
	var sb = b.toString().split("").sort().join("");
	return sa == sb;
}

for(var i = 1; i < 200000; i++) {
	var same = true;
	for(var j = 2; j < 6; j++) {
		if(!compare(i * j, i * (j + 1))) {
			same = false;
		}
	}
	if(same) {
		console.log(i);
	}
}