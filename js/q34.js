//125874，125874*2＝251748，125874和他的两倍251748是由相同的数构成，位置不同而已； 求最小的x，使得x,2x,3x,4x,5x,6x的倍数所组成的数和本身一样。
function matchNum(a, b) {
	var aStr = a.toString().split("").sort().join("");
	var bStr = b.toString().split("").sort().join("");
	return aStr == bStr;
}

var i = 1;
while(i < 1000000) {
	var matchAll = true;
	for(var j = 2; j <= 6; j++) {
		if(!matchNum(i, i * j)) {
			matchAll = false;
			break;
		}
	}
	if(matchAll) {
		console.log(i);
	}
	i++;
}