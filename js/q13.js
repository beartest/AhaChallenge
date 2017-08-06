//我们来玩一个数字游戏，我已经想好了一个三位数abc（a是百位，b是十位，c是个位）。并且告诉你acb、bac、bca、cab、cba的和是2012。你知道我所想的那个数是多少吗？
for(var a = 0; a <= 9; a++) {
	for(var b = 0; b <= 9; b++) {
		for(var c = 0; c <= 9; c++) {
			if(122 * a + 212 * b + 221 * c == 2012) {
				console.log(a.toString() + b.toString() + c.toString());
			}
		}
	}
}